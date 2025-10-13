<template>
  <div class="game-comments">
    <!-- Заголовок секции -->
    <div class="comments-header d-flex align-center justify-space-between mb-4">
      <h3 class="text-h6">
        <v-icon icon="mdi-comment-multiple" class="me-2"></v-icon>
        Комментарии
        <span v-if="totalComments > 0" class="text-medium-emphasis">
          ({{ totalComments }})
        </span>
      </h3>
      
      <!-- Сортировка -->
      <v-select
        v-model="sortBy"
        :items="sortOptions"
        label="Сортировка"
        variant="outlined"
        density="compact"
        style="max-width: 200px;"
        hide-details
        @update:model-value="handleSortChange"
      ></v-select>
    </div>

    <!-- Форма добавления комментария -->
    <div v-if="canComment" class="comment-form mb-6">
      <v-card variant="outlined" class="pa-4">
        <v-card-title class="pa-0 mb-3">Оставить комментарий</v-card-title>
        
        <v-textarea
          v-model="newComment"
          label="Ваш комментарий"
          variant="outlined"
          rows="4"
          :max-length="1000"
          counter
          :rules="commentRules"
          class="mb-3"
        ></v-textarea>

        <div class="d-flex justify-space-between align-center">
          <div class="d-flex align-center gap-2">
            <v-checkbox
              v-model="anonymousComment"
              label="Анонимный комментарий"
              density="compact"
              hide-details
            ></v-checkbox>
          </div>
          
          <div class="d-flex gap-2">
            <v-btn
              variant="outlined"
              @click="resetCommentForm"
            >
              Отменить
            </v-btn>
            <v-btn
              color="primary"
              :disabled="!newComment.trim() || newComment.length > 1000"
              :loading="submittingComment"
              @click="submitComment"
            >
              Отправить
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>

    <!-- Приглашение войти -->
    <div v-else-if="showLoginPrompt" class="login-prompt mb-6">
      <v-alert type="info" variant="tonal">
        <div class="d-flex align-center justify-space-between">
          <span>Войдите, чтобы оставить комментарий</span>
          <v-btn variant="outlined" size="small" href="/login/">
            Войти
          </v-btn>
        </div>
      </v-alert>
    </div>

    <!-- Список комментариев -->
    <div v-if="comments.length > 0" class="comments-list">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="comment-item mb-4"
      >
        <v-card :variant="comment.isHighlighted ? 'elevated' : 'outlined'" :elevation="comment.isHighlighted ? 3 : 0">
          <v-card-text class="pa-4">
            <!-- Заголовок комментария -->
            <div class="comment-header d-flex align-center justify-space-between mb-3">
              <div class="d-flex align-center gap-3">
                <!-- Аватар -->
                <v-avatar :size="40">
                  <v-img v-if="comment.user.avatar" :src="comment.user.avatar"></v-img>
                  <v-icon v-else icon="mdi-account-circle" size="40"></v-icon>
                </v-avatar>
                
                <!-- Информация о пользователе -->
                <div>
                  <div class="font-weight-medium">
                    {{ comment.user.name || 'Анонимный пользователь' }}
                    <v-chip
                      v-if="comment.user.isAuthor"
                      size="x-small"
                      color="primary"
                      variant="flat"
                      class="ms-2"
                    >
                      Автор
                    </v-chip>
                    <v-chip
                      v-if="comment.user.isVerified"
                      size="x-small"
                      color="success"
                      variant="flat"
                      class="ms-1"
                    >
                      ✓
                    </v-chip>
                  </div>
                  <div class="text-caption text-medium-emphasis">
                    {{ formatDate(comment.createdAt) }}
                    <span v-if="comment.updatedAt && comment.updatedAt !== comment.createdAt">
                      (изменено {{ formatDate(comment.updatedAt) }})
                    </span>
                  </div>
                </div>
              </div>

              <!-- Действия -->
              <div class="comment-actions">
                <v-menu>
                  <template #activator="{ props }">
                    <v-btn
                      v-bind="props"
                      icon="mdi-dots-vertical"
                      size="small"
                      variant="text"
                    ></v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-if="!comment.isReported"
                      prepend-icon="mdi-flag"
                      @click="reportComment(comment.id)"
                    >
                      <v-list-item-title>Пожаловаться</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      v-if="canEditComment(comment)"
                      prepend-icon="mdi-pencil"
                      @click="startEditComment(comment)"
                    >
                      <v-list-item-title>Редактировать</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      v-if="canDeleteComment(comment)"
                      prepend-icon="mdi-delete"
                      @click="deleteComment(comment.id)"
                    >
                      <v-list-item-title>Удалить</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>

            <!-- Текст комментария -->
            <div v-if="editingComment !== comment.id" class="comment-content">
              <div class="text-body-1 mb-3" v-html="formatCommentText(comment.content)"></div>
              
              <!-- Вложения -->
              <div v-if="comment.attachments && comment.attachments.length > 0" class="comment-attachments mb-3">
                <v-row>
                  <v-col
                    v-for="attachment in comment.attachments"
                    :key="attachment.id"
                    cols="auto"
                  >
                    <v-img
                      :src="attachment.url"
                      :alt="attachment.name"
                      width="100"
                      height="100"
                      cover
                      class="rounded cursor-pointer"
                      @click="openImageDialog(attachment.url)"
                    ></v-img>
                  </v-col>
                </v-row>
              </div>
            </div>

            <!-- Форма редактирования -->
            <div v-else class="comment-edit">
              <v-textarea
                v-model="editCommentText"
                variant="outlined"
                rows="3"
                :max-length="1000"
                counter
                class="mb-3"
              ></v-textarea>
              <div class="d-flex gap-2">
                <v-btn
                  size="small"
                  variant="outlined"
                  @click="cancelEditComment"
                >
                  Отмена
                </v-btn>
                <v-btn
                  size="small"
                  color="primary"
                  :loading="updatingComment"
                  @click="updateComment(comment.id)"
                >
                  Сохранить
                </v-btn>
              </div>
            </div>

            <!-- Лайки и ответы -->
            <div class="comment-footer d-flex align-center justify-space-between">
              <div class="d-flex align-center gap-3">
                <v-btn
                  :variant="comment.userLiked ? 'flat' : 'text'"
                  :color="comment.userLiked ? 'primary' : 'default'"
                  size="small"
                  :prepend-icon="comment.userLiked ? 'mdi-thumb-up' : 'mdi-thumb-up-outline'"
                  @click="toggleLike(comment.id)"
                >
                  {{ comment.likesCount || 0 }}
                </v-btn>
                
                <v-btn
                  variant="text"
                  size="small"
                  prepend-icon="mdi-reply"
                  @click="toggleReplyForm(comment.id)"
                >
                  Ответить
                </v-btn>
              </div>
              
              <!-- Показать ответы -->
              <v-btn
                v-if="comment.repliesCount > 0"
                variant="text"
                size="small"
                @click="toggleReplies(comment.id)"
              >
                {{ showReplies[comment.id] ? 'Скрыть' : 'Показать' }} 
                {{ comment.repliesCount }} {{ getRepliesText(comment.repliesCount) }}
                <v-icon :icon="showReplies[comment.id] ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
              </v-btn>
            </div>

            <!-- Форма ответа -->
            <div v-if="replyingTo === comment.id" class="reply-form mt-3">
              <v-textarea
                v-model="replyText"
                label="Ваш ответ"
                variant="outlined"
                rows="3"
                :max-length="1000"
                counter
                class="mb-2"
              ></v-textarea>
              <div class="d-flex gap-2">
                <v-btn
                  size="small"
                  variant="outlined"
                  @click="cancelReply"
                >
                  Отмена
                </v-btn>
                <v-btn
                  size="small"
                  color="primary"
                  :disabled="!replyText.trim()"
                  :loading="submittingReply"
                  @click="submitReply(comment.id)"
                >
                  Ответить
                </v-btn>
              </div>
            </div>

            <!-- Ответы -->
            <div v-if="showReplies[comment.id] && comment.replies" class="replies mt-4">
              <div
                v-for="reply in comment.replies"
                :key="reply.id"
                class="reply-item ml-6 pa-3 bg-grey-lighten-4 rounded mb-2"
              >
                <div class="d-flex align-center gap-2 mb-2">
                  <v-avatar size="32">
                    <v-img v-if="reply.user.avatar" :src="reply.user.avatar"></v-img>
                    <v-icon v-else icon="mdi-account-circle" size="32"></v-icon>
                  </v-avatar>
                  <div>
                    <div class="font-weight-medium text-body-2">{{ reply.user.name }}</div>
                    <div class="text-caption text-medium-emphasis">{{ formatDate(reply.createdAt) }}</div>
                  </div>
                </div>
                <div class="text-body-2" v-html="formatCommentText(reply.content)"></div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <!-- Пустое состояние -->
    <div v-else class="empty-state text-center py-8">
      <v-icon icon="mdi-comment-outline" size="64" class="mb-3 text-medium-emphasis"></v-icon>
      <div class="text-h6 mb-2">Пока нет комментариев</div>
      <div class="text-body-2 text-medium-emphasis">
        {{ canComment ? 'Будьте первым, кто оставит комментарий!' : 'Войдите, чтобы оставить первый комментарий' }}
      </div>
    </div>

    <!-- Загрузить еще -->
    <div v-if="hasMoreComments" class="load-more text-center mt-4">
      <v-btn
        variant="outlined"
        :loading="loadingMore"
        @click="loadMoreComments"
      >
        Загрузить еще комментарии
      </v-btn>
    </div>

    <!-- Диалог изображения -->
    <v-dialog v-model="imageDialog" max-width="80%">
      <v-card>
        <v-img :src="selectedImage" contain></v-img>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="imageDialog = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

const props = defineProps({
  // ID игры
  gameId: {
    type: [String, Number],
    required: true
  },
  // Может ли пользователь комментировать
  canComment: {
    type: Boolean,
    default: false
  },
  // Показывать приглашение войти
  showLoginPrompt: {
    type: Boolean,
    default: true
  },
  // Текущий пользователь
  currentUser: {
    type: Object,
    default: null
  },
  // Начальные комментарии
  initialComments: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits([
  'comment-submit',
  'comment-update', 
  'comment-delete',
  'comment-like',
  'reply-submit',
  'comment-report'
])

// Состояние
const comments = ref(props.initialComments)
const totalComments = ref(0)
const hasMoreComments = ref(false)
const loadingMore = ref(false)

// Новый комментарий
const newComment = ref('')
const anonymousComment = ref(false)
const submittingComment = ref(false)

// Редактирование
const editingComment = ref(null)
const editCommentText = ref('')
const updatingComment = ref(false)

// Ответы
const replyingTo = ref(null)
const replyText = ref('')
const submittingReply = ref(false)
const showReplies = ref({})

// Сортировка
const sortBy = ref('newest')
const sortOptions = [
  { title: 'Сначала новые', value: 'newest' },
  { title: 'Сначала старые', value: 'oldest' },
  { title: 'По популярности', value: 'popular' },
  { title: 'По количеству лайков', value: 'likes' }
]

// Диалог изображения
const imageDialog = ref(false)
const selectedImage = ref('')

// Правила валидации
const commentRules = [
  v => !!v?.trim() || 'Комментарий не может быть пустым',
  v => v?.length <= 1000 || 'Комментарий должен быть не более 1000 символов'
]

const submitComment = async () => {
  if (!newComment.value.trim()) return

  submittingComment.value = true
  try {
    const commentData = {
      gameId: props.gameId,
      content: newComment.value.trim(),
      anonymous: anonymousComment.value
    }

    emit('comment-submit', commentData)
    
    // Симуляция API запроса
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    resetCommentForm()
  } catch (error) {
    console.error('Ошибка при отправке комментария:', error)
  } finally {
    submittingComment.value = false
  }
}

const resetCommentForm = () => {
  newComment.value = ''
  anonymousComment.value = false
}

const startEditComment = (comment) => {
  editingComment.value = comment.id
  editCommentText.value = comment.content
}

const cancelEditComment = () => {
  editingComment.value = null
  editCommentText.value = ''
}

const updateComment = async (commentId) => {
  updatingComment.value = true
  try {
    emit('comment-update', {
      commentId,
      content: editCommentText.value.trim()
    })
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    cancelEditComment()
  } catch (error) {
    console.error('Ошибка при обновлении комментария:', error)
  } finally {
    updatingComment.value = false
  }
}

const deleteComment = async (commentId) => {
  if (confirm('Вы уверены, что хотите удалить комментарий?')) {
    emit('comment-delete', commentId)
  }
}

const toggleLike = (commentId) => {
  emit('comment-like', commentId)
}

const toggleReplyForm = (commentId) => {
  if (replyingTo.value === commentId) {
    cancelReply()
  } else {
    replyingTo.value = commentId
    replyText.value = ''
  }
}

const cancelReply = () => {
  replyingTo.value = null
  replyText.value = ''
}

const submitReply = async (parentId) => {
  if (!replyText.value.trim()) return

  submittingReply.value = true
  try {
    emit('reply-submit', {
      parentId,
      content: replyText.value.trim()
    })
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    cancelReply()
  } catch (error) {
    console.error('Ошибка при отправке ответа:', error)
  } finally {
    submittingReply.value = false
  }
}

const toggleReplies = (commentId) => {
  showReplies.value[commentId] = !showReplies.value[commentId]
}

const reportComment = (commentId) => {
  emit('comment-report', commentId)
}

const loadMoreComments = async () => {
  loadingMore.value = true
  try {
    // Здесь должна быть логика загрузки дополнительных комментариев
    await new Promise(resolve => setTimeout(resolve, 1000))
  } finally {
    loadingMore.value = false
  }
}

const handleSortChange = (newSort) => {
  // Здесь должна быть логика пересортировки комментариев
  console.log('Сортировка изменена:', newSort)
}

const canEditComment = (comment) => {
  return props.currentUser && comment.user.id === props.currentUser.id
}

const canDeleteComment = (comment) => {
  return props.currentUser && (
    comment.user.id === props.currentUser.id || 
    props.currentUser.isAdmin || 
    props.currentUser.isModerator
  )
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatCommentText = (text) => {
  // Простое форматирование текста (можно расширить)
  return text
    .replace(/\n/g, '<br>')
    .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>')
}

const getRepliesText = (count) => {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'ответов'
  }

  switch (lastDigit) {
    case 1:
      return 'ответ'
    case 2:
    case 3:
    case 4:
      return 'ответа'
    default:
      return 'ответов'
  }
}

const openImageDialog = (imageSrc) => {
  selectedImage.value = imageSrc
  imageDialog.value = true
}

onMounted(() => {
  totalComments.value = comments.value.length
})
</script>

<style scoped>
.game-comments {
  width: 100%;
}

.comment-item {
  transition: all 0.3s ease;
}

.comment-item:hover {
  transform: translateY(-1px);
}

.comment-content {
  word-wrap: break-word;
}

.comment-content :deep(a) {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
}

.comment-content :deep(a):hover {
  text-decoration: underline;
}

.reply-item {
  border-left: 3px solid rgb(var(--v-theme-primary));
}

.empty-state {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 600px) {
  .comment-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .reply-item {
    margin-left: 16px;
  }
}
</style>


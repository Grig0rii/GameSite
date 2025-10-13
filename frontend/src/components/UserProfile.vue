<template>
  <v-container class="py-8">
    <v-row>
      <!-- Основная информация профиля -->
      <v-col cols="12" md="4">
        <v-card elevation="3" class="mb-6">
          <v-card-text class="text-center pa-6">
            <!-- Аватар -->
            <div class="avatar-section mb-4">
              <v-avatar size="120" class="mb-3">
                <v-img v-if="user.avatar" :src="user.avatar" :alt="user.name"></v-img>
                <v-icon v-else icon="mdi-account-circle" size="120"></v-icon>
              </v-avatar>
              
              <div v-if="isOwnProfile" class="avatar-actions">
                <FileUpload
                  v-model="newAvatar"
                  accept="image/*"
                  :max-size="2 * 1024 * 1024"
                  :preview="false"
                  :enable-drag-drop="false"
                  class="d-none"
                  ref="avatarUpload"
                  @change="handleAvatarChange"
                />
                <v-btn
                  size="small"
                  variant="outlined"
                  prepend-icon="mdi-camera"
                  @click="triggerAvatarUpload"
                >
                  Изменить фото
                </v-btn>
              </div>
            </div>

            <!-- Основная информация -->
            <div class="user-info">
              <h2 class="text-h5 mb-2">
                {{ user.name || 'Пользователь' }}
                <v-chip
                  v-if="user.isVerified"
                  size="small"
                  color="success"
                  variant="flat"
                  class="ms-2"
                >
                  <v-icon icon="mdi-check-decagram" size="16"></v-icon>
                  Верифицирован
                </v-chip>
              </h2>
              
              <div class="text-body-2 text-medium-emphasis mb-3">
                @{{ user.username || 'username' }}
              </div>
              
              <div v-if="user.bio" class="user-bio text-body-1 mb-4">
                {{ user.bio }}
              </div>
              
              <!-- Статистика -->
              <div class="user-stats">
                <v-row>
                  <v-col cols="4" class="text-center">
                    <div class="text-h6 font-weight-bold">{{ user.gamesCount || 0 }}</div>
                    <div class="text-caption">Игр</div>
                  </v-col>
                  <v-col cols="4" class="text-center">
                    <div class="text-h6 font-weight-bold">{{ user.downloadsCount || 0 }}</div>
                    <div class="text-caption">Скачиваний</div>
                  </v-col>
                  <v-col cols="4" class="text-center">
                    <div class="text-h6 font-weight-bold">{{ user.followersCount || 0 }}</div>
                    <div class="text-caption">Подписчиков</div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-card-text>

          <!-- Действия -->
          <v-card-actions v-if="!isOwnProfile" class="justify-center pa-4">
            <v-btn
              :color="isFollowing ? 'error' : 'primary'"
              :variant="isFollowing ? 'outlined' : 'elevated'"
              :prepend-icon="isFollowing ? 'mdi-account-minus' : 'mdi-account-plus'"
              @click="toggleFollow"
            >
              {{ isFollowing ? 'Отписаться' : 'Подписаться' }}
            </v-btn>
            
            <v-btn
              variant="outlined"
              prepend-icon="mdi-message"
              class="ms-2"
              @click="sendMessage"
            >
              Сообщение
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Дополнительная информация -->
        <v-card elevation="3">
          <v-card-title>Информация</v-card-title>
          <v-card-text>
            <div class="info-item d-flex align-center mb-3">
              <v-icon icon="mdi-calendar-account" class="me-3"></v-icon>
              <div>
                <div class="text-body-2">Регистрация</div>
                <div class="text-caption text-medium-emphasis">
                  {{ formatDate(user.joinedAt) }}
                </div>
              </div>
            </div>
            
            <div v-if="user.location" class="info-item d-flex align-center mb-3">
              <v-icon icon="mdi-map-marker" class="me-3"></v-icon>
              <div>
                <div class="text-body-2">Местоположение</div>
                <div class="text-caption text-medium-emphasis">{{ user.location }}</div>
              </div>
            </div>
            
            <div v-if="user.website" class="info-item d-flex align-center mb-3">
              <v-icon icon="mdi-web" class="me-3"></v-icon>
              <div>
                <div class="text-body-2">Веб-сайт</div>
                <a :href="user.website" target="_blank" class="text-caption text-primary">
                  {{ user.website }}
                </a>
              </div>
            </div>
            
            <div class="info-item d-flex align-center">
              <v-icon icon="mdi-clock" class="me-3"></v-icon>
              <div>
                <div class="text-body-2">Последняя активность</div>
                <div class="text-caption text-medium-emphasis">
                  {{ formatDate(user.lastActiveAt) }}
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Контент профиля -->
      <v-col cols="12" md="8">
        <!-- Вкладки -->
        <v-card elevation="3">
          <v-tabs
            v-model="activeTab"
            bg-color="primary"
            slider-color="white"
            class="tabs-header"
          >
            <v-tab value="games">
              <v-icon icon="mdi-gamepad-variant" class="me-2"></v-icon>
              Игры
            </v-tab>
            <v-tab value="favorites">
              <v-icon icon="mdi-heart" class="me-2"></v-icon>
              Избранное
            </v-tab>
            <v-tab value="reviews">
              <v-icon icon="mdi-star" class="me-2"></v-icon>
              Обзоры
            </v-tab>
            <v-tab v-if="isOwnProfile" value="settings">
              <v-icon icon="mdi-cog" class="me-2"></v-icon>
              Настройки
            </v-tab>
          </v-tabs>

          <v-card-text class="pa-6">
            <v-tabs-window v-model="activeTab">
              <!-- Игры пользователя -->
              <v-tabs-window-item value="games">
                <div class="games-section">
                  <div class="d-flex align-center justify-space-between mb-4">
                    <h3 class="text-h6">
                      Игры пользователя ({{ userGames.length }})
                    </h3>
                    <v-select
                      v-model="gamesSort"
                      :items="gamesSortOptions"
                      label="Сортировка"
                      variant="outlined"
                      density="compact"
                      style="max-width: 200px;"
                      hide-details
                    ></v-select>
                  </div>

                  <v-row v-if="userGames.length > 0">
                    <v-col
                      v-for="game in userGames"
                      :key="game.id"
                      cols="12"
                      sm="6"
                      lg="4"
                    >
                      <GameCard :game="game" />
                    </v-col>
                  </v-row>

                  <div v-else class="empty-state text-center py-8">
                    <v-icon icon="mdi-gamepad-variant-outline" size="64" class="mb-3 text-medium-emphasis"></v-icon>
                    <div class="text-h6 mb-2">Нет загруженных игр</div>
                    <div class="text-body-2 text-medium-emphasis">
                      {{ isOwnProfile ? 'Загрузите свою первую игру!' : 'Пользователь еще не загружал игры' }}
                    </div>
                    <v-btn
                      v-if="isOwnProfile"
                      color="primary"
                      href="/upload/"
                      class="mt-3"
                      prepend-icon="mdi-upload"
                    >
                      Загрузить игру
                    </v-btn>
                  </div>
                </div>
              </v-tabs-window-item>

              <!-- Избранные игры -->
              <v-tabs-window-item value="favorites">
                <div class="favorites-section">
                  <h3 class="text-h6 mb-4">
                    Избранные игры ({{ favoriteGames.length }})
                  </h3>

                  <v-row v-if="favoriteGames.length > 0">
                    <v-col
                      v-for="game in favoriteGames"
                      :key="game.id"
                      cols="12"
                      sm="6"
                      lg="4"
                    >
                      <GameCard :game="game" />
                    </v-col>
                  </v-row>

                  <div v-else class="empty-state text-center py-8">
                    <v-icon icon="mdi-heart-outline" size="64" class="mb-3 text-medium-emphasis"></v-icon>
                    <div class="text-h6 mb-2">Нет избранных игр</div>
                    <div class="text-body-2 text-medium-emphasis">
                      {{ isOwnProfile ? 'Добавьте игры в избранное, чтобы они появились здесь' : 'Пользователь не добавил игры в избранное' }}
                    </div>
                  </div>
                </div>
              </v-tabs-window-item>

              <!-- Обзоры -->
              <v-tabs-window-item value="reviews">
                <div class="reviews-section">
                  <h3 class="text-h6 mb-4">
                    Обзоры и рейтинги ({{ userReviews.length }})
                  </h3>

                  <div v-if="userReviews.length > 0" class="reviews-list">
                    <v-card
                      v-for="review in userReviews"
                      :key="review.id"
                      variant="outlined"
                      class="mb-4"
                    >
                      <v-card-text>
                        <div class="d-flex align-center mb-3">
                          <v-img
                            :src="review.game.image"
                            width="60"
                            height="60"
                            cover
                            class="rounded me-3"
                          ></v-img>
                          <div class="flex-grow-1">
                            <div class="font-weight-medium">{{ review.game.title }}</div>
                            <GameRating
                              :rating="review.rating"
                              :readonly="true"
                              :show-value="false"
                              size="small"
                            />
                          </div>
                          <div class="text-caption text-medium-emphasis">
                            {{ formatDate(review.createdAt) }}
                          </div>
                        </div>
                        <div v-if="review.comment" class="text-body-2">
                          {{ review.comment }}
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>

                  <div v-else class="empty-state text-center py-8">
                    <v-icon icon="mdi-star-outline" size="64" class="mb-3 text-medium-emphasis"></v-icon>
                    <div class="text-h6 mb-2">Нет обзоров</div>
                    <div class="text-body-2 text-medium-emphasis">
                      {{ isOwnProfile ? 'Оставьте первый обзор на игру' : 'Пользователь еще не оставлял обзоры' }}
                    </div>
                  </div>
                </div>
              </v-tabs-window-item>

              <!-- Настройки (только для собственного профиля) -->
              <v-tabs-window-item v-if="isOwnProfile" value="settings">
                <div class="settings-section">
                  <h3 class="text-h6 mb-4">Настройки профиля</h3>
                  
                  <v-form ref="settingsForm" v-model="settingsValid">
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="editableUser.name"
                          label="Имя"
                          :rules="[rules.required]"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="editableUser.username"
                          label="Имя пользователя"
                          :rules="[rules.required, rules.username]"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      
                      <v-col cols="12">
                        <v-textarea
                          v-model="editableUser.bio"
                          label="О себе"
                          :max-length="500"
                          counter
                          variant="outlined"
                          rows="3"
                        ></v-textarea>
                      </v-col>
                      
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="editableUser.location"
                          label="Местоположение"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="editableUser.website"
                          label="Веб-сайт"
                          :rules="[rules.url]"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-divider class="my-6"></v-divider>

                    <!-- Настройки приватности -->
                    <h4 class="text-h6 mb-4">Приватность</h4>
                    
                    <v-switch
                      v-model="editableUser.profilePublic"
                      label="Публичный профиль"
                      color="primary"
                      class="mb-2"
                    ></v-switch>
                    
                    <v-switch
                      v-model="editableUser.showEmail"
                      label="Показывать email"
                      color="primary"
                      class="mb-2"
                    ></v-switch>
                    
                    <v-switch
                      v-model="editableUser.allowMessages"
                      label="Разрешить личные сообщения"
                      color="primary"
                      class="mb-4"
                    ></v-switch>

                    <!-- Кнопки -->
                    <div class="d-flex gap-3">
                      <v-btn
                        color="primary"
                        :disabled="!settingsValid"
                        :loading="updatingProfile"
                        @click="updateProfile"
                      >
                        Сохранить изменения
                      </v-btn>
                      
                      <v-btn
                        variant="outlined"
                        @click="resetSettings"
                      >
                        Отменить
                      </v-btn>
                    </div>
                  </v-form>
                </div>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import GameCard from './GameCard.vue'
import GameRating from './GameRating.vue'
import FileUpload from './FileUpload.vue'

const props = defineProps({
  // ID пользователя или объект пользователя
  user: {
    type: Object,
    required: true
  },
  // Текущий пользователь (для определения, свой ли это профиль)
  currentUser: {
    type: Object,
    default: null
  }
})

const emit = defineEmits([
  'profile-update',
  'avatar-update',
  'follow-toggle',
  'message-send'
])

// Состояние
const activeTab = ref('games')
const isFollowing = ref(false)
const newAvatar = ref(null)
const avatarUpload = ref(null)

// Данные для редактирования
const editableUser = reactive({ ...props.user })
const settingsValid = ref(false)
const updatingProfile = ref(false)

// Данные контента
const userGames = ref([])
const favoriteGames = ref([])
const userReviews = ref([])
const gamesSort = ref('newest')

const gamesSortOptions = [
  { title: 'Сначала новые', value: 'newest' },
  { title: 'Сначала старые', value: 'oldest' },
  { title: 'По популярности', value: 'popular' },
  { title: 'По рейтингу', value: 'rating' }
]

// Правила валидации
const rules = {
  required: v => !!v || 'Поле обязательно для заполнения',
  username: v => /^[a-zA-Z0-9_]{3,20}$/.test(v) || 'Имя пользователя должно содержать только буквы, цифры и подчеркивания (3-20 символов)',
  url: v => !v || /^https?:\/\/.+/.test(v) || 'Введите корректный URL'
}

const isOwnProfile = computed(() => {
  return props.currentUser && props.currentUser.id === props.user.id
})

const triggerAvatarUpload = () => {
  avatarUpload.value?.$el.querySelector('input[type="file"]')?.click()
}

const handleAvatarChange = (file) => {
  if (file) {
    emit('avatar-update', file)
  }
}

const toggleFollow = () => {
  isFollowing.value = !isFollowing.value
  emit('follow-toggle', {
    userId: props.user.id,
    following: isFollowing.value
  })
}

const sendMessage = () => {
  emit('message-send', props.user.id)
}

const updateProfile = async () => {
  updatingProfile.value = true
  try {
    emit('profile-update', { ...editableUser })
    
    // Симуляция API запроса
    await new Promise(resolve => setTimeout(resolve, 1000))
    
  } catch (error) {
    console.error('Ошибка при обновлении профиля:', error)
  } finally {
    updatingProfile.value = false
  }
}

const resetSettings = () => {
  Object.assign(editableUser, props.user)
}

const formatDate = (date) => {
  if (!date) return 'Неизвестно'
  return new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Загрузка данных при монтировании
onMounted(async () => {
  // Здесь должна быть загрузка данных пользователя
  // Для демонстрации используем заглушки
  
  userGames.value = [
    // Пример данных игр пользователя
  ]
  
  favoriteGames.value = [
    // Пример избранных игр
  ]
  
  userReviews.value = [
    // Пример обзоров пользователя
  ]
})
</script>

<style scoped>
.avatar-section {
  position: relative;
}

.avatar-actions {
  margin-top: 8px;
}

.user-stats {
  margin-top: 16px;
}

.info-item {
  padding: 8px 0;
}

.tabs-header :deep(.v-tab) {
  color: rgba(255, 255, 255, 0.7);
}

.tabs-header :deep(.v-tab--selected) {
  color: white;
}

.empty-state {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.games-section,
.favorites-section,
.reviews-section,
.settings-section {
  min-height: 400px;
}

.reviews-list .v-card {
  transition: transform 0.2s ease;
}

.reviews-list .v-card:hover {
  transform: translateY(-2px);
}

@media (max-width: 960px) {
  .user-info h2 {
    font-size: 1.5rem;
  }
  
  .user-stats .text-h6 {
    font-size: 1.2rem;
  }
}
</style>


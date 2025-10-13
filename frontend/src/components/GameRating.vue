<template>
  <div class="game-rating">
    <!-- Основной рейтинг -->
    <div class="rating-display d-flex align-center gap-2">
      <!-- Звезды -->
      <div class="stars-container">
        <v-rating
          v-model="currentRating"
          :readonly="readonly"
          :hover="!readonly"
          :size="size"
          :color="color"
          :active-color="activeColor"
          :empty-icon="emptyIcon"
          :full-icon="fullIcon"
          :half-icon="halfIcon"
          :half-increments="halfIncrements"
          :clearable="clearable && !readonly"
          :ripple="false"
          class="rating-stars"
          @update:model-value="handleRatingChange"
        ></v-rating>
      </div>

      <!-- Числовое значение -->
      <div v-if="showValue" class="rating-value">
        <span class="text-h6 font-weight-medium">{{ formattedRating }}</span>
        <span v-if="showMaxValue" class="text-caption text-medium-emphasis">/{{ maxRating }}</span>
      </div>

      <!-- Количество оценок -->
      <div v-if="showCount && ratingCount > 0" class="rating-count">
        <span class="text-caption text-medium-emphasis">
          ({{ ratingCount }} {{ getRatingCountText(ratingCount) }})
        </span>
      </div>
    </div>

    <!-- Детальная статистика -->
    <div v-if="showDetails && ratingStats" class="rating-details mt-3">
      <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="rating-detail-row d-flex align-center gap-2 mb-1">
        <span class="text-body-2" style="min-width: 60px;">{{ star }} звезд</span>
        <v-progress-linear
          :model-value="getStarPercentage(star)"
          :color="getStarColor(star)"
          height="8"
          class="flex-grow-1"
        ></v-progress-linear>
        <span class="text-caption text-medium-emphasis" style="min-width: 40px; text-align: right;">
          {{ ratingStats[star] || 0 }}
        </span>
      </div>
    </div>

    <!-- Форма оценки -->
    <div v-if="canRate && showRatingForm" class="rating-form mt-4">
      <v-card variant="outlined" class="pa-4">
        <v-card-title class="text-h6 pa-0 mb-3">
          {{ userRating ? 'Изменить оценку' : 'Оценить игру' }}
        </v-card-title>
        
        <div class="d-flex align-center gap-3 mb-3">
          <span class="text-body-2">Ваша оценка:</span>
          <v-rating
            v-model="userRatingValue"
            :size="size"
            :color="activeColor"
            hover
            clearable
            @update:model-value="handleUserRatingChange"
          ></v-rating>
          <span v-if="userRatingValue" class="text-body-2 font-weight-medium">
            {{ userRatingValue }}/5
          </span>
        </div>

        <!-- Комментарий к оценке -->
        <v-textarea
          v-if="allowComments"
          v-model="userComment"
          label="Комментарий к оценке (необязательно)"
          variant="outlined"
          rows="3"
          :max-length="500"
          counter
          class="mb-3"
        ></v-textarea>

        <div class="d-flex gap-2">
          <v-btn
            color="primary"
            :disabled="!userRatingValue"
            :loading="submitting"
            @click="submitRating"
          >
            {{ userRating ? 'Обновить' : 'Отправить' }}
          </v-btn>
          
          <v-btn
            v-if="userRating"
            variant="outlined"
            color="error"
            :loading="submitting"
            @click="deleteRating"
          >
            Удалить оценку
          </v-btn>
        </div>
      </v-card>
    </div>

    <!-- Кнопка для показа формы оценки -->
    <div v-else-if="canRate && !showRatingForm" class="rating-action mt-3">
      <v-btn
        variant="outlined"
        color="primary"
        prepend-icon="mdi-star"
        @click="showRatingForm = true"
      >
        {{ userRating ? 'Изменить оценку' : 'Оценить игру' }}
      </v-btn>
    </div>

    <!-- Сообщение для неавторизованных -->
    <div v-else-if="!canRate && showLoginPrompt" class="login-prompt mt-3">
      <v-alert type="info" variant="tonal">
        <div class="d-flex align-center justify-space-between">
          <span>Войдите, чтобы оценить игру</span>
          <v-btn variant="outlined" size="small" href="/login/">
            Войти
          </v-btn>
        </div>
      </v-alert>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  // Средний рейтинг
  rating: {
    type: Number,
    default: 0
  },
  // Количество оценок
  ratingCount: {
    type: Number,
    default: 0
  },
  // Статистика по звездам
  ratingStats: {
    type: Object,
    default: () => ({})
  },
  // Оценка текущего пользователя
  userRating: {
    type: Number,
    default: null
  },
  // Комментарий пользователя
  userRatingComment: {
    type: String,
    default: ''
  },
  // Максимальная оценка
  maxRating: {
    type: Number,
    default: 5
  },
  // Размер звезд
  size: {
    type: [String, Number],
    default: 'default'
  },
  // Цвет неактивных звезд
  color: {
    type: String,
    default: 'grey-lighten-1'
  },
  // Цвет активных звезд
  activeColor: {
    type: String,
    default: 'amber'
  },
  // Иконка пустой звезды
  emptyIcon: {
    type: String,
    default: 'mdi-star-outline'
  },
  // Иконка полной звезды
  fullIcon: {
    type: String,
    default: 'mdi-star'
  },
  // Иконка половинной звезды
  halfIcon: {
    type: String,
    default: 'mdi-star-half-full'
  },
  // Половинные приращения
  halfIncrements: {
    type: Boolean,
    default: true
  },
  // Только для чтения
  readonly: {
    type: Boolean,
    default: false
  },
  // Можно очистить
  clearable: {
    type: Boolean,
    default: true
  },
  // Показывать числовое значение
  showValue: {
    type: Boolean,
    default: true
  },
  // Показывать максимальное значение
  showMaxValue: {
    type: Boolean,
    default: false
  },
  // Показывать количество оценок
  showCount: {
    type: Boolean,
    default: true
  },
  // Показывать детальную статистику
  showDetails: {
    type: Boolean,
    default: false
  },
  // Может ли пользователь оценивать
  canRate: {
    type: Boolean,
    default: false
  },
  // Показывать приглашение войти
  showLoginPrompt: {
    type: Boolean,
    default: true
  },
  // Разрешить комментарии к оценкам
  allowComments: {
    type: Boolean,
    default: false
  },
  // ID игры для API запросов
  gameId: {
    type: [String, Number],
    default: null
  }
})

const emit = defineEmits(['rating-change', 'user-rating-submit', 'user-rating-delete'])

const currentRating = ref(props.rating)
const userRatingValue = ref(props.userRating)
const userComment = ref(props.userRatingComment)
const showRatingForm = ref(false)
const submitting = ref(false)

const formattedRating = computed(() => {
  if (currentRating.value === 0) return '0.0'
  return currentRating.value.toFixed(1)
})

const totalRatings = computed(() => {
  return Object.values(props.ratingStats).reduce((sum, count) => sum + count, 0)
})

watch(() => props.rating, (newRating) => {
  currentRating.value = newRating
})

watch(() => props.userRating, (newUserRating) => {
  userRatingValue.value = newUserRating
})

watch(() => props.userRatingComment, (newComment) => {
  userComment.value = newComment
})

const handleRatingChange = (newRating) => {
  if (!props.readonly) {
    emit('rating-change', newRating)
  }
}

const handleUserRatingChange = (newRating) => {
  // Дополнительная логика при изменении пользовательской оценки
}

const submitRating = async () => {
  if (!userRatingValue.value) return

  submitting.value = true
  try {
    const ratingData = {
      gameId: props.gameId,
      rating: userRatingValue.value,
      comment: userComment.value || null
    }

    emit('user-rating-submit', ratingData)
    
    // Здесь должен быть API запрос
    // await api.submitRating(ratingData)
    
    // Симуляция API запроса
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    showRatingForm.value = false
  } catch (error) {
    console.error('Ошибка при отправке оценки:', error)
  } finally {
    submitting.value = false
  }
}

const deleteRating = async () => {
  submitting.value = true
  try {
    emit('user-rating-delete', {
      gameId: props.gameId,
      rating: userRatingValue.value
    })
    
    // Здесь должен быть API запрос
    // await api.deleteRating(props.gameId)
    
    // Симуляция API запроса
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    userRatingValue.value = null
    userComment.value = ''
    showRatingForm.value = false
  } catch (error) {
    console.error('Ошибка при удалении оценки:', error)
  } finally {
    submitting.value = false
  }
}

const getStarPercentage = (stars) => {
  if (!totalRatings.value) return 0
  const count = props.ratingStats[stars] || 0
  return (count / totalRatings.value) * 100
}

const getStarColor = (stars) => {
  const colors = {
    5: 'green',
    4: 'light-green',
    3: 'amber',
    2: 'orange',
    1: 'red'
  }
  return colors[stars] || 'grey'
}

const getRatingCountText = (count) => {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'оценок'
  }

  switch (lastDigit) {
    case 1:
      return 'оценка'
    case 2:
    case 3:
    case 4:
      return 'оценки'
    default:
      return 'оценок'
  }
}
</script>

<style scoped>
.game-rating {
  width: 100%;
}

.rating-display {
  align-items: center;
}

.rating-stars {
  flex-shrink: 0;
}

.rating-value {
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.rating-details {
  max-width: 300px;
}

.rating-detail-row {
  font-size: 0.875rem;
}

.rating-form {
  border-radius: 8px;
}

.login-prompt {
  max-width: 400px;
}

@media (max-width: 600px) {
  .rating-display {
    flex-wrap: wrap;
    gap: 8px;
  }

  .rating-details {
    max-width: 100%;
  }
}
</style>


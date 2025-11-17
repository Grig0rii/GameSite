<template>
  <v-container class="py-8">
    <v-row>
      <!-- Основная информация об игре -->
      <v-col cols="12" md="8">
        <v-card elevation="3" class="mb-6">
          <v-img :src="game.image_url" height="400" cover>
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary" size="50"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          
          <v-card-item>
            <div class="d-flex justify-space-between align-center mb-4">
              <div>
                <v-card-title class="text-h4 mb-2">{{ game.title }}</v-card-title>
                <v-card-subtitle class="text-h6">
                  <v-icon icon="mdi-account" class="me-2"></v-icon>
                  {{ game.developer }}
                </v-card-subtitle>
              </div>
              <div class="text-center">
                <div class="text-h4 text-success mb-1">{{ formatPrice(game.price) }}</div>
                <v-chip :color="genreColor" variant="elevated">{{ game.genre }}</v-chip>
              </div>
            </div>
          </v-card-item>

          <v-card-text>
            <div class="mb-4">
              <h3 class="text-h6 mb-2">Описание</h3>
              <p class="text-body-1">{{ game.description || 'Описание не предоставлено' }}</p>
            </div>

            <v-divider class="my-4"></v-divider>

            <div class="d-flex flex-wrap gap-4 mb-4">
              <div class="text-center">
                <v-icon icon="mdi-calendar" size="24" class="mb-1"></v-icon>
                <div class="text-caption">Дата выхода</div>
                <div class="font-weight-medium">{{ formatDate(game.release_date) }}</div>
              </div>
              <div class="text-center">
                <v-icon icon="mdi-download" size="24" class="mb-1"></v-icon>
                <div class="text-caption">Скачиваний</div>
                <div class="font-weight-medium">{{ game.download_count || 0 }}</div>
              </div>
              <div class="text-center">
                <v-icon icon="mdi-star" size="24" class="mb-1"></v-icon>
                <div class="text-caption">Рейтинг</div>
                <div class="font-weight-medium">{{ game.rating || 'Н/Д' }}</div>
              </div>
              <div class="text-center">
                <v-icon icon="mdi-harddisk" size="24" class="mb-1"></v-icon>
                <div class="text-caption">Размер</div>
                <div class="font-weight-medium">{{ formatFileSize(game.file_size) }}</div>
              </div>
            </div>
          </v-card-text>
        </v-card>

        <!-- Скриншоты -->
        <v-card v-if="game.screenshots && game.screenshots.length" elevation="3" class="mb-6">
          <v-card-title>Скриншоты</v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="(screenshot, index) in game.screenshots" :key="index" cols="6" md="4">
                <v-img 
                  :src="screenshot" 
                  height="150" 
                  cover 
                  class="rounded cursor-pointer"
                  @click="openImageDialog(screenshot)"
                >
                </v-img>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Боковая панель -->
      <v-col cols="12" md="4">
        <!-- Действия -->
        <v-card elevation="3" class="mb-6">
          <v-card-title>Действия</v-card-title>
          <v-card-text>
            <v-btn 
              v-if="game.download_url"
              :href="game.download_url"
              color="primary"
              size="large"
              block
              prepend-icon="mdi-download"
              class="mb-3"
            >
              Скачать игру
            </v-btn>
            
            <v-btn
              variant="outlined"
              block
              prepend-icon="mdi-heart"
              class="mb-3"
              @click="toggleFavorite"
            >
              {{ isFavorite ? 'Убрать из избранного' : 'В избранное' }}
            </v-btn>
            
            <v-btn
              variant="outlined"
              block
              prepend-icon="mdi-share"
              @click="shareGame"
            >
              Поделиться
            </v-btn>
          </v-card-text>
        </v-card>

        <!-- Информация об авторе -->
        <v-card elevation="3" class="mb-6">
          <v-card-title>Автор</v-card-title>
          <v-card-text>
            <div class="d-flex align-center mb-3">
              <v-avatar size="48" class="me-3">
                <v-icon icon="mdi-account-circle" size="48"></v-icon>
              </v-avatar>
              <div>
                <div class="font-weight-medium">{{ game.uploaded_by }}</div>
                <div class="text-caption">Разработчик</div>
              </div>
            </div>
            <div class="text-caption">
              Загружено: {{ formatDate(game.uploaded_at) }}
            </div>
          </v-card-text>
        </v-card>

        <!-- Системные требования -->
        <v-card v-if="game.system_requirements" elevation="3">
          <v-card-title>Системные требования</v-card-title>
          <v-card-text>
            <div v-if="game.system_requirements.os" class="mb-2">
              <strong>ОС:</strong> {{ game.system_requirements.os }}
            </div>
            <div v-if="game.system_requirements.processor" class="mb-2">
              <strong>Процессор:</strong> {{ game.system_requirements.processor }}
            </div>
            <div v-if="game.system_requirements.memory" class="mb-2">
              <strong>Память:</strong> {{ game.system_requirements.memory }}
            </div>
            <div v-if="game.system_requirements.graphics" class="mb-2">
              <strong>Видеокарта:</strong> {{ game.system_requirements.graphics }}
            </div>
            <div v-if="game.system_requirements.storage">
              <strong>Место на диске:</strong> {{ game.system_requirements.storage }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Диалог просмотра изображений -->
    <v-dialog v-model="imageDialog" max-width="80%">
      <v-card>
        <v-img :src="selectedImage" contain></v-img>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="imageDialog = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { formatPriceUSD } from '../utils/currency'

const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})

const isFavorite = ref(false)
const imageDialog = ref(false)
const selectedImage = ref('')

const genreColor = computed(() => {
  const genreColors = {
    'Экшен': 'red',
    'Приключения': 'green',
    'Стратегия': 'blue',
    'RPG': 'purple',
    'Симулятор': 'orange',
    'Спорт': 'teal',
    'Гонки': 'amber',
    'Инди': 'pink'
  }
  return genreColors[props.game.genre] || 'primary'
})

const formatPrice = (price) => formatPriceUSD(price)

const formatDate = (date) => {
  if (!date) return 'Не указано'
  return new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatFileSize = (bytes) => {
  if (!bytes) return 'Не указано'
  const sizes = ['Байт', 'КБ', 'МБ', 'ГБ']
  if (bytes === 0) return '0 Байт'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
  // Здесь можно добавить логику сохранения в локальное хранилище или отправки на сервер
}

const shareGame = () => {
  if (navigator.share) {
    navigator.share({
      title: props.game.title,
      text: props.game.description,
      url: window.location.href
    })
  } else {
    // Fallback - копирование в буфер обмена
    navigator.clipboard.writeText(window.location.href)
    // Здесь можно показать уведомление об успешном копировании
  }
}

const openImageDialog = (imageSrc) => {
  selectedImage.value = imageSrc
  imageDialog.value = true
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>

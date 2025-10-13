<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="3">
          <v-card-title class="text-h5 pa-6">
            <v-icon icon="mdi-upload" class="me-2"></v-icon>
            Загрузить новую игру
          </v-card-title>
          
          <v-card-text class="pa-6">
            <v-form ref="gameForm" v-model="isFormValid" @submit.prevent="submitGame">
              <!-- Основная информация -->
              <div class="mb-6">
                <h3 class="text-h6 mb-4">Основная информация</h3>
                
                <v-text-field
                  v-model="gameData.title"
                  label="Название игры"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-gamepad-variant"
                  variant="outlined"
                  class="mb-4"
                ></v-text-field>

                <v-textarea
                  v-model="gameData.description"
                  label="Описание игры"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-text"
                  variant="outlined"
                  rows="4"
                  class="mb-4"
                ></v-textarea>

                <v-text-field
                  v-model="gameData.developer"
                  label="Разработчик"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-account"
                  variant="outlined"
                  class="mb-4"
                ></v-text-field>

                <v-select
                  v-model="gameData.genre"
                  :items="genres"
                  label="Жанр"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-tag"
                  variant="outlined"
                  class="mb-4"
                ></v-select>

                <v-text-field
                  v-model="gameData.price"
                  label="Цена (₽)"
                  type="number"
                  min="0"
                  step="0.01"
                  :rules="[rules.required, rules.positiveNumber]"
                  prepend-inner-icon="mdi-currency-rub"
                  variant="outlined"
                  class="mb-4"
                ></v-text-field>

                <v-text-field
                  v-model="gameData.release_date"
                  label="Дата выхода"
                  type="date"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-calendar"
                  variant="outlined"
                  class="mb-4"
                ></v-text-field>
              </div>

              <v-divider class="my-6"></v-divider>

              <!-- Файлы -->
              <div class="mb-6">
                <h3 class="text-h6 mb-4">Файлы</h3>
                
                <!-- Загрузка главного файла игры -->
                <FileUpload
                  v-model="gameData.game_file"
                  label="Файл игры"
                  accept=".zip,.rar,.7z,.exe"
                  :rules="[rules.required]"
                  :max-size="500 * 1024 * 1024"
                  class="mb-4"
                />

                <!-- Загрузка изображения обложки -->
                <FileUpload
                  v-model="gameData.cover_image"
                  label="Обложка игры"
                  accept="image/*"
                  :rules="[rules.required]"
                  :max-size="5 * 1024 * 1024"
                  :preview="true"
                  class="mb-4"
                />

                <!-- Загрузка скриншотов -->
                <FileUpload
                  v-model="gameData.screenshots"
                  label="Скриншоты (необязательно)"
                  accept="image/*"
                  :multiple="true"
                  :max-size="5 * 1024 * 1024"
                  :preview="true"
                  class="mb-4"
                />
              </div>

              <v-divider class="my-6"></v-divider>

              <!-- Системные требования -->
              <div class="mb-6">
                <h3 class="text-h6 mb-4">Системные требования</h3>
                
                <v-text-field
                  v-model="gameData.system_requirements.os"
                  label="Операционная система"
                  prepend-inner-icon="mdi-desktop-classic"
                  variant="outlined"
                  class="mb-4"
                ></v-text-field>

                <v-text-field
                  v-model="gameData.system_requirements.processor"
                  label="Процессор"
                  prepend-inner-icon="mdi-chip"
                  variant="outlined"
                  class="mb-4"
                ></v-text-field>

                <v-text-field
                  v-model="gameData.system_requirements.memory"
                  label="Оперативная память"
                  prepend-inner-icon="mdi-memory"
                  variant="outlined"
                  class="mb-4"
                ></v-text-field>

                <v-text-field
                  v-model="gameData.system_requirements.graphics"
                  label="Видеокарта"
                  prepend-inner-icon="mdi-expansion-card"
                  variant="outlined"
                  class="mb-4"
                ></v-text-field>

                <v-text-field
                  v-model="gameData.system_requirements.storage"
                  label="Место на диске"
                  prepend-inner-icon="mdi-harddisk"
                  variant="outlined"
                  class="mb-4"
                ></v-text-field>
              </div>

              <!-- Кнопки -->
              <div class="d-flex gap-3">
                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  :loading="isUploading"
                  :disabled="!isFormValid"
                  prepend-icon="mdi-upload"
                >
                  Загрузить игру
                </v-btn>
                
                <v-btn
                  variant="outlined"
                  size="large"
                  @click="resetForm"
                >
                  Сбросить
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Прогресс загрузки -->
    <v-dialog v-model="uploadDialog" persistent max-width="400">
      <v-card>
        <v-card-title>Загрузка игры</v-card-title>
        <v-card-text>
          <v-progress-linear
            :model-value="uploadProgress"
            height="25"
            striped
            color="primary"
          >
            <template #default="{ value }">
              <strong>{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
          <div class="text-center mt-3">
            Пожалуйста, подождите...
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
import FileUpload from './FileUpload.vue'

const gameForm = ref(null)
const isFormValid = ref(false)
const isUploading = ref(false)
const uploadDialog = ref(false)
const uploadProgress = ref(0)

const genres = [
  'Экшен',
  'Приключения',
  'Стратегия',
  'RPG',
  'Симулятор',
  'Спорт',
  'Гонки',
  'Инди',
  'Аркада',
  'Логические',
  'Платформер',
  'Шутер'
]

const gameData = reactive({
  title: '',
  description: '',
  developer: '',
  genre: '',
  price: 0,
  release_date: '',
  game_file: null,
  cover_image: null,
  screenshots: [],
  system_requirements: {
    os: '',
    processor: '',
    memory: '',
    graphics: '',
    storage: ''
  }
})

const rules = {
  required: value => !!value || 'Это поле обязательно для заполнения',
  positiveNumber: value => value >= 0 || 'Значение должно быть положительным числом'
}

const submitGame = async () => {
  if (!isFormValid.value) return

  isUploading.value = true
  uploadDialog.value = true
  uploadProgress.value = 0

  try {
    // Создаем FormData для отправки файлов
    const formData = new FormData()
    
    // Добавляем все поля формы
    Object.keys(gameData).forEach(key => {
      if (key === 'system_requirements') {
        formData.append(key, JSON.stringify(gameData[key]))
      } else if (key === 'screenshots') {
        gameData[key].forEach((file, index) => {
          formData.append(`screenshot_${index}`, file)
        })
      } else if (gameData[key] !== null && gameData[key] !== '') {
        formData.append(key, gameData[key])
      }
    })

    // Симулируем загрузку с прогрессом
    const uploadInterval = setInterval(() => {
      uploadProgress.value += Math.random() * 10
      if (uploadProgress.value >= 100) {
        uploadProgress.value = 100
        clearInterval(uploadInterval)
        
        setTimeout(() => {
          uploadDialog.value = false
          isUploading.value = false
          // Здесь можно показать сообщение об успешной загрузке
          resetForm()
        }, 1000)
      }
    }, 200)

    // Здесь должна быть реальная отправка на сервер
    // const response = await fetch('/api/games/upload/', {
    //   method: 'POST',
    //   body: formData
    // })

  } catch (error) {
    console.error('Ошибка при загрузке игры:', error)
    uploadDialog.value = false
    isUploading.value = false
    // Показать ошибку пользователю
  }
}

const resetForm = () => {
  if (gameForm.value) {
    gameForm.value.reset()
  }
  
  Object.assign(gameData, {
    title: '',
    description: '',
    developer: '',
    genre: '',
    price: 0,
    release_date: '',
    game_file: null,
    cover_image: null,
    screenshots: [],
    system_requirements: {
      os: '',
      processor: '',
      memory: '',
      graphics: '',
      storage: ''
    }
  })
}
</script>

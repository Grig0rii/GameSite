<template>
  <div class="file-upload">
    <v-file-input
      v-model="files"
      :label="label"
      :accept="accept"
      :multiple="multiple"
      :rules="fileRules"
      :prepend-icon="prependIcon"
      :variant="variant"
      :density="density"
      :clearable="clearable"
      :show-size="showSize"
      :chips="chips"
      :counter="counter"
      class="file-input"
      @change="handleFileChange"
      @click:clear="handleClear"
    >
      <template v-if="$slots.prepend" #prepend>
        <slot name="prepend"></slot>
      </template>
    </v-file-input>

    <!-- Drag & Drop зона -->
    <div
      v-if="enableDragDrop"
      ref="dropZone"
      :class="['drag-drop-zone', { 'drag-over': isDragOver, 'has-files': hasFiles }]"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
      @click="triggerFileInput"
    >
      <div class="drop-content">
        <v-icon :icon="dropIcon" size="48" class="mb-3" :color="isDragOver ? 'primary' : 'grey'"></v-icon>
        <div class="text-h6 mb-2">{{ dropText }}</div>
        <div class="text-body-2 text-medium-emphasis">{{ dropSubtext }}</div>
        <v-btn v-if="!hasFiles" variant="outlined" class="mt-3" @click.stop="triggerFileInput">
          Выбрать файлы
        </v-btn>
      </div>
    </div>

    <!-- Превью загруженных файлов -->
    <div v-if="preview && previewFiles.length > 0" class="preview-section mt-4">
      <h4 class="text-subtitle-1 mb-3">Предварительный просмотр:</h4>
      
      <v-row>
        <v-col
          v-for="(file, index) in previewFiles"
          :key="index"
          :cols="multiple ? 6 : 12"
          :md="multiple ? 4 : 6"
        >
          <v-card elevation="2" class="preview-card">
            <!-- Превью изображения -->
            <div v-if="file.type === 'image'" class="preview-image">
              <v-img
                :src="file.url"
                :alt="file.name"
                height="150"
                cover
                class="rounded-t"
              >
                <template #placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
            
            <!-- Превью других файлов -->
            <div v-else class="preview-file text-center pa-4">
              <v-icon :icon="getFileIcon(file.file)" size="64" class="mb-2"></v-icon>
              <div class="text-caption text-truncate">{{ file.name }}</div>
            </div>

            <!-- Информация о файле -->
            <v-card-text class="pa-3">
              <div class="d-flex justify-space-between align-center">
                <div class="file-info">
                  <div class="text-body-2 font-weight-medium text-truncate">{{ file.name }}</div>
                  <div class="text-caption text-medium-emphasis">{{ formatFileSize(file.size) }}</div>
                </div>
                <v-btn
                  icon="mdi-close"
                  size="small"
                  variant="text"
                  @click="removeFile(index)"
                ></v-btn>
              </div>
              
              <!-- Прогресс загрузки -->
              <v-progress-linear
                v-if="file.uploading"
                :model-value="file.progress"
                color="primary"
                height="4"
                class="mt-2"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Ошибки -->
    <div v-if="errors.length > 0" class="errors-section mt-3">
      <v-alert
        v-for="(error, index) in errors"
        :key="index"
        type="error"
        variant="tonal"
        density="compact"
        closable
        class="mb-2"
        @click:close="removeError(index)"
      >
        {{ error }}
      </v-alert>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

const props = defineProps({
  // v-model
  modelValue: {
    type: [File, Array],
    default: null
  },
  // Лейбл поля
  label: {
    type: String,
    default: 'Выберите файл'
  },
  // Принимаемые типы файлов
  accept: {
    type: String,
    default: '*'
  },
  // Множественный выбор
  multiple: {
    type: Boolean,
    default: false
  },
  // Правила валидации
  rules: {
    type: Array,
    default: () => []
  },
  // Максимальный размер файла в байтах
  maxSize: {
    type: Number,
    default: 10 * 1024 * 1024 // 10MB
  },
  // Максимальное количество файлов
  maxFiles: {
    type: Number,
    default: 10
  },
  // Показывать превью
  preview: {
    type: Boolean,
    default: false
  },
  // Включить drag & drop
  enableDragDrop: {
    type: Boolean,
    default: true
  },
  // Иконка
  prependIcon: {
    type: String,
    default: 'mdi-paperclip'
  },
  // Вариант отображения
  variant: {
    type: String,
    default: 'outlined'
  },
  // Плотность
  density: {
    type: String,
    default: 'default'
  },
  // Можно очистить
  clearable: {
    type: Boolean,
    default: true
  },
  // Показывать размер
  showSize: {
    type: Boolean,
    default: true
  },
  // Показывать чипы
  chips: {
    type: Boolean,
    default: true
  },
  // Показывать счетчик
  counter: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'change', 'error'])

const files = ref(props.multiple ? [] : null)
const previewFiles = ref([])
const errors = ref([])
const isDragOver = ref(false)
const dropZone = ref(null)

const hasFiles = computed(() => {
  return props.multiple ? files.value?.length > 0 : files.value !== null
})

const dropIcon = computed(() => {
  if (isDragOver.value) return 'mdi-cloud-upload'
  if (hasFiles.value) return 'mdi-check-circle'
  return 'mdi-cloud-upload-outline'
})

const dropText = computed(() => {
  if (hasFiles.value) return 'Файлы загружены'
  if (isDragOver.value) return 'Отпустите файлы здесь'
  return 'Перетащите файлы сюда'
})

const dropSubtext = computed(() => {
  if (hasFiles.value) return `Загружено файлов: ${props.multiple ? files.value.length : 1}`
  return `или нажмите чтобы выбрать (макс. ${formatFileSize(props.maxSize)})`
})

const fileRules = computed(() => {
  const rules = [...props.rules]
  
  // Добавляем правило проверки размера
  rules.push((value) => {
    if (!value) return true
    
    const filesToCheck = Array.isArray(value) ? value : [value]
    for (const file of filesToCheck) {
      if (file && file.size > props.maxSize) {
        return `Файл "${file.name}" превышает максимальный размер ${formatFileSize(props.maxSize)}`
      }
    }
    return true
  })
  
  // Добавляем правило проверки количества файлов
  if (props.multiple) {
    rules.push((value) => {
      if (!value || !Array.isArray(value)) return true
      if (value.length > props.maxFiles) {
        return `Максимальное количество файлов: ${props.maxFiles}`
      }
      return true
    })
  }
  
  return rules
})

watch(() => props.modelValue, (newValue) => {
  files.value = newValue
  updatePreview()
}, { immediate: true })

watch(files, (newValue) => {
  emit('update:modelValue', newValue)
  emit('change', newValue)
  updatePreview()
})

const handleFileChange = (event) => {
  errors.value = []
  const selectedFiles = event.target.files || event
  
  if (!selectedFiles) return
  
  if (props.multiple) {
    const fileArray = Array.from(selectedFiles)
    if (fileArray.length + (files.value?.length || 0) > props.maxFiles) {
      addError(`Максимальное количество файлов: ${props.maxFiles}`)
      return
    }
    files.value = [...(files.value || []), ...fileArray]
  } else {
    files.value = selectedFiles[0] || null
  }
}

const handleDragOver = (event) => {
  event.preventDefault()
  isDragOver.value = true
}

const handleDragLeave = (event) => {
  event.preventDefault()
  isDragOver.value = false
}

const handleDrop = (event) => {
  event.preventDefault()
  isDragOver.value = false
  
  const droppedFiles = Array.from(event.dataTransfer.files)
  if (droppedFiles.length === 0) return
  
  errors.value = []
  
  // Проверяем типы файлов
  const validFiles = droppedFiles.filter(file => {
    if (props.accept === '*') return true
    const acceptedTypes = props.accept.split(',').map(type => type.trim())
    return acceptedTypes.some(type => {
      if (type.startsWith('.')) {
        return file.name.toLowerCase().endsWith(type.toLowerCase())
      }
      return file.type.includes(type.replace('*', ''))
    })
  })
  
  if (validFiles.length !== droppedFiles.length) {
    addError('Некоторые файлы имеют неподдерживаемый формат')
  }
  
  if (props.multiple) {
    if (validFiles.length + (files.value?.length || 0) > props.maxFiles) {
      addError(`Максимальное количество файлов: ${props.maxFiles}`)
      return
    }
    files.value = [...(files.value || []), ...validFiles]
  } else {
    files.value = validFiles[0] || null
  }
}

const handleClear = () => {
  files.value = props.multiple ? [] : null
  previewFiles.value = []
  errors.value = []
}

const triggerFileInput = () => {
  const fileInput = dropZone.value?.closest('.file-upload')?.querySelector('input[type="file"]')
  if (fileInput) {
    fileInput.click()
  }
}

const updatePreview = () => {
  if (!props.preview) return
  
  previewFiles.value = []
  const filesToPreview = props.multiple ? (files.value || []) : (files.value ? [files.value] : [])
  
  filesToPreview.forEach((file, index) => {
    const fileObj = {
      file,
      name: file.name,
      size: file.size,
      type: file.type.startsWith('image/') ? 'image' : 'file',
      url: '',
      uploading: false,
      progress: 0
    }
    
    if (fileObj.type === 'image') {
      const reader = new FileReader()
      reader.onload = (e) => {
        fileObj.url = e.target.result
      }
      reader.readAsDataURL(file)
    }
    
    previewFiles.value.push(fileObj)
  })
}

const removeFile = (index) => {
  if (props.multiple) {
    files.value.splice(index, 1)
    previewFiles.value.splice(index, 1)
  } else {
    files.value = null
    previewFiles.value = []
  }
}

const addError = (message) => {
  if (!errors.value.includes(message)) {
    errors.value.push(message)
    emit('error', message)
  }
}

const removeError = (index) => {
  errors.value.splice(index, 1)
}

const formatFileSize = (bytes) => {
  if (!bytes) return '0 Б'
  const sizes = ['Б', 'КБ', 'МБ', 'ГБ']
  if (bytes === 0) return '0 Б'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
}

const getFileIcon = (file) => {
  const type = file.type.toLowerCase()
  
  if (type.includes('image')) return 'mdi-file-image'
  if (type.includes('video')) return 'mdi-file-video'
  if (type.includes('audio')) return 'mdi-file-music'
  if (type.includes('pdf')) return 'mdi-file-pdf-box'
  if (type.includes('zip') || type.includes('rar') || type.includes('7z')) return 'mdi-folder-zip'
  if (type.includes('text')) return 'mdi-file-document'
  if (file.name.endsWith('.exe')) return 'mdi-application'
  
  return 'mdi-file'
}
</script>

<style scoped>
.file-upload {
  width: 100%;
}

.drag-drop-zone {
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.drag-drop-zone:hover {
  border-color: #1976d2;
  background-color: rgba(25, 118, 210, 0.04);
}

.drag-drop-zone.drag-over {
  border-color: #1976d2;
  background-color: rgba(25, 118, 210, 0.08);
  transform: scale(1.02);
}

.drag-drop-zone.has-files {
  border-color: #4caf50;
  background-color: rgba(76, 175, 80, 0.04);
}

.drop-content {
  pointer-events: none;
}

.preview-section {
  margin-top: 16px;
}

.preview-card {
  overflow: hidden;
}

.preview-image {
  position: relative;
}

.preview-file {
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.04);
}

.file-info {
  flex: 1;
  min-width: 0;
}

.errors-section {
  margin-top: 12px;
}
</style>


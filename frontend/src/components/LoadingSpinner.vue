<template>
  <div :class="containerClass">
    <v-progress-circular
      :indeterminate="!progress"
      :model-value="progress"
      :size="size"
      :width="width"
      :color="color"
      :rotate="rotate"
    >
      <template v-if="showText && (text || progress)" #default>
        <span class="text-caption">
          {{ text || (progress ? `${Math.round(progress)}%` : '') }}
        </span>
      </template>
    </v-progress-circular>
    
    <div v-if="message" class="text-center mt-3">
      <div class="text-body-2">{{ message }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Прогресс загрузки (0-100), если не указан - показывает бесконечную анимацию
  progress: {
    type: Number,
    default: null
  },
  // Размер спиннера
  size: {
    type: [Number, String],
    default: 40
  },
  // Толщина линии
  width: {
    type: [Number, String],
    default: 4
  },
  // Цвет спиннера
  color: {
    type: String,
    default: 'primary'
  },
  // Поворот спиннера
  rotate: {
    type: [Number, String],
    default: 0
  },
  // Показывать текст внутри спиннера
  showText: {
    type: Boolean,
    default: false
  },
  // Кастомный текст
  text: {
    type: String,
    default: ''
  },
  // Сообщение под спиннером
  message: {
    type: String,
    default: ''
  },
  // Центрировать по горизонтали и вертикали
  centered: {
    type: Boolean,
    default: false
  },
  // Занимать всю высоту контейнера
  fullHeight: {
    type: Boolean,
    default: false
  },
  // Overlay режим (затемненный фон)
  overlay: {
    type: Boolean,
    default: false
  }
})

const containerClass = computed(() => {
  const classes = []
  
  if (props.centered) {
    classes.push('d-flex', 'align-center', 'justify-center', 'flex-column')
  } else {
    classes.push('text-center')
  }
  
  if (props.fullHeight) {
    classes.push('fill-height')
  }
  
  if (props.overlay) {
    classes.push('loading-overlay')
  }
  
  return classes
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.fill-height {
  min-height: 200px;
}
</style>

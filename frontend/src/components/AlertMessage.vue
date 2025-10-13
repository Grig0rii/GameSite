<template>
  <v-alert
    v-if="visible"
    :type="type"
    :variant="variant"
    :color="color"
    :density="density"
    :prominent="prominent"
    :border="border"
    :closable="closable"
    :icon="computedIcon"
    :title="title"
    :text="text"
    class="alert-message"
    @click:close="handleClose"
  >
    <template v-if="$slots.default" #default>
      <slot></slot>
    </template>
    
    <template v-if="$slots.actions" #append>
      <div class="mt-3">
        <slot name="actions"></slot>
      </div>
    </template>
  </v-alert>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  // Тип алерта (success, info, warning, error)
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'info', 'warning', 'error'].includes(value)
  },
  // Вариант отображения
  variant: {
    type: String,
    default: 'tonal',
    validator: (value) => ['text', 'outlined', 'filled', 'tonal', 'plain'].includes(value)
  },
  // Цвет (переопределяет type)
  color: {
    type: String,
    default: ''
  },
  // Плотность
  density: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'comfortable', 'compact'].includes(value)
  },
  // Выделенный стиль
  prominent: {
    type: Boolean,
    default: false
  },
  // Граница
  border: {
    type: [Boolean, String],
    default: false
  },
  // Можно ли закрыть
  closable: {
    type: Boolean,
    default: false
  },
  // Кастомная иконка
  icon: {
    type: [String, Boolean],
    default: null
  },
  // Заголовок
  title: {
    type: String,
    default: ''
  },
  // Текст сообщения
  text: {
    type: String,
    default: ''
  },
  // Показывать алерт
  modelValue: {
    type: Boolean,
    default: true
  },
  // Автоматически скрывать через N секунд
  timeout: {
    type: Number,
    default: 0
  },
  // Позиция на экране (для toast-уведомлений)
  position: {
    type: String,
    default: '',
    validator: (value) => ['', 'top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

const visible = ref(props.modelValue)
const timeoutId = ref(null)

const computedIcon = computed(() => {
  if (props.icon !== null) return props.icon
  
  const typeIcons = {
    success: 'mdi-check-circle',
    info: 'mdi-information',
    warning: 'mdi-alert',
    error: 'mdi-alert-circle'
  }
  
  return typeIcons[props.type] || 'mdi-information'
})

watch(() => props.modelValue, (newValue) => {
  visible.value = newValue
  if (newValue && props.timeout > 0) {
    startTimeout()
  }
})

watch(visible, (newValue) => {
  emit('update:modelValue', newValue)
})

const handleClose = () => {
  visible.value = false
  emit('close')
  clearTimeout()
}

const startTimeout = () => {
  clearTimeout()
  if (props.timeout > 0) {
    timeoutId.value = setTimeout(() => {
      handleClose()
    }, props.timeout * 1000)
  }
}

const clearTimeout = () => {
  if (timeoutId.value) {
    window.clearTimeout(timeoutId.value)
    timeoutId.value = null
  }
}

onMounted(() => {
  if (visible.value && props.timeout > 0) {
    startTimeout()
  }
})
</script>

<style scoped>
.alert-message {
  margin-bottom: 16px;
}

/* Toast позиционирование */
.alert-message.position-top {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  max-width: 500px;
}

.alert-message.position-bottom {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  max-width: 500px;
}

.alert-message.position-top-left {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
  max-width: 400px;
}

.alert-message.position-top-right {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  max-width: 400px;
}

.alert-message.position-bottom-left {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 9999;
  max-width: 400px;
}

.alert-message.position-bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  max-width: 400px;
}
</style>

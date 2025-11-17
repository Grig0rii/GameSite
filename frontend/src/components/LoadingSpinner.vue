<template>
  <div :class="containerClass">
    <!-- Современный спиннер с градиентом -->
    <div v-if="!skeleton" class="modern-spinner">
      <div class="spinner-container">
        <v-progress-circular
          :indeterminate="!progress"
          :model-value="progress"
          :size="size"
          :width="width"
          :color="color"
          :rotate="rotate"
          class="spinner-circle"
        >
          <template v-if="showText && (text || progress)" #default>
            <span class="spinner-text">
              {{ text || (progress ? `${Math.round(progress)}%` : '') }}
            </span>
          </template>
        </v-progress-circular>
        
        <!-- Дополнительные анимированные элементы -->
        <div class="spinner-rings">
          <div class="ring ring-1"></div>
          <div class="ring ring-2"></div>
          <div class="ring ring-3"></div>
        </div>
      </div>
      
      <div v-if="message" class="spinner-message">
        <div class="message-text">{{ message }}</div>
        <div class="message-dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    </div>

    <!-- Скелетон для карточек игр -->
    <div v-else-if="skeleton === 'game-cards'" class="skeleton-game-cards">
      <v-row>
        <v-col
          v-for="n in 8"
          :key="n"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="mb-4"
        >
          <div class="skeleton-card">
            <div class="skeleton-image"></div>
            <div class="skeleton-content">
              <div class="skeleton-title"></div>
              <div class="skeleton-subtitle"></div>
              <div class="skeleton-text"></div>
              <div class="skeleton-text short"></div>
              <div class="skeleton-footer">
                <div class="skeleton-chip"></div>
                <div class="skeleton-price"></div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Скелетон для списка игр -->
    <div v-else-if="skeleton === 'game-list'" class="skeleton-game-list">
      <div
        v-for="n in 5"
        :key="n"
        class="skeleton-list-item"
      >
        <div class="skeleton-list-image"></div>
        <div class="skeleton-list-content">
          <div class="skeleton-list-title"></div>
          <div class="skeleton-list-subtitle"></div>
          <div class="skeleton-list-text"></div>
        </div>
        <div class="skeleton-list-button"></div>
      </div>
    </div>

    <!-- Общий скелетон -->
    <div v-else class="skeleton-general">
      <div class="skeleton-line"></div>
      <div class="skeleton-line short"></div>
      <div class="skeleton-line medium"></div>
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
  },
  // Тип скелетона: 'game-cards', 'game-list', или null для обычного спиннера
  skeleton: {
    type: String,
    default: null
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
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
  backdrop-filter: blur(10px);
  z-index: 9999;
}

.fill-height {
  min-height: 200px;
}

/* Современный спиннер */
.modern-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.spinner-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-circle {
  position: relative;
  z-index: 2;
}

.spinner-rings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ring {
  position: absolute;
  border: 2px solid transparent;
  border-top: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 50%;
  animation: ringRotate 2s linear infinite;
}

.ring-1 {
  width: 60px;
  height: 60px;
  top: -30px;
  left: -30px;
  animation-delay: 0s;
}

.ring-2 {
  width: 80px;
  height: 80px;
  top: -40px;
  left: -40px;
  animation-delay: 0.3s;
}

.ring-3 {
  width: 100px;
  height: 100px;
  top: -50px;
  left: -50px;
  animation-delay: 0.6s;
}

@keyframes ringRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner-text {
  font-weight: 600;
  color: #6366f1;
  font-size: 0.9rem;
}

.spinner-message {
  text-align: center;
}

.message-text {
  font-size: 1.1rem;
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 12px;
}

.message-dots {
  display: flex;
  justify-content: center;
  gap: 4px;
}

.dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 50%;
  animation: dotPulse 1.4s ease-in-out infinite both;
}

.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }
.dot:nth-child(3) { animation-delay: 0s; }

@keyframes dotPulse {
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
  40% { transform: scale(1.2); opacity: 1; }
}

/* Скелетоны */
.skeleton-game-cards,
.skeleton-game-list,
.skeleton-general {
  animation: fadeIn 0.6s ease-out;
}

.skeleton-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 16px;
  padding: 0;
  overflow: hidden;
  border: 1px solid rgba(99, 102, 241, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.skeleton-image {
  width: 100%;
  height: 220px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
}

.skeleton-content {
  padding: 20px;
}

.skeleton-title {
  height: 24px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 12px;
  width: 80%;
}

.skeleton-subtitle {
  height: 16px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 16px;
  width: 60%;
}

.skeleton-text {
  height: 14px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 8px;
}

.skeleton-text.short {
  width: 70%;
}

.skeleton-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.skeleton-chip {
  width: 60px;
  height: 24px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
  border-radius: 12px;
}

.skeleton-price {
  width: 80px;
  height: 20px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
  border-radius: 4px;
}

.skeleton-list-item {
  display: flex;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 16px;
  margin-bottom: 16px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.skeleton-list-image {
  width: 80px;
  height: 80px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
  border-radius: 12px;
  margin-right: 20px;
}

.skeleton-list-content {
  flex: 1;
}

.skeleton-list-title {
  height: 20px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 8px;
  width: 60%;
}

.skeleton-list-subtitle {
  height: 16px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 8px;
  width: 40%;
}

.skeleton-list-text {
  height: 14px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
  border-radius: 4px;
  width: 80%;
}

.skeleton-list-button {
  width: 120px;
  height: 40px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
  border-radius: 8px;
  margin-left: 20px;
}

.skeleton-general {
  padding: 20px;
}

.skeleton-line {
  height: 16px;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 12px;
}

.skeleton-line.short {
  width: 60%;
}

.skeleton-line.medium {
  width: 80%;
}

@keyframes skeletonShimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Адаптивность для скелетонов */
@media (max-width: 600px) {
  .skeleton-list-item {
    flex-direction: column;
    text-align: center;
  }
  
  .skeleton-list-image {
    margin-right: 0;
    margin-bottom: 16px;
  }
  
  .skeleton-list-button {
    margin-left: 0;
    margin-top: 16px;
  }
}
</style>

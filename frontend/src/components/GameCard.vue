<template>
  <v-card class="game-card h-100" elevation="0" @click="navigateToGame">
    <div class="image-container">
      <v-img :src="game.image_url" height="220" cover class="game-image">
        <template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-row>
        </template>
        <div class="image-overlay"></div>
        <v-chip
          v-if="game.is_featured"
          class="featured-chip"
          color="accent"
          size="small"
          variant="elevated"
        >
          <v-icon icon="mdi-star" size="16" class="me-1"></v-icon>
          Рекомендуем
        </v-chip>
        <div class="hover-overlay">
          <v-btn
            icon="mdi-eye"
            color="white"
            variant="elevated"
            size="large"
            class="view-btn"
          ></v-btn>
        </div>
      </v-img>
    </div>

    <v-card-item class="pb-2">
      <v-card-title class="text-h6 game-title">{{ game.title }}</v-card-title>
      <v-card-subtitle class="d-flex align-center text-medium-emphasis">
        <v-icon icon="mdi-account" size="18" class="me-1"></v-icon>
        {{ game.developer }}
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="pt-0">
      <div class="text-body-2 mb-3 game-description">{{ truncatedDescription }}</div>
      <div class="d-flex justify-space-between align-center mb-3">
        <v-chip 
          :color="genreColor" 
          size="small" 
          variant="elevated"
          class="genre-chip"
        >
          {{ game.genre }}
        </v-chip>
        <div class="price-text">
          {{ formatPrice(game.price) }}
        </div>
      </div>
      <div class="d-flex justify-space-between text-medium-emphasis text-caption mb-3">
        <span class="d-flex align-center">
          <v-icon icon="mdi-calendar" size="16" class="me-1"></v-icon>
          {{ formatDate(game.release_date) }}
        </span>
        <span class="d-flex align-center">
          <v-icon icon="mdi-download" size="16" class="me-1"></v-icon>
          {{ game.download_count || 0 }}
        </span>
      </div>
    </v-card-text>

    <v-card-actions class="pt-0">
      <v-btn 
        :href="game.detail_url" 
        color="primary" 
        variant="elevated"
        block 
        prepend-icon="mdi-eye"
        class="action-btn"
        size="large"
      >
        Подробнее
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { formatPriceUSD } from '../utils/currency'

const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})

const truncatedDescription = computed(() => {
  if (!props.game.description) return ''
  return props.game.description.length > 100 
    ? props.game.description.substring(0, 100) + '...'
    : props.game.description
})

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
  if (!date) return ''
  return new Date(date).toLocaleDateString('ru-RU')
}

const navigateToGame = () => {
  if (props.game.detail_url) {
    window.location.href = props.game.detail_url
  }
}
</script>

<style scoped>
.game-card {
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(99, 102, 241, 0.1);
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  overflow: hidden;
  position: relative;
}

.game-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.game-card:hover {
  transform: translateY(-4px) scale(1.005);
  box-shadow: 0 12px 28px rgba(99, 102, 241, 0.12), 0 6px 12px rgba(0, 0, 0, 0.08);
  border-color: rgba(99, 102, 241, 0.25);
}

.game-card:hover::before {
  opacity: 1;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
}

.game-image {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.game-card:hover .game-image {
  transform: scale(1.02);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover .image-overlay {
  opacity: 1;
}

.featured-chip {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  backdrop-filter: blur(10px);
  background: rgba(245, 158, 11, 0.9) !important;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.hover-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;
}

.game-card:hover .hover-overlay {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.1);
}

.view-btn {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.game-title {
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
  margin-bottom: 4px;
}

.game-description {
  color: #6b7280;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.genre-chip {
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.75rem;
}

.price-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: #10b981;
  text-shadow: 0 1px 2px rgba(16, 185, 129, 0.1);
}

.action-btn {
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) !important;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}

/* Анимация появления карточки */
.game-card {
  animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Адаптивность */
@media (max-width: 600px) {
  .game-card:hover {
    transform: translateY(-4px) scale(1.01);
  }
  
  .price-text {
    font-size: 1.1rem;
  }
}
</style>

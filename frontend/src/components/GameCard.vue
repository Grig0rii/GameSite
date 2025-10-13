<template>
  <v-card class="game-card h-100" elevation="3" @click="navigateToGame">
    <v-img :src="game.image_url" height="220" cover>
      <template #placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-row>
      </template>
      <v-chip
        v-if="game.is_featured"
        class="ma-2"
        color="orange"
        size="small"
        variant="elevated"
      >
        Рекомендуем
      </v-chip>
    </v-img>

    <v-card-item>
      <v-card-title class="text-h6">{{ game.title }}</v-card-title>
      <v-card-subtitle class="d-flex align-center">
        <v-icon icon="mdi-account" size="18" class="me-1"></v-icon>
        {{ game.developer }}
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div class="text-body-2 mb-2">{{ truncatedDescription }}</div>
      <div class="d-flex justify-space-between align-center mb-2">
        <v-chip 
          :color="genreColor" 
          size="small" 
          variant="elevated"
        >
          {{ game.genre }}
        </v-chip>
        <div class="text-success text-h6">
          {{ formatPrice(game.price) }}
        </div>
      </div>
      <div class="d-flex justify-space-between text-medium-emphasis text-caption">
        <span>
          <v-icon icon="mdi-calendar" size="16" class="me-1"></v-icon>
          {{ formatDate(game.release_date) }}
        </span>
        <span>
          <v-icon icon="mdi-download" size="16" class="me-1"></v-icon>
          {{ game.download_count || 0 }}
        </span>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn 
        :href="game.detail_url" 
        color="primary" 
        variant="elevated"
        block 
        prepend-icon="mdi-eye"
      >
        Подробнее
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'

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

const formatPrice = (price) => {
  if (price === 0 || price === '0') return 'Бесплатно'
  return `${price} ₽`
}

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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
</style>

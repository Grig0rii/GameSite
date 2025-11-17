<template>
  <v-container class="py-8">
    <!-- Заголовок и статистика -->
    <div class="games-header mb-8">
      <div class="header-content">
        <div class="header-main">
          <div class="header-icon">
            <v-icon icon="mdi-gamepad-variant" size="40"></v-icon>
          </div>
          <div class="header-text">
            <h1 class="page-title">{{ pageTitle }}</h1>
            <div class="page-subtitle">
              {{ totalCount }} {{ getGamesText(totalCount) }} найдено
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toolbar (только переключатель вида) -->
    <div class="games-toolbar mb-6">
      <div class="toolbar-content">
        <v-btn-toggle v-model="viewMode" mandatory variant="outlined" density="compact" class="view-toggle">
          <v-btn value="grid" icon="mdi-view-grid" class="toggle-btn"></v-btn>
          <v-btn value="list" icon="mdi-view-list" class="toggle-btn"></v-btn>
        </v-btn-toggle>
      </div>
    </div>

    <!-- Активные фильтры убраны -->

    <!-- Загрузка -->
    <div v-if="loading" class="loading-container">
      <LoadingSpinner
        :skeleton="viewMode === 'grid' ? 'game-cards' : 'game-list'"
        :message="'Загрузка игр...'"
        :centered="false"
      />
    </div>

    <!-- Список игр -->
    <div v-else-if="games.length > 0" class="games-content">
      <!-- Сетка -->
      <v-row v-if="viewMode === 'grid'" class="games-grid">
        <v-col
          v-for="(game, index) in games"
          :key="game.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="game-col"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <GameCard :game="game" />
        </v-col>
      </v-row>

      <!-- Список -->
      <div v-else class="games-list">
        <v-card
          v-for="(game, index) in games"
          :key="game.id"
          variant="outlined"
          class="game-list-item"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="navigateToGame(game)"
        >
          <div class="d-flex align-center pa-4">
            <v-img
              :src="game.image_url"
              width="80"
              height="80"
              cover
              class="rounded me-4"
            >
              <template #placeholder>
                <v-progress-circular indeterminate color="primary" size="24"></v-progress-circular>
              </template>
            </v-img>
            
            <div class="flex-grow-1">
              <div class="d-flex align-center justify-space-between mb-2">
                <h3 class="text-h6">{{ game.title }}</h3>
                <div class="text-success text-h6">{{ formatPrice(game.price) }}</div>
              </div>
              
              <div class="d-flex align-center gap-3 mb-2">
                <v-chip size="small" :color="getGenreColor(game.genre)" variant="elevated">
                  {{ game.genre }}
                </v-chip>
                <span class="text-body-2 text-medium-emphasis">
                  <v-icon icon="mdi-account" size="16" class="me-1"></v-icon>
                  {{ game.developer }}
                </span>
                <span class="text-body-2 text-medium-emphasis">
                  <v-icon icon="mdi-download" size="16" class="me-1"></v-icon>
                  {{ game.download_count || 0 }}
                </span>
              </div>
              
              <div class="text-body-2 text-truncate">{{ game.description }}</div>
            </div>
            
            <v-btn
              color="primary"
              variant="elevated"
              prepend-icon="mdi-eye"
              class="ms-4"
              @click.stop="navigateToGame(game)"
            >
              Подробнее
            </v-btn>
          </div>
        </v-card>
      </div>

      <!-- Пагинация -->
      <div class="pagination-container mt-6">
        <Pagination
          v-model="currentPage"
          :total-items="totalGames"
          :page-size="pageSize"
          :show-info="true"
          :show-page-jump="true"
          :show-page-size="false"
          @page-change="handlePageChange"
        />
      </div>
    </div>

    <!-- Пустое состояние -->
    <div v-else class="empty-state text-center py-12">
      <v-icon
        :icon="'mdi-gamepad-variant-outline'"
        size="64"
        class="mb-4 text-medium-emphasis"
      ></v-icon>
      <div class="text-h5 mb-2">
        Пока нет загруженных игр
      </div>
      <div class="text-body-1 text-medium-emphasis mb-4">
        Станьте первым, кто загрузит игру!
      </div>
      <v-btn
        color="primary"
        href="/upload/"
        prepend-icon="mdi-upload"
      >
        Загрузить игру
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { formatPriceUSD } from '../utils/currency'
import GameCard from './GameCard.vue'
import Pagination from './Pagination.vue'
import LoadingSpinner from './LoadingSpinner.vue'

const props = defineProps({
  // Игры для отображения
  games: {
    type: Array,
    default: () => []
  },
  // Общее количество игр (для пагинации)
  totalGames: {
    type: Number,
    default: 0
  },
  // Заголовок страницы
  pageTitle: {
    type: String,
    default: 'Все игры'
  },
  // Состояние загрузки
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['page-change'])
// Загрузка игр через API, если пропсы не переданы (SPA режим)
const internalGames = ref([])
const isLoading = ref(false)

const shouldFetchFromApi = computed(() => !props.games || props.games.length === 0)

const loadGames = async () => {
  isLoading.value = true
  try {
    const response = await fetch('/api/games/')
    const data = await response.json()
    internalGames.value = Array.isArray(data.results) ? data.results : []
  } catch (e) {
    console.error('Не удалось загрузить список игр', e)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  if (shouldFetchFromApi.value) {
    loadGames()
  }
})

// Источник данных для шаблона
const games = computed(() => shouldFetchFromApi.value ? internalGames.value : props.games)
const loading = computed(() => shouldFetchFromApi.value ? isLoading.value : props.loading)
const totalCount = computed(() => shouldFetchFromApi.value ? games.value.length : props.totalGames)

// Убраны поиск/фильтры/сортировка
const currentPage = ref(1)
const viewMode = ref('grid')
const handlePageChange = (pageData) => {
  currentPage.value = pageData.page
  
  emit('page-change', {
    ...pageData,
    query: null,
    filters: {},
    sort: null
  })
}

const navigateToGame = (game) => {
  if (game.detail_url) {
    window.location.href = game.detail_url
  }
}

const formatPrice = (price) => formatPriceUSD(price)

const getGenreColor = (genre) => {
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
  return genreColors[genre] || 'primary'
}

const getGamesText = (count) => {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'игр'
  }

  switch (lastDigit) {
    case 1:
      return 'игра'
    case 2:
    case 3:
    case 4:
      return 'игры'
    default:
      return 'игр'
  }
}

// Инициализация при монтировании: ничего не делаем для фильтрации
</script>

<style scoped>
.games-header {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  position: relative;
  overflow: hidden;
}

.games-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.02) 0%, rgba(139, 92, 246, 0.02) 100%);
  pointer-events: none;
}

.header-content {
  position: relative;
  z-index: 2;
}

.header-main {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-icon {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 16px;
  padding: 16px;
  color: white;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.3);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  font-weight: 500;
  margin-top: 8px;
}

.games-toolbar {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.toolbar-content {
  display: flex;
  justify-content: center;
}

.view-toggle {
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
  padding: 4px;
}

.toggle-btn {
  border-radius: 8px !important;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  background: rgba(99, 102, 241, 0.1) !important;
}

.games-content {
  position: relative;
}

.games-grid {
  animation: fadeInUp 0.6s ease-out;
}

.games-list {
  animation: fadeInUp 0.6s ease-out;
}

.game-col {
  animation: slideInUp 0.6s ease-out both;
}

.game-list-item {
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 16px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  overflow: hidden;
  position: relative;
  animation: slideInUp 0.6s ease-out both;
}

.game-list-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.02) 0%, rgba(139, 92, 246, 0.02) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.game-list-item:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1);
  border-color: rgba(99, 102, 241, 0.3);
}

.game-list-item:hover::before {
  opacity: 1;
}

.empty-state {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.02) 0%, rgba(139, 92, 246, 0.02) 100%);
  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loading-container {
  padding: 20px 0;
}

/* Адаптивность */
@media (max-width: 960px) {
  .games-header {
    padding: 24px;
    margin-bottom: 24px;
  }
  
  .header-main {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .games-toolbar {
    padding: 16px;
  }
}

@media (max-width: 600px) {
  .games-header {
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .page-title {
    font-size: 1.75rem;
  }
  
  .header-icon {
    padding: 12px;
  }
  
  .game-list-item .d-flex {
    flex-direction: column;
    text-align: center;
  }
  
  .game-list-item .ms-4 {
    margin-left: 0 !important;
    margin-top: 12px;
  }
}
</style>



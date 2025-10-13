<template>
  <v-container class="py-8">
    <!-- Заголовок и статистика -->
    <div class="games-header mb-6">
      <div class="d-flex align-center justify-space-between mb-4">
        <div class="d-flex align-center">
          <v-icon icon="mdi-gamepad-variant" class="me-2" size="32"></v-icon>
          <div>
            <h1 class="text-h4 mb-1">{{ pageTitle }}</h1>
            <div class="text-body-2 text-medium-emphasis">
              {{ totalGames }} {{ getGamesText(totalGames) }} найдено
            </div>
          </div>
        </div>
        
        <!-- Быстрые фильтры -->
        <div class="quick-filters d-none d-md-flex gap-2">
          <v-chip
            v-for="filter in quickFilters"
            :key="filter.value"
            :variant="activeQuickFilter === filter.value ? 'elevated' : 'outlined'"
            :color="activeQuickFilter === filter.value ? 'primary' : 'default'"
            size="small"
            clickable
            @click="setQuickFilter(filter.value)"
          >
            <v-icon :icon="filter.icon" size="16" class="me-1"></v-icon>
            {{ filter.title }}
          </v-chip>
        </div>
      </div>

      <!-- Поиск и фильтры -->
      <v-card elevation="2" class="mb-6">
        <v-card-text class="pa-4">
          <SearchBar
            v-model="searchQuery"
            placeholder="Поиск игр по названию, разработчику, описанию..."
            :show-suggestions="true"
            :suggestions="searchSuggestions"
            :show-filters="true"
            :genre-filter="true"
            :price-filter="true"
            :sort-options="sortOptions"
            :search-on-input="true"
            :debounce-time="500"
            @search="handleSearch"
            @filter-change="handleFilterChange"
            @suggestion-select="handleSuggestionSelect"
          />
        </v-card-text>
      </v-card>
    </div>

    <!-- Toolbar -->
    <div class="games-toolbar d-flex align-center justify-space-between mb-4">
      <div class="d-flex align-center gap-3">
        <!-- Вид отображения -->
        <v-btn-toggle v-model="viewMode" mandatory variant="outlined" density="compact">
          <v-btn value="grid" icon="mdi-view-grid"></v-btn>
          <v-btn value="list" icon="mdi-view-list"></v-btn>
        </v-btn-toggle>
        
        <!-- Количество на странице -->
        <v-select
          v-model="pageSize"
          :items="pageSizeOptions"
          label="Показать"
          variant="outlined"
          density="compact"
          style="max-width: 120px;"
          hide-details
          @update:model-value="handlePageSizeChange"
        ></v-select>
      </div>
      
      <!-- Сортировка -->
      <div class="d-flex align-center gap-2">
        <span class="text-body-2">Сортировка:</span>
        <v-select
          v-model="currentSort"
          :items="sortOptions"
          variant="outlined"
          density="compact"
          style="max-width: 200px;"
          hide-details
          @update:model-value="handleSortChange"
        ></v-select>
      </div>
    </div>

    <!-- Активные фильтры -->
    <div v-if="hasActiveFilters" class="active-filters mb-4">
      <div class="d-flex align-center gap-2 mb-2">
        <span class="text-body-2">Активные фильтры:</span>
        <v-btn
          size="small"
          variant="text"
          prepend-icon="mdi-filter-remove"
          @click="clearAllFilters"
        >
          Очистить все
        </v-btn>
      </div>
      <div class="d-flex flex-wrap gap-2">
        <v-chip
          v-if="activeFilters.genre"
          size="small"
          closable
          @click:close="removeFilter('genre')"
        >
          Жанр: {{ activeFilters.genre }}
        </v-chip>
        <v-chip
          v-if="activeFilters.priceRange"
          size="small"
          closable
          @click:close="removeFilter('priceRange')"
        >
          Цена: {{ getPriceRangeText(activeFilters.priceRange) }}
        </v-chip>
        <v-chip
          v-if="searchQuery"
          size="small"
          closable
          @click:close="removeFilter('search')"
        >
          Поиск: "{{ searchQuery }}"
        </v-chip>
      </div>
    </div>

    <!-- Загрузка -->
    <div v-if="loading" class="text-center py-8">
      <LoadingSpinner
        :message="'Загрузка игр...'"
        :centered="true"
      />
    </div>

    <!-- Список игр -->
    <div v-else-if="games.length > 0" class="games-content">
      <!-- Сетка -->
      <v-row v-if="viewMode === 'grid'">
        <v-col
          v-for="game in games"
          :key="game.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="mb-4"
        >
          <GameCard :game="game" />
        </v-col>
      </v-row>

      <!-- Список -->
      <div v-else class="games-list">
        <v-card
          v-for="game in games"
          :key="game.id"
          variant="outlined"
          class="mb-3 game-list-item"
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
        :icon="hasActiveFilters ? 'mdi-magnify-remove' : 'mdi-gamepad-variant-outline'"
        size="64"
        class="mb-4 text-medium-emphasis"
      ></v-icon>
      <div class="text-h5 mb-2">
        {{ hasActiveFilters ? 'Ничего не найдено' : 'Пока нет загруженных игр' }}
      </div>
      <div class="text-body-1 text-medium-emphasis mb-4">
        {{
          hasActiveFilters
            ? 'Попробуйте изменить параметры поиска'
            : 'Станьте первым, кто загрузит игру!'
        }}
      </div>
      <v-btn
        v-if="hasActiveFilters"
        color="primary"
        variant="outlined"
        @click="clearAllFilters"
      >
        Очистить фильтры
      </v-btn>
      <v-btn
        v-else
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
import { ref, computed, watch, onMounted } from 'vue'
import GameCard from './GameCard.vue'
import SearchBar from './SearchBar.vue'
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
  },
  // Начальные фильтры
  initialFilters: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits([
  'search',
  'filter-change',
  'sort-change',
  'page-change',
  'page-size-change'
])

// Состояние поиска и фильтрации
const searchQuery = ref('')
const searchSuggestions = ref([])
const activeFilters = ref({ ...props.initialFilters })
const currentSort = ref('newest')
const currentPage = ref(1)
const pageSize = ref(12)
const viewMode = ref('grid')
const activeQuickFilter = ref('')

// Быстрые фильтры
const quickFilters = [
  { title: 'Новые', value: 'newest', icon: 'mdi-new-box' },
  { title: 'Популярные', value: 'popular', icon: 'mdi-fire' },
  { title: 'Бесплатные', value: 'free', icon: 'mdi-gift' },
  { title: 'Топ рейтинг', value: 'top-rated', icon: 'mdi-star' },
  { title: 'Инди', value: 'indie', icon: 'mdi-heart' }
]

// Опции сортировки
const sortOptions = [
  { title: 'Сначала новые', value: 'newest' },
  { title: 'Сначала старые', value: 'oldest' },
  { title: 'По названию (А-Я)', value: 'title-asc' },
  { title: 'По названию (Я-А)', value: 'title-desc' },
  { title: 'По популярности', value: 'popular' },
  { title: 'По рейтингу', value: 'rating' },
  { title: 'Сначала дешевые', value: 'price-asc' },
  { title: 'Сначала дорогие', value: 'price-desc' },
  { title: 'По количеству скачиваний', value: 'downloads' }
]

// Опции размера страницы
const pageSizeOptions = [
  { title: '12', value: 12 },
  { title: '24', value: 24 },
  { title: '48', value: 48 },
  { title: '96', value: 96 }
]

// Вычисляемые свойства
const hasActiveFilters = computed(() => {
  return searchQuery.value || 
         activeFilters.value.genre || 
         activeFilters.value.priceRange ||
         activeQuickFilter.value
})

const handleSearch = (searchData) => {
  searchQuery.value = searchData.query
  Object.assign(activeFilters.value, searchData.filters)
  currentPage.value = 1
  
  emit('search', {
    query: searchData.query,
    filters: activeFilters.value,
    sort: currentSort.value,
    page: currentPage.value,
    pageSize: pageSize.value
  })
}

const handleFilterChange = (filters) => {
  Object.assign(activeFilters.value, filters)
  currentPage.value = 1
  
  emit('filter-change', {
    filters: activeFilters.value,
    query: searchQuery.value,
    sort: currentSort.value,
    page: currentPage.value,
    pageSize: pageSize.value
  })
}

const handleSortChange = (newSort) => {
  currentSort.value = newSort
  currentPage.value = 1
  
  emit('sort-change', {
    sort: newSort,
    query: searchQuery.value,
    filters: activeFilters.value,
    page: currentPage.value,
    pageSize: pageSize.value
  })
}

const handlePageChange = (pageData) => {
  currentPage.value = pageData.page
  
  emit('page-change', {
    ...pageData,
    query: searchQuery.value,
    filters: activeFilters.value,
    sort: currentSort.value
  })
}

const handlePageSizeChange = (newPageSize) => {
  pageSize.value = newPageSize
  currentPage.value = 1
  
  emit('page-size-change', {
    pageSize: newPageSize,
    page: 1,
    query: searchQuery.value,
    filters: activeFilters.value,
    sort: currentSort.value
  })
}

const handleSuggestionSelect = (suggestion) => {
  // Обработка выбора предложения поиска
  if (suggestion.type === 'game') {
    navigateToGame(suggestion.game)
  } else if (suggestion.type === 'genre') {
    setQuickFilter('genre')
    activeFilters.value.genre = suggestion.value
    handleFilterChange(activeFilters.value)
  }
}

const setQuickFilter = (filterValue) => {
  activeQuickFilter.value = filterValue
  
  // Сброс других фильтров
  activeFilters.value = {}
  searchQuery.value = ''
  
  switch (filterValue) {
    case 'newest':
      currentSort.value = 'newest'
      break
    case 'popular':
      currentSort.value = 'popular'
      break
    case 'free':
      activeFilters.value.priceRange = 'free'
      break
    case 'top-rated':
      currentSort.value = 'rating'
      break
    case 'indie':
      activeFilters.value.genre = 'Инди'
      break
  }
  
  currentPage.value = 1
  emitFilterChange()
}

const removeFilter = (filterType) => {
  switch (filterType) {
    case 'genre':
      activeFilters.value.genre = null
      break
    case 'priceRange':
      activeFilters.value.priceRange = null
      break
    case 'search':
      searchQuery.value = ''
      break
  }
  
  activeQuickFilter.value = ''
  currentPage.value = 1
  emitFilterChange()
}

const clearAllFilters = () => {
  searchQuery.value = ''
  activeFilters.value = {}
  activeQuickFilter.value = ''
  currentSort.value = 'newest'
  currentPage.value = 1
  emitFilterChange()
}

const emitFilterChange = () => {
  emit('filter-change', {
    query: searchQuery.value,
    filters: activeFilters.value,
    sort: currentSort.value,
    page: currentPage.value,
    pageSize: pageSize.value
  })
}

const navigateToGame = (game) => {
  if (game.detail_url) {
    window.location.href = game.detail_url
  }
}

const formatPrice = (price) => {
  if (price === 0 || price === '0') return 'Бесплатно'
  return `${price} ₽`
}

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

const getPriceRangeText = (priceRange) => {
  const ranges = {
    'free': 'Бесплатно',
    '0-500': 'До 500₽',
    '500-1000': '500₽ - 1000₽',
    '1000-2000': '1000₽ - 2000₽',
    '2000+': 'Свыше 2000₽'
  }
  return ranges[priceRange] || priceRange
}

// Инициализация при монтировании
onMounted(() => {
  // Применяем начальные фильтры
  if (Object.keys(props.initialFilters).length > 0) {
    Object.assign(activeFilters.value, props.initialFilters)
  }
})
</script>

<style scoped>
.games-header {
  margin-bottom: 24px;
}

.quick-filters {
  flex-wrap: wrap;
}

.games-toolbar {
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  padding: 12px 16px;
}

.active-filters {
  background: rgba(25, 118, 210, 0.04);
  border-radius: 8px;
  padding: 12px 16px;
}

.game-list-item {
  cursor: pointer;
  transition: all 0.3s ease;
}

.game-list-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.empty-state {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 960px) {
  .games-toolbar {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
  
  .games-toolbar .d-flex {
    justify-content: space-between;
  }
  
  .quick-filters {
    display: flex !important;
    justify-content: center;
  }
}

@media (max-width: 600px) {
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



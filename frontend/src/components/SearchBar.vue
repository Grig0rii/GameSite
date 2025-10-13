<template>
  <div class="search-bar">
    <v-text-field
      v-model="searchQuery"
      :placeholder="placeholder"
      :prepend-inner-icon="prependIcon"
      :append-inner-icon="appendIcon"
      :loading="loading"
      :clearable="clearable"
      :variant="variant"
      :density="density"
      :hide-details="hideDetails"
      :solo="solo"
      :filled="filled"
      :outlined="outlined"
      class="search-input"
      @click:append-inner="onSearch"
      @click:clear="onClear"
      @keyup.enter="onSearch"
      @input="onInput"
    >
      <template v-if="$slots.prepend" #prepend>
        <slot name="prepend"></slot>
      </template>
      
      <template v-if="$slots.append" #append>
        <slot name="append"></slot>
      </template>
    </v-text-field>

    <!-- Выпадающий список с предложениями -->
    <v-menu
      v-if="showSuggestions && suggestions.length > 0"
      v-model="suggestionsMenu"
      :close-on-content-click="false"
      location="bottom"
      offset="4"
    >
      <template #activator="{ props: menuProps }">
        <div v-bind="menuProps" style="position: absolute; width: 100%; height: 0;"></div>
      </template>
      
      <v-list density="compact" max-height="300" class="suggestions-list">
        <v-list-item
          v-for="(suggestion, index) in suggestions"
          :key="index"
          :title="suggestion.title || suggestion"
          :subtitle="suggestion.subtitle"
          :prepend-icon="suggestion.icon"
          @click="selectSuggestion(suggestion)"
        >
          <template v-if="suggestion.avatar" #prepend>
            <v-avatar size="32">
              <v-img :src="suggestion.avatar"></v-img>
            </v-avatar>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Фильтры (если включены) -->
    <div v-if="showFilters" class="filters-section mt-3">
      <v-row>
        <v-col v-if="genreFilter" cols="12" sm="6" md="4">
          <v-select
            v-model="selectedGenre"
            :items="genres"
            label="Жанр"
            clearable
            variant="outlined"
            density="compact"
            @update:model-value="onFilterChange"
          ></v-select>
        </v-col>
        
        <v-col v-if="priceFilter" cols="12" sm="6" md="4">
          <v-select
            v-model="selectedPriceRange"
            :items="priceRanges"
            label="Цена"
            clearable
            variant="outlined"
            density="compact"
            @update:model-value="onFilterChange"
          ></v-select>
        </v-col>
        
        <v-col v-if="sortOptions" cols="12" sm="6" md="4">
          <v-select
            v-model="selectedSort"
            :items="sortOptions"
            label="Сортировка"
            variant="outlined"
            density="compact"
            @update:model-value="onFilterChange"
          ></v-select>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  // Модель поискового запроса
  modelValue: {
    type: String,
    default: ''
  },
  // Плейсхолдер
  placeholder: {
    type: String,
    default: 'Поиск...'
  },
  // Иконка слева
  prependIcon: {
    type: String,
    default: 'mdi-magnify'
  },
  // Иконка справа
  appendIcon: {
    type: String,
    default: ''
  },
  // Состояние загрузки
  loading: {
    type: Boolean,
    default: false
  },
  // Можно ли очистить
  clearable: {
    type: Boolean,
    default: true
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
  // Скрыть детали валидации
  hideDetails: {
    type: Boolean,
    default: true
  },
  // Solo стиль
  solo: {
    type: Boolean,
    default: false
  },
  // Filled стиль
  filled: {
    type: Boolean,
    default: false
  },
  // Outlined стиль
  outlined: {
    type: Boolean,
    default: false
  },
  // Показывать предложения поиска
  showSuggestions: {
    type: Boolean,
    default: false
  },
  // Массив предложений
  suggestions: {
    type: Array,
    default: () => []
  },
  // Показывать фильтры
  showFilters: {
    type: Boolean,
    default: false
  },
  // Включить фильтр по жанрам
  genreFilter: {
    type: Boolean,
    default: false
  },
  // Включить фильтр по цене
  priceFilter: {
    type: Boolean,
    default: false
  },
  // Опции сортировки
  sortOptions: {
    type: Array,
    default: () => []
  },
  // Автоматический поиск при вводе
  searchOnInput: {
    type: Boolean,
    default: false
  },
  // Задержка для автопоиска (мс)
  debounceTime: {
    type: Number,
    default: 500
  }
})

const emit = defineEmits([
  'update:modelValue',
  'search',
  'clear',
  'input',
  'filter-change',
  'suggestion-select'
])

const searchQuery = ref(props.modelValue)
const suggestionsMenu = ref(false)
const selectedGenre = ref(null)
const selectedPriceRange = ref(null)
const selectedSort = ref(props.sortOptions.length > 0 ? props.sortOptions[0].value : null)
const debounceTimer = ref(null)

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
  'Логические'
]

const priceRanges = [
  { title: 'Бесплатно', value: 'free' },
  { title: 'До 500₽', value: '0-500' },
  { title: '500₽ - 1000₽', value: '500-1000' },
  { title: '1000₽ - 2000₽', value: '1000-2000' },
  { title: 'Свыше 2000₽', value: '2000+' }
]

watch(() => props.modelValue, (newValue) => {
  searchQuery.value = newValue
})

watch(searchQuery, (newValue) => {
  emit('update:modelValue', newValue)
  emit('input', newValue)
  
  if (props.searchOnInput) {
    clearTimeout(debounceTimer.value)
    debounceTimer.value = setTimeout(() => {
      onSearch()
    }, props.debounceTime)
  }
  
  // Показываем предложения если есть текст
  if (props.showSuggestions && newValue && props.suggestions.length > 0) {
    suggestionsMenu.value = true
  } else {
    suggestionsMenu.value = false
  }
})

const onSearch = () => {
  const filters = {
    genre: selectedGenre.value,
    priceRange: selectedPriceRange.value,
    sort: selectedSort.value
  }
  
  emit('search', {
    query: searchQuery.value,
    filters
  })
}

const onClear = () => {
  searchQuery.value = ''
  suggestionsMenu.value = false
  emit('clear')
}

const onInput = (event) => {
  // Дополнительная обработка ввода если нужна
}

const selectSuggestion = (suggestion) => {
  const suggestionText = suggestion.title || suggestion
  searchQuery.value = suggestionText
  suggestionsMenu.value = false
  emit('suggestion-select', suggestion)
  onSearch()
}

const onFilterChange = () => {
  emit('filter-change', {
    genre: selectedGenre.value,
    priceRange: selectedPriceRange.value,
    sort: selectedSort.value
  })
  
  if (searchQuery.value) {
    onSearch()
  }
}
</script>

<style scoped>
.search-bar {
  position: relative;
  width: 100%;
}

.search-input {
  width: 100%;
}

.suggestions-list {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}

.filters-section {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 16px;
}
</style>

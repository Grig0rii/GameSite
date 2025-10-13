<template>
  <div v-if="totalPages > 1" class="pagination-container">
    <v-pagination
      v-model="currentPageValue"
      :length="totalPages"
      :total-visible="totalVisible"
      :disabled="disabled"
      :size="size"
      :variant="variant"
      :color="color"
      :density="density"
      :show-first-last-page="showFirstLastPage"
      class="pagination"
      @update:model-value="handlePageChange"
    >
      <!-- Кастомизация кнопок -->
      <template v-if="showLabels" #prev="{ props }">
        <v-btn
          v-bind="props"
          :variant="variant"
          :size="size"
          :disabled="currentPageValue <= 1"
          class="pagination-btn"
        >
          <v-icon icon="mdi-chevron-left" class="me-1"></v-icon>
          {{ prevLabel }}
        </v-btn>
      </template>
      
      <template v-if="showLabels" #next="{ props }">
        <v-btn
          v-bind="props"
          :variant="variant"
          :size="size"
          :disabled="currentPageValue >= totalPages"
          class="pagination-btn"
        >
          {{ nextLabel }}
          <v-icon icon="mdi-chevron-right" class="ms-1"></v-icon>
        </v-btn>
      </template>
    </v-pagination>

    <!-- Информация о пагинации -->
    <div v-if="showInfo" class="pagination-info mt-3 text-center">
      <div class="text-body-2 text-medium-emphasis">
        Показано {{ startItem }}-{{ endItem }} из {{ totalItems }} элементов
      </div>
      
      <!-- Переход к странице -->
      <div v-if="showPageJump" class="d-flex align-center justify-center mt-2 gap-2">
        <span class="text-body-2">Перейти к странице:</span>
        <v-text-field
          v-model.number="jumpToPage"
          type="number"
          :min="1"
          :max="totalPages"
          density="compact"
          variant="outlined"
          style="max-width: 80px;"
          hide-details
          @keyup.enter="handleJumpToPage"
        ></v-text-field>
        <v-btn
          size="small"
          variant="outlined"
          :disabled="!isValidJumpPage"
          @click="handleJumpToPage"
        >
          Перейти
        </v-btn>
      </div>
      
      <!-- Размер страницы -->
      <div v-if="showPageSize && pageSizeOptions.length > 1" class="d-flex align-center justify-center mt-2 gap-2">
        <span class="text-body-2">Показывать по:</span>
        <v-select
          v-model="currentPageSize"
          :items="pageSizeOptions"
          density="compact"
          variant="outlined"
          style="max-width: 100px;"
          hide-details
          @update:model-value="handlePageSizeChange"
        ></v-select>
        <span class="text-body-2">элементов</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  // Текущая страница
  modelValue: {
    type: Number,
    default: 1
  },
  // Общее количество элементов
  totalItems: {
    type: Number,
    required: true
  },
  // Размер страницы
  pageSize: {
    type: Number,
    default: 10
  },
  // Максимальное количество видимых страниц
  totalVisible: {
    type: Number,
    default: 7
  },
  // Отключить пагинацию
  disabled: {
    type: Boolean,
    default: false
  },
  // Размер кнопок
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['x-small', 'small', 'default', 'large', 'x-large'].includes(value)
  },
  // Вариант отображения
  variant: {
    type: String,
    default: 'elevated',
    validator: (value) => ['text', 'outlined', 'plain', 'elevated', 'flat', 'tonal'].includes(value)
  },
  // Цвет
  color: {
    type: String,
    default: 'primary'
  },
  // Плотность
  density: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'comfortable', 'compact'].includes(value)
  },
  // Показывать кнопки первой/последней страницы
  showFirstLastPage: {
    type: Boolean,
    default: true
  },
  // Показывать текстовые лейблы на кнопках
  showLabels: {
    type: Boolean,
    default: false
  },
  // Текст кнопки "Назад"
  prevLabel: {
    type: String,
    default: 'Назад'
  },
  // Текст кнопки "Вперед"
  nextLabel: {
    type: String,
    default: 'Вперед'
  },
  // Показывать информацию о пагинации
  showInfo: {
    type: Boolean,
    default: true
  },
  // Показывать поле перехода к странице
  showPageJump: {
    type: Boolean,
    default: false
  },
  // Показывать выбор размера страницы
  showPageSize: {
    type: Boolean,
    default: false
  },
  // Опции размера страницы
  pageSizeOptions: {
    type: Array,
    default: () => [10, 20, 50, 100]
  }
})

const emit = defineEmits(['update:modelValue', 'page-change', 'page-size-change'])

const currentPageValue = ref(props.modelValue)
const jumpToPage = ref('')
const currentPageSize = ref(props.pageSize)

const totalPages = computed(() => {
  return Math.ceil(props.totalItems / currentPageSize.value)
})

const startItem = computed(() => {
  return (currentPageValue.value - 1) * currentPageSize.value + 1
})

const endItem = computed(() => {
  const end = currentPageValue.value * currentPageSize.value
  return Math.min(end, props.totalItems)
})

const isValidJumpPage = computed(() => {
  const page = Number(jumpToPage.value)
  return page >= 1 && page <= totalPages.value && !isNaN(page)
})

watch(() => props.modelValue, (newValue) => {
  if (newValue !== currentPageValue.value) {
    currentPageValue.value = newValue
  }
})

watch(() => props.pageSize, (newValue) => {
  if (newValue !== currentPageSize.value) {
    currentPageSize.value = newValue
    // При изменении размера страницы возвращаемся на первую страницу
    if (currentPageValue.value > 1) {
      handlePageChange(1)
    }
  }
})

watch(totalPages, (newTotalPages) => {
  // Если текущая страница больше общего количества страниц, переходим на последнюю
  if (currentPageValue.value > newTotalPages && newTotalPages > 0) {
    handlePageChange(newTotalPages)
  }
})

const handlePageChange = (page) => {
  if (page !== currentPageValue.value && page >= 1 && page <= totalPages.value) {
    currentPageValue.value = page
    emit('update:modelValue', page)
    emit('page-change', {
      page,
      pageSize: currentPageSize.value,
      startItem: (page - 1) * currentPageSize.value + 1,
      endItem: Math.min(page * currentPageSize.value, props.totalItems)
    })
  }
}

const handleJumpToPage = () => {
  if (isValidJumpPage.value) {
    handlePageChange(Number(jumpToPage.value))
    jumpToPage.value = ''
  }
}

const handlePageSizeChange = (newPageSize) => {
  if (newPageSize !== currentPageSize.value) {
    currentPageSize.value = newPageSize
    emit('page-size-change', newPageSize)
    
    // Пересчитываем текущую страницу чтобы остаться примерно в том же месте
    const currentFirstItem = (currentPageValue.value - 1) * props.pageSize + 1
    const newPage = Math.ceil(currentFirstItem / newPageSize)
    handlePageChange(Math.min(newPage, Math.ceil(props.totalItems / newPageSize)))
  }
}
</script>

<style scoped>
.pagination-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
}

.pagination {
  display: flex;
  justify-content: center;
}

.pagination-btn {
  text-transform: none;
}

.pagination-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

@media (max-width: 600px) {
  .pagination-info {
    font-size: 0.875rem;
  }
  
  .pagination-info .d-flex {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>


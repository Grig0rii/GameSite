<template>
  <v-app-bar color="primary" density="comfortable" elevation="4">
    <!-- Логотип -->
    <v-toolbar-title class="text-white d-flex align-center">
      <v-icon icon="mdi-gamepad-variant" class="me-2" size="28"></v-icon>
      <a href="/" style="text-decoration:none" class="text-white font-weight-bold">
        GameSite
      </a>
    </v-toolbar-title>

    <!-- Поиск (десктоп) -->
    <div v-if="!mobile" class="mx-4" style="max-width: 400px; flex: 1;">
      <SearchBar
        v-model="searchQuery"
        placeholder="Поиск игр..."
        :show-suggestions="true"
        :suggestions="searchSuggestions"
        density="compact"
        variant="outlined"
        hide-details
        class="header-search"
        @search="handleSearch"
        @suggestion-select="handleSuggestionSelect"
      />
    </div>

    <v-spacer></v-spacer>

    <!-- Навигация (десктоп) -->
    <div v-if="!mobile" class="d-flex align-center">
      <v-btn
        v-for="item in navigationItems"
        :key="item.title"
        :href="item.href"
        :to="item.to"
        variant="text"
        class="text-white"
        :prepend-icon="item.icon"
      >
        {{ item.title }}
      </v-btn>
      
      <!-- Кнопка входа/профиля -->
      <div v-if="user" class="d-flex align-center">
        <!-- Простая кнопка профиля -->
        <v-btn
          href="/profile/"
          variant="elevated"
          color="white"
          class="text-primary font-weight-bold me-2"
          prepend-icon="mdi-account-circle"
          size="large"
        >
          {{ user.name }}
        </v-btn>
        
        <!-- Меню профиля -->
        <v-menu offset-y>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-dots-vertical"
              variant="text"
              class="text-white"
              size="small"
            ></v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="userItem in userMenuItems"
              :key="userItem.title"
              :href="userItem.href"
              :prepend-icon="userItem.icon"
            >
              <v-list-item-title>{{ userItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      
      <v-btn
        v-else
        href="/login/"
        variant="outlined"
        class="text-white ml-2"
        prepend-icon="mdi-login"
      >
        Войти
      </v-btn>
    </div>

    <!-- Мобильная навигация -->
    <template v-if="mobile">
      <!-- Кнопка поиска -->
      <v-btn
        icon="mdi-magnify"
        variant="text"
        class="text-white"
        @click="showMobileSearch = !showMobileSearch"
      ></v-btn>
      
      <!-- Меню -->
      <v-app-bar-nav-icon
        class="text-white"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </template>

    <!-- Мобильный поиск -->
    <template v-if="mobile" #extension>
      <v-expand-transition>
        <div v-show="showMobileSearch" class="pa-3" style="width: 100%;">
          <SearchBar
            v-model="searchQuery"
            placeholder="Поиск игр..."
            :show-suggestions="true"
            :suggestions="searchSuggestions"
            density="compact"
            variant="outlined"
            hide-details
            @search="handleSearch"
            @suggestion-select="handleSuggestionSelect"
          />
        </div>
      </v-expand-transition>
    </template>
  </v-app-bar>

  <!-- Мобильное меню -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    width="280"
  >
    <v-list>
      <!-- Пользователь -->
      <v-list-item v-if="user" class="pa-4">
        <template #prepend>
          <v-avatar size="40">
            <v-icon icon="mdi-account-circle" size="40"></v-icon>
          </v-avatar>
        </template>
        <v-list-item-title class="font-weight-medium">{{ user.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
      </v-list-item>

      <v-divider v-if="user"></v-divider>

      <!-- Навигация -->
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :href="item.href"
        :to="item.to"
        :prepend-icon="item.icon"
        @click="drawer = false"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Пользовательское меню -->
      <template v-if="user">
        <v-list-item
          v-for="userItem in userMenuItems"
          :key="userItem.title"
          :href="userItem.href"
          :prepend-icon="userItem.icon"
          @click="drawer = false"
        >
          <v-list-item-title>{{ userItem.title }}</v-list-item-title>
        </v-list-item>
      </template>
      
      <!-- Вход -->
      <v-list-item
        v-else
        href="/login/"
        prepend-icon="mdi-login"
        @click="drawer = false"
      >
        <v-list-item-title>Войти</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'
import SearchBar from './SearchBar.vue'

const { mobile } = useDisplay()

const drawer = ref(false)
const showMobileSearch = ref(false)
const searchQuery = ref('')
const searchSuggestions = ref([])

// Имитация пользователя (в реальном приложении это будет из store/API)
const user = ref({ 
  name: 'Пользователь', 
  email: 'user@example.com',
  id: 1
}) // Для демонстрации работы кнопки профиля

// Отладочная информация
console.log('Пользователь загружен:', user.value)

const navigationItems = [
  {
    title: 'Главная',
    href: '/',
    icon: 'mdi-home'
  },
  {
    title: 'Все игры',
    href: '/games/',
    icon: 'mdi-gamepad-variant'
  },
  {
    title: 'Загрузить',
    href: '/upload/',
    icon: 'mdi-upload'
  },
  {
    title: 'Топ игр',
    href: '/games/?sort=popular',
    icon: 'mdi-trophy'
  }
]

const userMenuItems = [
  {
    title: 'Мой профиль',
    href: '/profile/',
    icon: 'mdi-account'
  },
  {
    title: 'Мои игры',
    href: '/profile/games/',
    icon: 'mdi-gamepad'
  },
  {
    title: 'Избранное',
    href: '/profile/favorites/',
    icon: 'mdi-heart'
  },
  {
    title: 'Настройки',
    href: '/profile/settings/',
    icon: 'mdi-cog'
  },
  {
    title: 'Выйти',
    href: '/logout/',
    icon: 'mdi-logout'
  }
]

const handleSearch = (searchData) => {
  console.log('Поиск:', searchData)
  // Здесь должна быть логика поиска
  // Например, переход на страницу результатов поиска
  if (searchData.query) {
    window.location.href = `/games/?search=${encodeURIComponent(searchData.query)}`
  }
}

const handleSuggestionSelect = (suggestion) => {
  console.log('Выбрано предложение:', suggestion)
  // Здесь можно перейти к конкретной игре или выполнить поиск
}

// Автозакрытие мобильного поиска при клике вне его
const handleClickOutside = (event) => {
  if (showMobileSearch.value && !event.target.closest('.header-search')) {
    showMobileSearch.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.header-search :deep(.v-field) {
  background-color: rgba(255, 255, 255, 0.1);
}

.header-search :deep(.v-field__input) {
  color: white;
}

.header-search :deep(.v-field__input)::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.header-search :deep(.v-icon) {
  color: rgba(255, 255, 255, 0.7);
}
</style>



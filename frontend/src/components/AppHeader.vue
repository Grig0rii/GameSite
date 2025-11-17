<template>
<v-app-bar class="modern-header" density="comfortable" elevation="0">
    <div v-if="backgroundUrl" class="header-bg" :style="{ backgroundImage: `url('${backgroundUrl}')` }"></div>
    <!-- Логотип -->
    <v-toolbar-title class="text-white d-flex align-center logo-container">
      <div class="logo-icon small">
        <v-icon icon="mdi-gamepad-variant" size="16"></v-icon>
      </div>
      <a href="/" class="logo-text">
        GameSite
      </a>
    </v-toolbar-title>

    <!-- Поиск (десктоп) -->
    <div v-if="!mobile" class="mx-4 header-search-container">
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
    <div v-if="!mobile" class="d-flex align-center navigation-container">
      <v-btn
        v-for="item in navigationItems"
        :key="item.title"
        :href="item.href"
        :to="item.to"
        variant="text"
        class="nav-btn"
        :prepend-icon="item.icon"
      >
        {{ item.title }}
      </v-btn>
      
      <!-- Кнопка входа/профиля -->
      <div v-if="user" class="d-flex align-center user-section">
        <!-- Простая кнопка профиля -->
        <v-btn
          href="/profile/"
          variant="elevated"
          class="profile-btn me-2"
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
        class="login-btn ml-2"
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
const props = defineProps({
  backgroundUrl: {
    type: String,
    default: ''
  }
})
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
.modern-header {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  width: 100%;
}

.header-bg {
  position: absolute;
  inset: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.25;
  filter: saturate(110%) contrast(105%);
}

.modern-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  pointer-events: none;
}

.logo-container {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
  flex: 0 1 auto; /* разрешаем мягкое сжатие, чтобы избежать выхода за экран */
  overflow: visible;
}

.logo-icon {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 8px;
  margin-right: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.logo-icon:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

.logo-text {
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 16vw; /* ещё вдвое компактнее */
}

.logo-text:hover {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.header-search-container {
  max-width: 520px;
  flex: 1 1 360px;
  min-width: 200px;
  overflow: hidden;
}

.navigation-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: nowrap;
}

.nav-btn {
  color: white !important;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.5px;
  margin: 0 4px;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.nav-btn:hover::before {
  left: 100%;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.user-section {
  position: relative;
  z-index: 2;
}

.profile-btn {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
  color: #6366f1 !important;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.profile-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%) !important;
}

.login-btn {
  color: white !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.login-btn:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.header-search :deep(.v-field) {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.header-search :deep(.v-field):hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.header-search :deep(.v-field__input) {
  color: white;
  font-weight: 500;
}

.header-search :deep(.v-field__input)::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.header-search :deep(.v-icon) {
  color: rgba(255, 255, 255, 0.8);
}

/* Мобильные стили */
@media (max-width: 960px) {
  .logo-text {
    font-size: 1.25rem;
  }
  
  .logo-icon {
    padding: 6px;
    margin-right: 8px;
  }
  .header-search-container {
    max-width: 100%;
    flex: 1 1 auto;
    min-width: 0;
  }
}

@media (max-width: 1280px) {
  .logo-text {
    font-size: 0.7rem;
    max-width: 14vw;
  }
  .logo-icon :deep(.v-icon) {
    font-size: 14px !important;
  }
}

@media (max-width: 1024px) {
  .logo-text {
    font-size: 0.65rem;
    max-width: 12vw;
  }
  .logo-icon.small :deep(.v-icon) {
    font-size: 12px !important;
  }
}

@media (max-width: 768px) {
  .logo-text {
    font-size: 0.6rem;
    max-width: 20vw;
  }
  .logo-icon.small {
    padding: 2px;
    margin-right: 4px;
  }
}

/* Безопасные внутренние отступы и предотвращение переполнения внутри App Bar */
:deep(.v-toolbar__content) {
  padding-left: 16px !important;
  padding-right: 16px !important;
  gap: 8px;
}

:deep(.v-toolbar-title) {
  min-width: 0;
}

/* Анимация появления хедера */
.modern-header {
  animation: slideDown 0.6s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>



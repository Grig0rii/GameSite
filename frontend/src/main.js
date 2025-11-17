import { createApp, h } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import GameList from './components/GameList.vue'

// Helper: mount a component wrapped in Vuetify's VApp to ensure proper layout
function mountWithVApp(Component, mountEl, props = {}) {
  if (!mountEl) return
  const Root = {
    setup() {
      return () => h(components.VApp, null, { default: () => h(Component, props) })
    }
  }
  const app = createApp(Root)
  app.use(vuetify)
  app.mount(mountEl)
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#6366f1', // Индиго
          secondary: '#8b5cf6', // Фиолетовый
          accent: '#f59e0b', // Янтарный
          error: '#ef4444', // Красный
          warning: '#f59e0b', // Янтарный
          info: '#3b82f6', // Синий
          success: '#10b981', // Изумрудный
          surface: '#ffffff',
          background: '#f8fafc',
          'on-primary': '#ffffff',
          'on-secondary': '#ffffff',
          'on-surface': '#1f2937',
          'on-background': '#1f2937',
        },
      },
      dark: {
        colors: {
          primary: '#818cf8', // Светло-индиго
          secondary: '#a78bfa', // Светло-фиолетовый
          accent: '#fbbf24', // Светло-янтарный
          error: '#f87171', // Светло-красный
          warning: '#fbbf24', // Светло-янтарный
          info: '#60a5fa', // Светло-синий
          success: '#34d399', // Светло-изумрудный
          surface: '#1f2937',
          background: '#111827',
          'on-primary': '#000000',
          'on-secondary': '#000000',
          'on-surface': '#f9fafb',
          'on-background': '#f9fafb',
        },
      },
    },
  },
  defaults: {
    VCard: {
      elevation: 2,
      rounded: 'lg',
    },
    VBtn: {
      rounded: 'lg',
    },
    VTextField: {
      rounded: 'lg',
      variant: 'outlined',
    },
    VChip: {
      rounded: 'lg',
    },
  },
})

// SPA режим (index.html)
const spaRoot = document.getElementById('app')
if (spaRoot) {
  createApp(App).use(vuetify).mount(spaRoot)
}

// Множественный монтаж в Django-шаблонах
const headerEl = document.getElementById('app-header')
if (headerEl) {
  const bg = headerEl.getAttribute('data-bg') || ''
  mountWithVApp(AppHeader, headerEl, { backgroundUrl: bg })
}

const footerEl = document.getElementById('app-footer')
if (footerEl) mountWithVApp(AppFooter, footerEl)

// Монтирование списка игр на странице Django со встраиваемыми данными
const gameListRoot = document.getElementById('game-list-root')
if (gameListRoot) {
  let gamesData = []
  try {
    const raw = gameListRoot.getAttribute('data-games') || '[]'
    gamesData = JSON.parse(raw)
  } catch (e) {
    console.error('Failed to parse games JSON from data attribute', e)
  }
  mountWithVApp(GameList, gameListRoot, { games: gamesData })
}



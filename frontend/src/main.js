import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import GameList from './components/GameList.vue'

const vuetify = createVuetify({
  components,
  directives,
})

// SPA режим (index.html)
const spaRoot = document.getElementById('app')
if (spaRoot) {
  createApp(App).use(vuetify).mount(spaRoot)
}

// Множественный монтаж в Django-шаблонах
const headerEl = document.getElementById('app-header')
if (headerEl) {
  createApp(AppHeader).use(vuetify).mount(headerEl)
}

const footerEl = document.getElementById('app-footer')
if (footerEl) {
  createApp(AppFooter).use(vuetify).mount(footerEl)
}

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
  const app = createApp(GameList, { games: gamesData })
  app.use(vuetify)
  app.mount(gameListRoot)
}



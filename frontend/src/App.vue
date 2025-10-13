<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container>
        <h1 class="text-h3 mb-6">Добро пожаловать на GameSite!</h1>
        <GameList />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import GameList from './components/GameList.vue'
</script>



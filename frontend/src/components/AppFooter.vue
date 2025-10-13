<template>
  <v-footer color="primary" class="pa-6 mt-8">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="text-white">
          <div class="d-flex align-center mb-3">
            <v-icon icon="mdi-gamepad-variant" size="32" class="me-2"></v-icon>
            <strong class="text-h6">GameSite</strong>
          </div>
          <div class="text-body-2">Платформа для загрузки и обмена играми</div>
          <div class="text-caption mt-2">Присоединяйтесь к сообществу разработчиков и игроков!</div>
        </v-col>
        
        <v-col cols="12" md="3" class="text-white">
          <h4 class="text-subtitle-1 mb-3">Навигация</h4>
          <div class="d-flex flex-column">
            <a href="/" class="text-white text-decoration-none mb-1 text-body-2">Главная</a>
            <a href="/games/" class="text-white text-decoration-none mb-1 text-body-2">Все игры</a>
            <a href="/upload/" class="text-white text-decoration-none mb-1 text-body-2">Загрузить игру</a>
            <a href="/about/" class="text-white text-decoration-none mb-1 text-body-2">О нас</a>
          </div>
        </v-col>
        
        <v-col cols="12" md="3" class="text-white">
          <h4 class="text-subtitle-1 mb-3">Категории</h4>
          <div class="d-flex flex-column">
            <a href="/games/?genre=action" class="text-white text-decoration-none mb-1 text-body-2">Экшен</a>
            <a href="/games/?genre=adventure" class="text-white text-decoration-none mb-1 text-body-2">Приключения</a>
            <a href="/games/?genre=strategy" class="text-white text-decoration-none mb-1 text-body-2">Стратегия</a>
            <a href="/games/?genre=indie" class="text-white text-decoration-none mb-1 text-body-2">Инди</a>
          </div>
        </v-col>
        
        <v-col cols="12" md="2" class="text-white">
          <h4 class="text-subtitle-1 mb-3">Связь</h4>
          <div class="d-flex flex-column">
            <div class="d-flex align-center mb-2">
              <v-icon icon="mdi-email" size="16" class="me-2"></v-icon>
              <span class="text-body-2">info@gamesite.com</span>
            </div>
            <div class="d-flex gap-2 mt-2">
              <v-btn icon="mdi-github" size="small" variant="text" href="#" class="text-white"></v-btn>
              <v-btn icon="mdi-twitter" size="small" variant="text" href="#" class="text-white"></v-btn>
              <v-btn icon="mdi-discord" size="small" variant="text" href="#" class="text-white"></v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      
      <v-divider class="my-4" color="white" opacity="0.3"></v-divider>
      
      <v-row align="center">
        <v-col cols="12" md="6" class="text-white">
          <div class="text-body-2">&copy; 2024 GameSite. Все права защищены.</div>
        </v-col>
        <v-col cols="12" md="6" class="text-white text-md-right">
          <div class="d-flex justify-md-end gap-4">
            <a href="/privacy" class="text-white text-decoration-none text-body-2">Политика конфиденциальности</a>
            <a href="/terms" class="text-white text-decoration-none text-body-2">Условия использования</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
</script>



<template>
  <v-footer class="modern-footer">
    <v-container class="footer-container">
      <v-row class="footer-content">
        <v-col cols="12" md="4" class="footer-brand">
          <div class="brand-section">
            <div class="brand-logo">
              <v-icon icon="mdi-gamepad-variant" size="40"></v-icon>
            </div>
            <div class="brand-text">
              <h3 class="brand-title">GameSite</h3>
              <p class="brand-description">Платформа для загрузки и обмена играми</p>
              <p class="brand-tagline">Присоединяйтесь к сообществу разработчиков и игроков!</p>
            </div>
          </div>
        </v-col>
        
        <v-col cols="12" md="3" class="footer-nav">
          <h4 class="nav-title">Навигация</h4>
          <nav class="nav-links">
            <a href="/" class="nav-link">Главная</a>
            <a href="/games/" class="nav-link">Все игры</a>
            <a href="/upload/" class="nav-link">Загрузить игру</a>
            <a href="/about/" class="nav-link">О нас</a>
          </nav>
        </v-col>
        
        <v-col cols="12" md="3" class="footer-categories">
          <h4 class="nav-title">Категории</h4>
          <nav class="nav-links">
            <a href="/games/?genre=action" class="nav-link">Экшен</a>
            <a href="/games/?genre=adventure" class="nav-link">Приключения</a>
            <a href="/games/?genre=strategy" class="nav-link">Стратегия</a>
            <a href="/games/?genre=indie" class="nav-link">Инди</a>
          </nav>
        </v-col>
        
        <v-col cols="12" md="2" class="footer-contact">
          <h4 class="nav-title">Связь</h4>
          <div class="contact-info">
            <div class="contact-item">
              <v-icon icon="mdi-email" size="18" class="contact-icon"></v-icon>
              <span class="contact-text">info@gamesite.com</span>
            </div>
            <div class="social-links">
              <v-btn icon="mdi-github" size="small" variant="text" href="#" class="social-btn"></v-btn>
              <v-btn icon="mdi-twitter" size="small" variant="text" href="#" class="social-btn"></v-btn>
              <v-btn icon="mdi-discord" size="small" variant="text" href="#" class="social-btn"></v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      
      <v-divider class="footer-divider"></v-divider>
      
      <v-row align="center" class="footer-bottom">
        <v-col cols="12" md="6" class="copyright">
          <div class="copyright-text">&copy; 2024 GameSite. Все права защищены.</div>
        </v-col>
        <v-col cols="12" md="6" class="legal-links">
          <div class="legal-links-container">
            <a href="/privacy" class="legal-link">Политика конфиденциальности</a>
            <a href="/terms" class="legal-link">Условия использования</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
</script>

<style scoped>
.modern-footer {
  background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%);
  color: white;
  position: relative;
  overflow: hidden;
  margin-top: 60px;
}

.modern-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  pointer-events: none;
}

.footer-container {
  position: relative;
  z-index: 2;
  padding: 60px 0 40px;
}

.footer-content {
  margin-bottom: 40px;
}

.footer-brand {
  margin-bottom: 40px;
}

.brand-section {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.brand-logo {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 16px;
  padding: 16px;
  color: white;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.3);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.brand-text {
  flex: 1;
}

.brand-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-description {
  font-size: 1.1rem;
  color: #d1d5db;
  margin: 0 0 8px 0;
  font-weight: 500;
}

.brand-tagline {
  font-size: 0.95rem;
  color: #9ca3af;
  margin: 0;
  font-style: italic;
}

.footer-nav,
.footer-categories,
.footer-contact {
  margin-bottom: 40px;
}

.nav-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 20px 0;
  position: relative;
}

.nav-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 2px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-link {
  color: #d1d5db;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 0;
}

.nav-link::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  transition: width 0.3s ease;
  border-radius: 1px;
}

.nav-link:hover {
  color: #ffffff;
  transform: translateX(8px);
}

.nav-link:hover::before {
  width: 6px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-icon {
  color: #6366f1;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 8px;
  padding: 8px;
}

.contact-text {
  color: #d1d5db;
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 8px;
}

.social-btn {
  color: #d1d5db !important;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.social-btn:hover {
  color: #6366f1 !important;
  background: rgba(99, 102, 241, 0.1) !important;
  transform: translateY(-2px);
}

.footer-divider {
  border-color: rgba(255, 255, 255, 0.1) !important;
  margin: 40px 0 30px;
}

.footer-bottom {
  margin-top: 20px;
}

.copyright-text {
  color: #9ca3af;
  font-size: 0.95rem;
  font-weight: 500;
}

.legal-links-container {
  display: flex;
  gap: 24px;
  justify-content: flex-end;
}

.legal-link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.legal-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  transition: width 0.3s ease;
  border-radius: 1px;
}

.legal-link:hover {
  color: #ffffff;
}

.legal-link:hover::after {
  width: 100%;
}

/* Адаптивность */
@media (max-width: 960px) {
  .footer-container {
    padding: 40px 0 30px;
  }
  
  .brand-section {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  
  .brand-title {
    font-size: 1.75rem;
  }
  
  .legal-links-container {
    justify-content: center;
    margin-top: 20px;
  }
  
  .footer-bottom {
    text-align: center;
  }
}

@media (max-width: 600px) {
  .footer-container {
    padding: 30px 0 20px;
  }
  
  .brand-title {
    font-size: 1.5rem;
  }
  
  .nav-title {
    font-size: 1.1rem;
  }
  
  .legal-links-container {
    flex-direction: column;
    gap: 12px;
  }
}
</style>

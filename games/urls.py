from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('games/', views.game_list, name='game_list'),
    path('games/<int:game_id>/', views.game_detail, name='game_detail'),
    path('upload/', views.upload_game, name='upload_game'),
    path('register/', views.register, name='register'),
    # Добавляем tasks/ для совместимости
    path('tasks/', views.home, name='tasks'),
]

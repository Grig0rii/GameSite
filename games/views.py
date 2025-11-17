from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Game
from django.urls import reverse
import json
from .forms import GameForm, CustomUserCreationForm, CustomAuthenticationForm
from django.http import JsonResponse


def home(request):
    """Главная страница со списком игр"""
    games = Game.objects.all()[:6]  # Показываем последние 6 игр
    return render(request, 'games/home.html', {'games': games})


def game_list(request):
    """Страница со всеми играми"""
    games = Game.objects.all()
    games_payload = []
    for g in games:
        games_payload.append({
            'id': g.id,
            'title': g.title,
            'developer': g.developer,
            'genre': g.genre,
            'price': float(g.price) if hasattr(g.price, 'quantize') or hasattr(g.price, 'as_tuple') else g.price,
            'description': (g.description or '')[:180],
            'image_url': g.image.url if getattr(g, 'image', None) else None,
            'release_date': g.release_date.isoformat() if getattr(g, 'release_date', None) else '',
            'uploaded_by': g.uploaded_by.username if getattr(g, 'uploaded_by', None) else '',
            'detail_url': reverse('game_detail', args=[g.id]),
        })
    context = {
        'games': games,
        'games_json': json.dumps(games_payload, ensure_ascii=False),
    }
    return render(request, 'games/game_list.html', context)


def api_games(request):
    """JSON список игр для фронтенда"""
    games = Game.objects.all()
    payload = []
    for g in games:
        payload.append({
            'id': g.id,
            'title': g.title,
            'developer': g.developer,
            'genre': g.genre,
            'price': float(g.price) if hasattr(g.price, 'quantize') or hasattr(g.price, 'as_tuple') else g.price,
            'description': (g.description or '')[:180],
            'image_url': g.image.url if getattr(g, 'image', None) else None,
            'release_date': g.release_date.isoformat() if getattr(g, 'release_date', None) else '',
            'uploaded_by': g.uploaded_by.username if getattr(g, 'uploaded_by', None) else '',
            'detail_url': reverse('game_detail', args=[g.id]),
        })
    return JsonResponse({'results': payload, 'count': len(payload)})

def game_detail(request, game_id):
    """Детальная страница игры"""
    game = get_object_or_404(Game, id=game_id)
    return render(request, 'games/game_detail.html', {'game': game})


@login_required
def upload_game(request):
    """Страница загрузки игры"""
    if request.method == 'POST':
        form = GameForm(request.POST, request.FILES)
        if form.is_valid():
            game = form.save(commit=False)
            game.uploaded_by = request.user
            game.save()
            messages.success(request, 'Игра успешно загружена!')
            return redirect('game_detail', game_id=game.id)
    else:
        form = GameForm()
    return render(request, 'games/upload_game.html', {'form': form})


def register(request):
    """Регистрация пользователя"""
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            login(request, user)
            messages.success(request, f'Добро пожаловать, {username}!')
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(request, 'games/register.html', {'form': form})


def user_login(request):
    """Авторизация пользователя"""
    if request.method == 'POST':
        form = CustomAuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f'Добро пожаловать, {username}!')
                return redirect('home')
            else:
                messages.error(request, 'Неверное имя пользователя или пароль.')
        else:
            messages.error(request, 'Неверное имя пользователя или пароль.')
    else:
        form = CustomAuthenticationForm()
    return render(request, 'games/login.html', {'form': form})


def user_logout(request):
    """Выход пользователя"""
    logout(request)
    messages.success(request, 'Вы успешно вышли из системы.')
    return redirect('home')

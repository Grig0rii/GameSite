from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Game
from .forms import GameForm


def home(request):
    """Главная страница со списком игр"""
    games = Game.objects.all()[:6]  # Показываем последние 6 игр
    return render(request, 'games/home.html', {'games': games})


def game_list(request):
    """Страница со всеми играми"""
    games = Game.objects.all()
    return render(request, 'games/game_list.html', {'games': games})


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
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            login(request, user)
            messages.success(request, f'Добро пожаловать, {username}!')
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'games/register.html', {'form': form})

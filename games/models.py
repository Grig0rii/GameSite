from django.db import models
from django.contrib.auth.models import User


class Game(models.Model):
    title = models.CharField(max_length=200, verbose_name="Название игры")
    description = models.TextField(verbose_name="Описание")
    developer = models.CharField(max_length=100, verbose_name="Разработчик")
    genre = models.CharField(max_length=50, verbose_name="Жанр")
    release_date = models.DateField(verbose_name="Дата выпуска")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    image = models.ImageField(upload_to='games/', verbose_name="Изображение игры")
    game_file = models.FileField(upload_to='games/files/', verbose_name="Файл игры")
    uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Загружено пользователем")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    class Meta:
        verbose_name = "Игра"
        verbose_name_plural = "Игры"
        ordering = ['-created_at']

    def __str__(self):
        return self.title

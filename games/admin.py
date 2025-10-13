from django.contrib import admin
from .models import Game


@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ['title', 'developer', 'genre', 'price', 'uploaded_by', 'created_at']
    list_filter = ['genre', 'developer', 'created_at']
    search_fields = ['title', 'developer', 'description']
    readonly_fields = ['created_at', 'updated_at']

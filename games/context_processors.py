import os


def vite(request):
    """Expose VITE_DEV flag to templates to switch between Vite dev server and built assets.

    Set env var VITE_DEV=1 to enable dev server includes.
    Defaults to settings.DEBUG if env var is not set.
    """
    from django.conf import settings

    env_flag = os.getenv("VITE_DEV")
    if env_flag is not None:
        is_dev = env_flag == "1"
    else:
        # По умолчанию используем собранные статики (без dev-сервера)
        is_dev = False

    dev_server_url = os.getenv("VITE_DEV_SERVER", "http://localhost:5173")

    return {
        "VITE_DEV": is_dev,
        "VITE_DEV_SERVER": dev_server_url,
    }


def user_context(request):
    """Дополнительный контекст для пользователя"""
    context = {}
    
    if request.user.is_authenticated:
        # Добавляем дополнительную информацию о пользователе
        context.update({
            'user_display_name': request.user.get_full_name() or request.user.username,
            'user_initials': ''.join([name[0].upper() for name in (request.user.get_full_name() or request.user.username).split()[:2]]),
            'is_admin': request.user.is_staff,
        })
    
    return context


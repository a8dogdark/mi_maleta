from django.urls import path
from .views import blog_inicio

urlpatterns = [
    path('', blog_inicio, name='blog_inicio'),
]
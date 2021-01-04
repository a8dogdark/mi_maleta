from django.shortcuts import render
from home.models import Categorias, Post

# Create your views here.
def blog_inicio(request):
    datos = Post.objects.all()#estoy llamando todos los datos de la tabla post sin nungun filtro
    return render(request, 'blog/inicio.html', {'datos': datos})
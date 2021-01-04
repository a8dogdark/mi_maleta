from django.shortcuts import render

# Create your views here.
def home_inicio(request):
    return render(request, 'home/home.html', {})
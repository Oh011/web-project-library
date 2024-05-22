from django.shortcuts import render

# Create your views here.

def signUP(request):
    return render(request , 'pages/add_book.html')
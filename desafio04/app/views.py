from django.shortcuts import render

# Create your views here.
from app.models import Classes


def classes_list(request):
    classes = Classes.objects.all()
    return render(
        request,
        'classes_list.html',
        {
            'classes': classes
        }
    )


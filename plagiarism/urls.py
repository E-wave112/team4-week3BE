from . import views
from django.urls import include,path


urlpatterns = [

    path('', views.index, name="index"),
    path('result/',views.result, name="result")
]
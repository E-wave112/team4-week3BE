from django.contrib import admin


# Register your models here.
from .models import Plag
@admin.register(Plag)
class PlagAdmin(admin.ModelAdmin):
    list_display = ['textitem']
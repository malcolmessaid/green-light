from django.urls import path
from . import views

urlpatterns = [
    path('api/track/', views.TrackListCreate.as_view() ),
]

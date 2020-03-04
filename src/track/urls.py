from django.urls import path
from . import views

urlpatterns = [
    path('api/track/', views.TrackListCreate.as_view() ),
    path('api/filter/', views.TrackListFilter.as_view() ),
    path('api/create/', views.TrackListFront.as_view() )
]

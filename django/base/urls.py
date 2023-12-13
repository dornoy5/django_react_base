from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('prods', views.ProductView.as_view()),
    path('prods/<pk>', views.ProductView.as_view()),
    path('login', views.MyTokenObtainPairView.as_view()),
    path('books', views.BookList.as_view()),
    path('books/<int:pk>', views.BookDetail.as_view()),
]

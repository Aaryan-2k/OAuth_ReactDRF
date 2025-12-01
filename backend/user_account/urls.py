from django.urls import path
from . import views

urlpatterns=[
    path('create/', views.create_account.as_view(), name='create_account'),
    path('login/google/', views.GoogleLogin.as_view(), name='google_login'),
]
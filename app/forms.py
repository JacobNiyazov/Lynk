from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from django.db import models


class RegisterForm(UserCreationForm):
	class Meta:
		model = User
		fields = ["username", "email", "password1", "password2"]

	def clean_email(self):
		email = self.cleaned_data.get('email')
		if User.objects.filter(email=email).exists():
			raise forms.ValidationError("This email is already being used.")
		return email
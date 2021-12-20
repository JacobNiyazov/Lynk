from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from account.models import Profile, Follow, Event
# from account.models import Account

# Register your models here.


class AccountAdmin(UserAdmin):
	list_display = ("username", "email", "date_joined", "last_login", "is_admin", "is_staff")
	search_fields = ("username", "email")
	readonly_fields = ("date_joined", "profile_pic", "last_login")

	filter_horizontal = ()
	list_filter = ()
	fieldsets = ()

admin.site.register(Profile)
admin.site.register(Follow)
admin.site.register(Event)
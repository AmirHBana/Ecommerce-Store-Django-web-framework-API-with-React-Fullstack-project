from django.contrib import admin

from vendor.models import Vendor

class VendorAdmin(admin.ModelAdmin):
    list_display = ('user', 'name', 'mobile', 'date', 'active', 'id')
    list_editable = ('active',)
admin.site.register(Vendor, VendorAdmin)

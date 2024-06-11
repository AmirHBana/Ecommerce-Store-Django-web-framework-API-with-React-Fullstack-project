from django.contrib import admin

from store.models import (Product, Category, Gallery, Specification, Size, Color, Cart, CartOrder, CartOrderItem,
                          Review, Coupon, Notification, WishList, ProductFaq, Tax)


class GalleryInline(admin.TabularInline):
    model = Gallery
    extra = 0
class SpecificationInline(admin.TabularInline):
    model = Specification
    extra = 0

class SizeInline(admin.TabularInline):
    model = Size
    extra = 0

class ColorInline(admin.TabularInline):
    model = Color
    extra = 0

class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price','category', 'shipping_amount', 'stock_qty', 'in_stock', 'vendor', 'featured')
    list_editable = ('featured', )
    list_filter = ('date',)
    search_fields = ('title',)
    inlines = [GalleryInline, SpecificationInline, SizeInline, ColorInline]

class CartAdmin(admin.ModelAdmin):
    list_display = ('product', 'user', 'price', 'date')

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'rating', 'active')
    list_editable = ('active', )

class WishListAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'date')

class ProductFaqAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'email', 'active', 'date')
    list_editable = ('active',)

class NotificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'vendor', 'seen', 'date')
    list_editable = ('seen',)


class CouponAdmin(admin.ModelAdmin):
    list_display = ('vendor', 'code', 'discount', 'active', 'date')
    list_editable = ('active',)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'image', 'active')
    list_editable = ('active',)

class SizeAdmin(admin.ModelAdmin):
    list_display = ('product', 'name', 'price')

class ColorAdmin(admin.ModelAdmin):
    list_display = ('product', 'name', 'color_code')

class CartOrderItemAdmin(admin.ModelAdmin):
    list_display = ('vendor', 'product', 'qty', 'price', 'total', 'date')

class CartOrderAdmin(admin.ModelAdmin):
    list_display = ('buyer', 'total', 'payment_status', 'date')

class TaxAdmin(admin.ModelAdmin):
    list_display = ('country', 'rate', 'active', 'date')

admin.site.register(Color, ColorAdmin)
admin.site.register(Size, SizeAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)

admin.site.register(Cart, CartAdmin)
admin.site.register(CartOrder, CartOrderAdmin)
admin.site.register(CartOrderItem, CartOrderItemAdmin)

admin.site.register(WishList, WishListAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Notification, NotificationAdmin)
admin.site.register(ProductFaq, ProductFaqAdmin)
admin.site.register(Coupon, CouponAdmin)
admin.site.register(Tax, TaxAdmin)

// كود تبديل الأقسام بين الترفيهي والطبي
function showCategoryTab(event, tabName) {
    // إخفاء كل المحتوى
    document.querySelectorAll('.category-tabs-content').forEach(function(tab) {
        tab.hidden = true;
    });
    // إزالة active من كل الأزرار
    document.querySelectorAll('.category-tab').forEach(function(btn) {
        btn.classList.remove('active');
    });
    // إظهار القسم المطلوب
    document.getElementById(tabName).hidden = false;
    // تفعيل الزر الحالي
    event.currentTarget.classList.add('active');
}
// عند تحميل الصفحة، تأكد أن القسم الترفيهي ظاهر فقط
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('entertainment').hidden = false;
    document.getElementById('medical').hidden = true;
});

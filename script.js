// يمكنك إضافة وظائف جافاسكريبت هنا إذا احتجت
// مثال: تمرير سلس عند الضغط على الروابط

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function showCategoryTab(event, tabId) {
    document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.querySelectorAll('.category-tabs-content').forEach(c => c.setAttribute('hidden', ''));
    document.getElementById(tabId).removeAttribute('hidden');
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    
    // إظهار تنبيه تأكيد
    alert('شكراً لك! تم استقبال طلب الحجز بنجاح وسنتصل بك قريباً للتأكيد.');
    
    // تفريغ الحقول بعد الإرسال
    this.reset();
});
// التمرير السلس عند الضغط على الروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
function filterMenu(category) {
    const drinks = document.querySelector('.boissons-section');
    const dishes = document.querySelector('.plats-section');

    if (category === 'all') {
        drinks.style.display = 'block';
        dishes.style.display = 'block';
    } else if (category === 'drinks') {
        drinks.style.display = 'block';
        dishes.style.display = 'none';
    } else if (category === 'dishes') {
        drinks.style.display = 'none';
        dishes.style.display = 'block';
    }
}

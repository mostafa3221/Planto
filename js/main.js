// تفعيل فتح/إغلاق السايدبار مع زر الهامبرغر
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const lockButton = document.querySelector('.lock');
    
    // إضافة كلاس closed للسايدبار في البداية لإخفائه
    if (sidebar) {
        sidebar.classList.add('closed');
    }
    
    // حدث الضغط على زر الهامبرغر
    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', function() {
            if (sidebar) {
                sidebar.classList.toggle('closed');
            }
        });
    }
    
    // حدث الضغط على زر القفل (اختياري - لإغلاق السايدبار)
    if (lockButton) {
        lockButton.addEventListener('click', function() {
            if (sidebar) {
                sidebar.classList.add('closed');
            }
        });
    }
    
    // إغلاق السايدبار عند الضغط خارجه
    document.addEventListener('click', function(event) {
        if (sidebar && !sidebar.contains(event.target) && !hamburgerButton.contains(event.target)) {
            sidebar.classList.add('closed');
        }
    });
});

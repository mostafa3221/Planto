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



fetch('./../products.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.products');
        console.log(container);

            data.forEach(product => {
                container.innerHTML += `
                <div class="product">
                <img src="${product.image}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="box_buttons">
                    <span>Rs. ${product.price}/-</span>
                    <button class="bag"><i class="fa-solid fa-bag-shopping"></i></button>
                </div>
            </div>`
                
            });
        

    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });
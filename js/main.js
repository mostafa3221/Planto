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



fetch('./../json/products.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.products');
        // console.log(container);

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


fetch('./../json/testimonials.json')
    .then(response => response.json())
    .then(data => {
        const user_comment = document.querySelector('.Customer_Review_box');

        data.forEach(box => {  
            user_comment.innerHTML += `
                <div class="box">
                    <div class="user">
                        <img src="${box.image}" alt="${box.name}">
                        <div class="user_details">
                            <h3>${box.name}</h3>
                            <img src="imgs/star.svg" alt="Rating stars">
                        </div>
                    </div>
                    <div class="comment">
                        <p>${box.comment}</p>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => {
        console.error('Error fetching testimonials:', error);
    });



fetch('./../json/plants.json')
    .then ( response => response.json())
    .then (data => {
        const swiperWrapper = document.querySelector('.swiper-wrapper')
        const count = data.length;
        console.log(count);
        
        data.forEach(swiper_slide => {
            
            swiperWrapper.innerHTML += `
                <div class="swiper-slide swiper_slide">
        <div class="img_swiper">
            <img src="${swiper_slide.image}" alt="">
        </div>
        <div class="text_swiper">
            <h3>${swiper_slide.title}</h3>
            <p>${swiper_slide.description1}</p>
            <p>${swiper_slide.description2}</p>
            <div class="buttons_swiper">
                <button>Explore</button>
                <div>
                        <div class="swiper-button-next"></div>
                        <div class="num">
                            <p class="num_of_slide">0${swiper_slide.id}/</p>
                        <p class="num_of_all_slide">0${count}</p>
                        </div>
                        
                        <div class="swiper-button-prev"></div>

                </div>
            </div>
        </div>
      </div>
            `
        });
        var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    }) 
     
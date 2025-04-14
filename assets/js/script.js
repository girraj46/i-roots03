
        // const swiper = new Swiper('.hover_slider', {
        //     direction: 'vertical',
        //     mousewheel: true,
        //     keyboard: {
        //         enabled: true,
        //         onlyInViewport: false
        //     },
        //     effect: 'coverflow',
        //     coverflowEffect: {
        //         rotate: 50,
        //         stretch: 0,
        //         depth: 100,
        //         modifier: 1,
        //         slideShadows: true,
        //     },
        //     speed: 1000,
        //     pagination: {
        //         el: '.swiper-pagination',
        //         clickable: true,
        //     },
        // });

        const items = document.querySelectorAll('.hover_slider_image');
        items.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = item.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;
                
                item.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) scale3d(1.1, 1.1, 1.1)`;
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
            });
        });


        // const swiperEl = document.querySelector('.product_slider_1')
        // Object.assign(swiperEl, {
          
        //   pagination: {
        //     clickable: true,
        //   },
        //   breakpoints: {
        //     640: {
        //       slidesPerView: 2,
        //       spaceBetween: 20,
        //     },
        //     768: {
        //       slidesPerView: 4,
        //       spaceBetween: 40,
        //     },
        //     1024: {
        //       slidesPerView: 5,
        //       spaceBetween: 50,
        //     },
        //   },
        // });
        // swiperEl.initialize();
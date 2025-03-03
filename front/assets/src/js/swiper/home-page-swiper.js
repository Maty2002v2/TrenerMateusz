import BuildrSwiper from './builder-swiper';

export class HomePageSwiper {
    constructor(container) {
        this.swiper = new BuildrSwiper(container, {
            speed: 300,
            slidesPerView: 1,
            loop: false,
            on: {
                init: () => {
                    this.animateSlide();
                },
                slideChangeTransitionStart: () => {
                    this.animateSlide();
                }
            }
        });
    }

    animateSlide() {
        document.querySelectorAll('.arrow').forEach(arrow => arrow.classList.remove('active'));
        document.querySelectorAll('.main-image').forEach(arrow => arrow.classList.remove('active'));
        document.querySelectorAll('.slide-info').forEach(arrow => arrow.classList.remove('active'));
                    
        const activeSlide = document.querySelector('.swiper-slide-active');
        const activeArrow = activeSlide.querySelector('.arrow');
        const mainImg = activeSlide.querySelector('.main-image');
        const slideInfo = activeSlide.querySelector('.slide-info');
                    
        if (activeArrow) {
          setTimeout(() => {
            activeArrow.classList.add('active');
            mainImg.classList.add('active');
            slideInfo.classList.add('active');
          }, 300);
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new HomePageSwiper('#home-page-swiper');
})

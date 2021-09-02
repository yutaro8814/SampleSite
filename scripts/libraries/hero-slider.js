class HeroSlider{
    constructor(){
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            // direction: 'cover',
            grabCursor: true,
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 1,
            speed: 1000,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                }
            },
            
          });
    }
}
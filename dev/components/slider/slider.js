// set sliders depending on device
if ($(window).innerWidth() < 1200) {
  const slider = new Swiper('.slider__container', {
    direction: 'horizontal',
    speed: 500,
    wrapperClass: 'slider__wrapper',
    slideClass: 'slider__slide',
    spaceBetween: 30,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    }
  });
} else {
  const slider = new Swiper('.slider__container', {
    direction: 'vertical',
    speed: 500,
    wrapperClass: 'slider__wrapper',
    slideClass: 'slider__slide',
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    }
  });
}
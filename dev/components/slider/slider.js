const slider = new Swiper('.slider__container', {
  direction: 'vertical',
  speed: 500,
  wrapperClass: 'slider__wrapper',
  slideClass: 'slider__slide',
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
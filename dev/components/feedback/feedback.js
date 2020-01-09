if ($(window).innerWidth() < 1200) {
  const feedbackSlider = new Swiper('.feedback__grid', {
    direction: 'horizontal',
    speed: 500,
    wrapperClass: 'feedback__row',
    slideClass: 'feedback__video',
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.feedback__pagination',
      clickable: true,
    }
  });
}
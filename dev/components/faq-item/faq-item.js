$('.faq-item__head').on('click', function () {
  $(this).toggleClass('faq-item__head--opened');
  $(this).next().slideToggle(300);
});
// toggling faq items
$('.faq-item__head').on('click', function () {
  if ($(this).hasClass('faq-item__head--opened')) {
    $(this).removeClass('faq-item__head--opened');
  } else {
    $('.faq-item__head--opened').next().slideUp(300);
    $('.faq-item__head--opened').removeClass('faq-item__head--opened');
    $(this).addClass('faq-item__head--opened');
  }
  $(this).next().slideToggle(300);
});
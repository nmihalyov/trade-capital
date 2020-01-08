let scroll = 0;

$('.js-open-popup').on('click', e => {
  e.preventDefault();

  scroll = window.scrollY;

  $('body').css({
    'position': 'fixed',
    'margin-top': -scroll
  });
  
  $('.popup').fadeIn(300);
});

$('.popup__close').on('click', () => {
  $('body').css({
    'position': 'static',
    'margin-top': '0'
  });

  window.scrollTo(0, scroll)

  $('.popup').fadeOut(300);
});

$('.js-send-tel').on('click', function (e) {
  e.preventDefault();

  $(this).attr('disabled', 'disabled');
  $(this).siblings('.input__field').attr('disabled', 'disabled');
  $('.js-send-form').removeAttr('disabled');
});
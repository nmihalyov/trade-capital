// window offset to top of page
let scroll = 0;

// show popup
$('.js-open-popup').on('click', e => {
  e.preventDefault();

  scroll = window.scrollY;

  $('body').css({
    'position': 'fixed',
    'margin-top': -scroll
  });
  
  $('.popup').fadeIn(300);
});

// close popup
$('.popup__close').on('click', () => {
  $('body').css({
    'position': 'static',
    'margin-top': '0'
  });

  window.scrollTo(0, scroll);

  $('.popup').fadeOut(300);
});

// send popup form
$('.js-send-tel').on('click', function (e) {
  e.preventDefault();

  $(this).attr('disabled', 'disabled');
  $(this).siblings('.input__field').attr('disabled', 'disabled');
  $('.popup__code input').removeAttr('disabled');
  $('.js-send-form').removeAttr('disabled');
});
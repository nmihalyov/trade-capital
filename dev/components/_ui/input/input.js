// set input focus styles
$('.input__field').on('focus', function () {
  $(this).parent().addClass('input--focused');
}).on('blur', function () {
  $(this).parent().removeClass('input--focused');
});

// set input filled styles
$('.input__field').on('change', function () {
  $(this).val() !== '' ? $(this).parent().addClass('input--filled') : $(this).parent().removeClass('input--filled');
});

// apply mask to phone inputs
$('.input--tel .input__field').inputmask('8 999 999 99 99');

// show/hide send code button deppending on phone input value
$('.input--tel .input__field').on('input', function () {
  const val = $(this).val();
  
  if (val !== '' && !/_/g.test(val)) {
    $(this).siblings('.js-send-tel').removeAttr('disabled');
  } else {
    $(this).siblings('.js-send-tel').attr('disabled', 'disabled');
  }
});

// apply mask to code inputs
$('.input--code .input__field').inputmask('9999');
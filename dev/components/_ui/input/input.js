$('.input__field').on('focus', function () {
  $(this).parent().addClass('input--focused');
}).on('blur', function () {
  $(this).parent().removeClass('input--focused');
});

$('.input__field').on('change', function () {
  $(this).val() !== '' ? $(this).parent().addClass('input--filled') : $(this).parent().removeClass('input--filled');
});

$('.input--tel .input__field').inputmask('8 999 999 99 99');

$('.input--tel .input__field').on('input', function () {
  const val = $(this).val();
  
  if (val !== '' && !/_/g.test(val)) {
    $(this).siblings('.js-send-tel').removeAttr('disabled');
  } else {
    $(this).siblings('.js-send-tel').attr('disabled', 'disabled');
  }
});

$('.input--code .input__field').inputmask('9999');
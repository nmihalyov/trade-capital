let deposit = 0;
let term = 0;
let profit = 0;

const calculate = () => {
  const value = parseInt(deposit * (profit / 100) * 30 * term + deposit);
  $('.calculator__total span').text(value);
};

$('.calculator__input input').on('input', function () {
  if ($(this).attr('name') === 'deposit') {
    deposit = +$(this).val();
  }
  if ($(this).attr('name') === 'term') {
    term = +$(this).val();
  }

  calculate();
});

$('.js-range').ionRangeSlider({
  type: 'single',
  max: 5,
  min: 0,
  step: 0.1,
  onChange: data => {
    const val = data.input[0].value;
    profit = +val;
    calculate();

    $('.irs-single').show();
    $('.calculator__grid-item').map(el => {
      if (+val >= +el) {
        $(`.calculator__grid-item:eq(${el})`).addClass('calculator__grid-item--check');
      } else {
        $(`.calculator__grid-item:eq(${el})`).removeClass('calculator__grid-item--check');
      }
    });
  },
  onFinish: () => {
    $('.irs-single').hide();
  }
});
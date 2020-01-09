const sections = [$('.hero'), $('.why'), $('.about'), $('.faq')];

const setLinks = () => {
  sections.map(el => {
    const topOffset = el.offset().top;
    if (topOffset <= window.scrollY + $('.header').innerHeight() + 30) {
      $('.header__link--current').removeClass('header__link--current');
      $(`.header__link[data-scroll=${el[0].classList[0]}]`).addClass('header__link--current');
    }
  });
};

setLinks();

const debounce = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

$(window).on('scroll', () => {
  debounce(setLinks, 300);
});

let windowOffset = 0;
let headerMobileShown = false;

$('.js-scrollto').on('click', function (e) {
  e.preventDefault();

  $('body').css({
    'position': 'static',
    'margin-top': '0'
  });

  headerMobileShown = false;

  $('.header__burger').removeClass('header__burger--active');
  $('.header__mobile').removeClass('header__mobile--active');

  $([document.documentElement, document.body]).animate({
    scrollTop: $(`.${$(this).attr('data-scroll')}`).offset().top - $('.header').innerHeight()
  }, 500);
});

$('.header__burger').on('click', function () {
  $(this).toggleClass('header__burger--active');
  $('.header__mobile').toggleClass('header__mobile--active');

  headerMobileShown = !headerMobileShown;

  if (headerMobileShown) {
    windowOffset = window.scrollY;
    $('body').css({
      'position': 'fixed',
      'margin-top': -windowOffset
    });
  } else {
    $('body').css({
      'position': 'static',
      'margin-top': '0'
    });

    window.scrollTo(0, windowOffset);
  }
});
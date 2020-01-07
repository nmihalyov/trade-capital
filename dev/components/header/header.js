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

$('.js-scrollto').on('click', function (e) {
  e.preventDefault();
  $([document.documentElement, document.body]).animate({
    scrollTop: $(`.${$(this).attr('data-scroll')}`).offset().top - $('.header').innerHeight()
  }, 500);
});
// setting viewport meta tag
const setResponsive = width => {
  if (width < 1200) {
    $('meta[name="viewport"]').attr('content', 'width=320');
  } else {
    $('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1, user-scalable=no');
  }
};

// set once page is loaded
setResponsive($(window).innerWidth());

// set on resize
$(window).resize(() => {
  setResponsive($(window).innerWidth());
});
const setResponsive = width => {
  if (width < 1200) {
    $('meta[name="viewport"]').attr('content', 'width=320, initial-scale=1, user-scalable=no');
  } else {
    $('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1, user-scalable=no');
  }
};

setResponsive($(window).innerWidth());

$(window).resize(() => {
  setResponsive($(window).innerWidth());
});
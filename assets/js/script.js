$(function () {
  // find and remove class 'active' and add class 'active' on mouse over the nav link
  $('.nav-link').on('mouseover', function() {
    $('.nav').find('.active').removeClass('active');
    $(this).addClass('active');
  });
  // find and remove class 'active' add class 'active' on mouse over the link of the collapse navbar and closes it
  $('#collapsibleNavbar a').on('click', function() {
    $('.nav').find('.active').removeClass('active');
    $(this).addClass('active');
    $('.navbar-collapse').collapse('hide');
  });
  // Back to the top of window on click of the button
  $('#buttonBackToTop').on('click', function() {
    $(window).scrollTop(0);
  });

  var timer;
  //Show button on scroll and closes it after the timeout
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 300) {
      $('#buttonBackToTop').css('display', 'block');

      try {
        clearTimeout(timer);
      } catch (e) {}
      timer = setTimeout(function () {
        $('#buttonBackToTop').css('display', 'none');
      }, 2000);      
    }
  });
});

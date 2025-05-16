jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("body").addClass("header-fixed");
    } else {
      $("body").removeClass("header-fixed");
    }
  });

 $(".down-arrow").click(function (e) {
    e.stopPropagation();
    const parentLi = $(this).closest("li");

    if (parentLi.hasClass("active")) {
      parentLi.removeClass("active"); 
    } else {
      $(".navbar-menu li").removeClass("active"); 
      parentLi.addClass("active"); 
    }
  });


  $(".nav-links").click(function (e) {
    e.preventDefault();
    $("body").removeClass("mobile-open");
  });


  $(".mobile-toggle").click(function () {
    $("body").toggleClass("mobile-open");
  });


  $('.search-icon').on('click', function () {
    $('.search-wrapper').addClass('showsearch');
  });

  $('.close-icon').on('click', function () {
    $('.search-wrapper').removeClass('showsearch');
  });

});

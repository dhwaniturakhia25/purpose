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

  $('.banner-button').on('click', function () {
    var newBg = $(this).data('bg');
    $('.banner-button').removeClass('active');
    $(this).addClass('active');
    $('#hero').fadeTo(300, 0.2, function () {
      $(this).css('background-image', 'url(' + newBg + ')');
    }).fadeTo(300, 1);
  });

  $('.search-icon').on('click', function () {
    $('.search-wrapper').addClass('showsearch');
  });

  $('.close-icon').on('click', function () {
    $('.search-wrapper').removeClass('showsearch');
  });

});

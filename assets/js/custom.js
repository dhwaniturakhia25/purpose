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

  // $(".nav-links").click(function (e) {
  //   if ($(window).width() <= 991) {
  //     e.preventDefault();
  //     $("body").removeClass("mobile-open");
  //   }
  // });

  $(".nav-links").click(function (e) {
  if ($(window).width() <= 991) {
    e.preventDefault(); // prevent default link behavior
    const link = $(this).attr("href"); // get the href of the clicked link
    $("body").removeClass("mobile-open"); // remove the class

    // wait for animation if needed, then navigate
    setTimeout(function () {
      window.location.href = link;
    }, 100); // adjust delay as needed
  }
});


  $(".mobile-toggle").click(function () {
    $("body").toggleClass("mobile-open");
  });

   $('.testimonial-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});

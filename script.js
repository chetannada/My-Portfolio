$(document).ready(function () {
  // Scroll down sticky navbar script start
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // Scroll down sticky navbar script end

    // Scroll up Button script start
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    // Scroll up Button script end

    // Fade In & Fade Out Elements on Scroll script start
    $(".fadein").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_element) {
        $(this).removeClass("showme");
      }
    });
    // Fade In & Fade Out Elements on Scroll script end
  });

  // Scroll up Button script start
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // Scroll up Button script end

  // animation Script for display
  const animationScript = ["Front End Developer", "React.js Developer", "Next.js Developer"];

  // Typing animation script start
  new Typed(".typing", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing2", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // Typing animation script End

  // toggle menu/navbar script start
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // toggle menu/navbar script end

  // owl carousel script start
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // owl carousel script end
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year in the span with id "year"
document.getElementById('year').textContent = currentYear;
"use strict";
(function($) {
  /*----------------------------------------
	 Extracting pieces from range-slider
   ----------------------------------------*/

  $("#range-1").ionRangeSlider({
    min: 1,
    max: 1000,
    from: 550
  });

  // $("#pieces").html($(".irs-single").html());

  // js-irs-0, js-irs-1, js-irs-2

  $("#range-2").ionRangeSlider({
    min: 1,
    max: 1000,
    from: 550
  });

  $("#range-3").ionRangeSlider({
    min: 1,
    max: 1000,
    from: 550
  });
  // });

  $(".irs-single").on("mousedown", function(e) {
    console.log("test");

    var self = $(this);
    var input = $(this)
      .closest(".tabs__content")
      .find(".js-num");

    $(window).on("mousemove", function() {
      $(input).html($(self).html());
    });
  });

  $(".irs-single")
    .closest(".tabs__content")
    .find(".js-num")
    .html($(".irs-single").html());

  /*----------------------------------------
	 FOR SVG SPRITE
	 ----------------------------------------*/

  svg4everybody({});

  $(document).ready(function() {
    $(".js-nav-link").click(function() {
      // ловим клик по ссылке с классом js-nav-link
      var scroll_el = $(this).attr("href"); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      if ($(scroll_el).length != 0) {
        // проверим существование элемента чтобы избежать ошибки
        $("html, body").animate(
          {
            scrollTop: $(scroll_el).offset().top
          },
          1000
        ); // анимируем скроолинг к элементу scroll_el
      }
      $(".js-burger-parent")
        .find(".hamburger")
        .removeClass("is-active");
      $(".main-nav").removeClass("is-active");
      $(".overlay").removeClass("overlay--showed");
      return false; // выключаем стандартное действие
    });
  });

  $(document).ready(function() {
    $(".js-nav-link").click(function() {
      $(".main-nav")
        .find(".js-nav-link")
        .removeClass("active");
      $(this).addClass("active");
    });
  });

  if ($(window).width() < 1279) {
    $(".owl-carousel.section-block__row").owlCarousel({
      loop: true,
      margin: 10,

      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1,
          stagePadding: 190
        },
        1280: {
          items: 5
        }
      }
    });
  }

  $(".owl-carousel.section-block__slider").owlCarousel({
    loop: true,
    margin: 40,
    dots: false,
    nav: true,

    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      768: {
        items: 2
      },
      1280: {
        items: 3
      }
    }
  });

  $(".owl-carousel.section-block__text-slider").owlCarousel({
    loop: true,
    margin: 40,
    dots: false,

    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1280: {
        items: 2
      }
    }
  });

  var blockSlider = $(".owl-carousel.section-block__text-slider");

  $(".section-block__slider")
    .find(".owl-next")
    .click(function() {
      blockSlider.trigger("next.owl.carousel");
    });

  $(".section-block__slider")
    .find(".owl-prev")
    .click(function() {
      blockSlider.trigger("prev.owl.carousel");
    });

  $(".section-block__reviews-slider.owl-carousel").owlCarousel({
    loop: true,
    margin: 40,
    dots: true,

    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1280: {
        items: 1
      }
    }
  });

  $(document).ready(function() {
    $(".js-burger-parent").click(function(e) {
      e.preventDefault();
      $(this)
        .find(".hamburger")
        .toggleClass("is-active");
      $(".main-nav").toggleClass("is-active");
      $(".overlay").toggleClass("overlay--showed");
    });
  });

  $(".overlay").click(function() {
    $(".js-burger-parent")
      .find(".hamburger")
      .removeClass("is-active");
    $(".main-nav").removeClass("is-active");
    $(".overlay").removeClass("overlay--showed");
  });

  // Поворот стрелки по клику
  $(document).ready(function() {
    $("a.js-arrow-parent").click(function(e) {
      e.preventDefault();
      $(this)
        .find("i.js-arrow")
        .toggleClass("active");
      $(".contacts").toggleClass("active");
    });
  });

  $("#address_1").click(function() {
    $("#map_2").removeClass("active");
    $("#map_1").addClass("active");
  });

  $("#address_2").click(function() {
    $("#map_1").removeClass("active");
    $("#map_2").addClass("active");
  });
  $(document).ready(function() {
    $(".js-fb-btn").fancybox();
  });

  $(".js-fb-close").click(function(e) {
    $.fancybox.close();
  });
})(jQuery);








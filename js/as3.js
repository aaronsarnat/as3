// Scroll Animation
$(function() {
  jQuery.extend(jQuery.easing, {
    easeInOutExpo: function(e, f, a, h, g) {
      if (f == 0) {
        return a
      }
      if (f == g) {
        return a + h
      }
      if ((f /= g / 2) < 1) {
        return h / 2 * Math.pow(2, 10 * (f - 1)) + a
      }
      return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    }
  });

  $(".js-scroll").click(function(a) {
    a.preventDefault();
    var b = $($(this).attr("href")).offset().top;
        h = $(".header-main").height();
    $("html, body").animate({
      scrollTop: b - h
    }, {
      duration: 400,
      easing: "easeInOutExpo"
    });
  });

});

var imgLocation = "/assets/content/";

// Populate Content Images
$(function() {
  $("[data-image]").each(function() {
    var imgPath = "url(" + imgLocation + $(this).data("image") + ")";
    $(this).css("background-image", imgPath);
  });
});

// Sticky Menu
$(function() {

  var e = $(".thumbs--nav");

  e.before("<div id='js-sticky-placeholder'></div>");

  var i;
  var h = Math.round($(".header-main").height());
  var w;
  var p = $("#js-sticky-placeholder");

  updateMenu();

  function updateMenu() {
    if (p.length) {
      i = Math.round(p.offset().top);
      w = Math.round($(window).scrollTop());

      if( w > (i - h) ) {
        if (!e.hasClass("u-fixed")) {
          e.addClass("u-fixed").css('top', h + "px");
        }
      } else {
        if (e.hasClass("u-fixed")) {
          e.removeClass("u-fixed").css('top', 0 + "px");
        }
      }
    }
  }

  $(window).scroll(function() {
    updateMenu();
  }).resize(function() {
    updateMenu();
  });
});

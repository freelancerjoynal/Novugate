$(document).ready(function () {
  //=================================
  //Mobile menu toggle
  //=================================

  $("#menuOpen").click(function () {
    $("#mobileMenu").css("left", "0");
    $(this).hide();
    $("#menuClose").show();
  });
  $("#menuClose").click(function () {
    $(this).hide();
    $("#menuOpen").show();
    $("#mobileMenu").css("left", "101%");
  });

  //=================================
  // Toggle dropdown visibility
  //=================================
  $("#interest").click(function () {
    $("#interest-dropdown").toggle();
    $("#residence-dropdown").hide();
    $("#door-window-dropdown").hide();
  });
  $("#residence").click(function () {
    $("#residence-dropdown").toggle();
    $("#interest-dropdown").hide();
    $("#door-window-dropdown").hide();
  });
  $("#door-window").click(function () {
    $("#door-window-dropdown").toggle();
    $("#interest-dropdown").hide();
    $("#residence-dropdown").hide();
  });

  //=================================
  // Product slider
  //=================================

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  function updateOpacity() {
    const $activeItems = $(".product-slider .owl-stage .owl-item.active");
    $activeItems.css("opacity", "0.7"); // Set default opacity
    if ($activeItems.length > 0) {
      $activeItems.eq(0).css("opacity", "1"); // Set opacity of the first active item
    }
  }

  // Initialize Owl Carousel
  $(".product-slider").owlCarousel({
    items: 3, // Example settings, adjust to your needs
    loop: true,
    margin: 10,
    nav: false, // Disable next/prev buttons
    onTranslated: updateOpacity, // Update opacity on slide change
  });

  // Initial update
  updateOpacity();

  //Change owl pagination
  let nextBtn = '<i class="fa fa-arrow-right" aria-hidden="true"></i>';
  let prevBtn = '<i class="fa fa-arrow-left" aria-hidden="true"></i>';
  $(".owl-next").html(nextBtn);
  $(".owl-prev").html(prevBtn);
});

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
});

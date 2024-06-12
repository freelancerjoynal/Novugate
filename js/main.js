$(document).ready(function () {
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
});

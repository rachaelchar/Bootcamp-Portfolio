$(document).ready(function () {
  $(".parallax").parallax();

  var emsImg = $("#ems-img");

});

function hover(emsImg) {
  emsImg.setAttribute("src", "assets/images/EMS_register.png");
};

function unhover(emsImg) {
  emsImg.setAttribute("src", "assets/images/EMS_index.png");
};
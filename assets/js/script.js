$(document).ready(function () {
  $(".parallax").parallax();
});

var emsImg = $("#ems-img");
var socialniteImg = $("#socialnite-img");

// define hover functions
function hover(element, url) {
  element.setAttribute("src", url);
};

function unhover(element, url) {
  element.setAttribute("src", url);
};





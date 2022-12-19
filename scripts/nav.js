$("#donate-li").click(function () {
  if ($("#dropdown").hasClass("accessible-hidden")) {
    $("#dropdown").removeClass("accessible-hidden");
    $("#nav_arrow").addClass("arrow_rotated");
  } else {
    $("#dropdown").addClass("accessible-hidden");
    $("#nav_arrow").removeClass("arrow_rotated");
  }
});

$("#hamburger").click(function () {
  if ($("#nav_list").hasClass("accessible-hidden_narrow")) {
    $("#nav_list").removeClass("accessible-hidden_narrow");
  } else if (!$("#dropdown").hasClass("accessible-hidden_narrow")) {
    $("#dropdown").addClass("accessible-hidden");
    $("#nav_list").addClass("accessible-hidden_narrow");
    $("#nav_arrow").removeClass("arrow_rotated");
  } else {
    $("#nav_list").addClass("accessible-hidden_narrow");
  }
});

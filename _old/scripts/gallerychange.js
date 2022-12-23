$("#club").click(function () {
    $("#pcpiccarousel").addClass("accessible-hidden");
    $("#nicpiccarousel").addClass("accessible-hidden");
    $("#codeafpiccarousel").addClass("accessible-hidden");
    $("#kenyacarousel").addClass("accessible-hidden");
    $("#clubcarousel").removeClass("accessible-hidden");

    $("#peru").removeClass("galpress");
    $("#nicaragua").removeClass("galpress");
    $("#afrique").removeClass("galpress");
    $("#kenya").removeClass("galpress");
    $("#club").addClass("galpress")

});

$("#kenya").click(function () {
    $("#pcpiccarousel").addClass("accessible-hidden");
    $("#nicpiccarousel").addClass("accessible-hidden");
    $("#codeafpiccarousel").addClass("accessible-hidden");
    $("#kenyacarousel").removeClass("accessible-hidden");
    $("#clubcarousel").addClass("accessible-hidden");

    $("#peru").removeClass("galpress");
    $("#nicaragua").removeClass("galpress");
    $("#afrique").removeClass("galpress");
    $("#kenya").addClass("galpress");
    $("#club").removeClass("galpress")
});

$("#peru").click(function () {
    $("#pcpiccarousel").removeClass("accessible-hidden");
    $("#nicpiccarousel").addClass("accessible-hidden");
    $("#codeafpiccarousel").addClass("accessible-hidden");
    $("#kenyacarousel").addClass("accessible-hidden");
    $("#clubcarousel").addClass("accessible-hidden");

    $("#peru").addClass("galpress");
    $("#nicaragua").removeClass("galpress");
    $("#afrique").removeClass("galpress");
    $("#kenya").removeClass("galpress");
    $("#club").removeClass("galpress")

});

$("#afrique").click(function () {
    $("#pcpiccarousel").addClass("accessible-hidden");
    $("#nicpiccarousel").addClass("accessible-hidden");
    $("#codeafpiccarousel").removeClass("accessible-hidden");
    $("#kenyacarousel").addClass("accessible-hidden");
    $("#clubcarousel").addClass("accessible-hidden");

    $("#peru").removeClass("galpress");
    $("#nicaragua").removeClass("galpress");
    $("#afrique").addClass("galpress");
    $("#kenya").removeClass("galpress");
    $("#club").removeClass("galpress")

});

$("#nicaragua").click(function () {
    $("#pcpiccarousel").addClass("accessible-hidden");
    $("#nicpiccarousel").removeClass("accessible-hidden");
    $("#codeafpiccarousel").addClass("accessible-hidden");
    $("#kenyacarousel").addClass("accessible-hidden");
    $("#clubcarousel").addClass("accessible-hidden");

    $("#peru").removeClass("galpress");
    $("#nicaragua").addClass("galpress");
    $("#afrique").removeClass("galpress");
    $("#kenya").removeClass("galpress");
    $("#club").removeClass("galpress")

});

$(document).ready(function () {
        setTimeout(() => {
        $(".activity").show();
        setTimeout(() => {

$("#user1").show();
setTimeout(() => {

$("#user2").show();
setTimeout(() => {

$("#user3").show();
setTimeout(() => {

$("#user4").show();
setTimeout(() => {

$("#user5").show();
setTimeout(() => {

$("#user6").show();
setTimeout(() => {

$("#user7").show();
setTimeout(() => {


$(".modal").show();


  }, 1000);
  }, 1000);
  }, 900);
  }, 700);
  }, 500);
  }, 400);
  }, 350);
  }, 200);
  }, 100);

});
$("#join").click(function () {
    $("#intro").hide();
    $("#share").show();
});
$("#invite").click(function () {
    window.location.href = share;
    if (width == 0) {
        width += 40;
    } else if (width == 60) {
        width += 25;
    } else if (width == 85) {
        width += 15;
    } else if (width == 100) {
        width += 14;
    } else {
        $("#share").hide();
        $("#offer").show();
    }
    setTimeout(function () {
        $("#fill").css("width", width + "%");
        $("#percentage").text(width + "%");
    }, 2000);
});
$("#get").click(function () {
    window.open(cpa, "_blank");
});
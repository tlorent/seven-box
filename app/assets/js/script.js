// Hide content before pressing the 'Find out' button
$("#hiddenImage").hide();
$("#theVideo2").hide();
$(".backButton").hide();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var randomNum = getRandomInt(1, 11);
var imageName = randomNum + ".jpg";

$(".btn").on('click', function(){
  $("#theVideo").hide();
  $("#h1").hide();
  $("#hiddenImage").show();
  $(".btn").hide();
  $("#theVideo2").attr("autoplay", true);
  $(".backButton").show();
  $("img").attr("src", "./assets/img/" + imageName);
});

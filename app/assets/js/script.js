$(document).ready(function(){
  // Hide content before pressing the 'Find out' button
  $("img").hide();
  $("#theVideo2").hide();
  $(".backButton").hide();

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  var randomNum = getRandomInt(0, 10);
  var imageName = randomNum + ".jpg";

  // Set the array with CSS animations
  var animations = ["bounceInLeft", "bounceInRight", "fadeInLeft", "fadeInRight", "rotateInUpRight", "rotateInUpLeft", "slideInUp", "slideInDown", "rollIn", "flipInX"];

  var animation = animations[randomNum];

  function showContent() {
    $("#theVideo2").attr("autoplay", true);
    $(".backButton").show();
    $("img").attr("src", "./assets/img/" + imageName);
    $("img").addClass("animated " + animation);
  }

  $("#theButton, .goButton").on('click', function(){
    $("#theVideo").trigger('pause');
    $("#theVideo").hide();
    $("#h1").hide();
    $("img").show();
    $(".goButton").hide();

    setTimeout(showContent, 2000);
  });

  $(".backButton").click(function(){
    $(location).attr('href', './index.html');
    // location.replace("./index.html");
  });

  // function showButton() {
  //   $(".goButton").show();
  // }
  //
  // setTimeout(showButton, 3000);
})

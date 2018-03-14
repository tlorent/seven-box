$(document).ready(function(){
  // Hide content before pressing the 'Find out' button
  $("#hiddenImage").hide();
  $("#theVideo2").hide();
  $(".btn").hide();

  // function getRandomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min) + min);
  // }

  // var randomNum = getRandomInt(1, 11);
  // var imageName = randomNum + ".jpg";

  function showImage() {
    $("#theVideo2").attr("autoplay", true);
    $(".backButton").show();
    // $("img").attr("src", "./assets/img/" + imageName);
    $("img").attr("src", "./assets/img/1.jpg");
  }

  $(".btn").on('click', function(){
    $("#theVideo").hide();
    $("#h1").hide();
    $("#hiddenImage").show();
    $(".btn").hide();

    setTimeout(showImage, 2000);
  });

  function showButton() {
    $(".goButton").show();
  }

  setTimeout(showButton, 3000);
})

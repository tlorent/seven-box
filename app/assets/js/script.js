// Hide content before pressing the 'Find out' button
$("#hiddenImage").hide();
$("#theVideo2").hide();
$(".backButton").hide();

$(".btn").on('click', function(){
  $("#theVideo").hide();
  $("#h1").hide();
  $("#hiddenImage").show();
  $(".btn").hide();
  $("#theVideo2").attr("autoplay", true);
  $(".backButton").show();
});

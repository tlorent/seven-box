$(document).ready(function() {
	// Create jQuery variables.
	$img = $('img');
	$theVideo = $('#theVideo');
	$theVideo2 = $('#theVideo2');
	$backButton = $('.backButton');

	// Hide content before pressing the 'Find out' button.
	$img.hide();
	$theVideo2.hide();
	$backButton.hide();

	/* -------------------------- */
	/* Beginning randon number function */

	// Get a random number between a range.
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	var randomNum = getRandomInt(0, 10);

	// Append the random number to .jpg to get a random image.
	var imageName = randomNum + '.jpg';

	/* End randon number function */
	/* -------------------------- */

	// Set an array with CSS animations to choose from.
	var animations = [
		'bounceInLeft',
		'bounceInRight',
		'fadeInLeft',
		'fadeInRight',
		'rotateInUpRight',
		'rotateInUpLeft',
		'slideInUp',
		'slideInDown',
		'rollIn',
		'flipInX'
	];

	// Set a variable animation to a random index of the animations array.
	var animation = animations[randomNum];

	// Function responsible for showing the content after the user has clicked
	// on the 'Find out' button.
	function showContent() {
		$theVideo2.attr('autoplay', true);
		$img.show();
		// Set the src of the img element to the path provided with the imageName
		// variable which contains a random number and .jpg.
		$img.attr('src', './assets/img/' + imageName);
		// Add a random animation class to the img element.
		$img.addClass('animated ' + animation);
		$backButton.show();
	}

	// Hide the content that was first shown when the user clicks on the
	// 'Find out' button.
	$('#theButton, .goButton').on('click', function() {
		// Hide initial HTML elements the user sees first on the homepage.
		$('.goButton').hide();
		$('#h1').hide();
		$theVideo.trigger('pause');
		$theVideo.hide();

		// Run the showContent function after 2 seconds.
		setTimeout(showContent, 2000);
	});

	// Set the href attribute of the current location to index.html so that
	// the user goes back to the homepage when s/he clicks the 'Try again!' button.
	$backButton.click(function() {
		$(location).attr('href', './index.html');
		// location.replace("./index.html");
	});
});

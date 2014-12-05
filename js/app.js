$(document).ready(function() {
	var bh = $('#the-body').outerHeight(true);
	setTimeout(function() {
		$('#the-body').scrollTop(bh);
	}, 100);
});

$(document).ready(function(){
	var scrollIntervalSet = false;
	var isScrolling = false;
	var scrollStep = 0;
	var scrollInterval;

	$(window).scroll(function(){
		// only happens the first time the scroll event is fired;
		if (scrollIntervalSet === false) {
			scrollInterval = setInterval(function(){ doScrollStep(); }, 125);
			scrollIntervalSet = true;
			scrollStart();
		}
		isScrolling = true;
	});
	function doScrollStep () {
		console.log(scrollStep);
		console.log(isScrolling);
		// step 0 = setting isScrolling to false;
		// step 1 = check to see if it got turned on again (isScrolling);
		if (scrollStep === 0) {
			isScrolling = false;
			scrollStep = 1;
		} else if (scrollStep === 1) {
			scrollStep = 0;
			// if isScrolling did not get changed back to true then we know they stopped scrolling;
			if (isScrolling === false) {
				scrollStop();
			}
		}
	}
	function scrollStart () {
		// .show() gif
		$('.still').hide();
		$('.gif').show();
    $('#output').html("scrollStart");
	}
	function scrollStop () {
		// .hide() gif
		$('.gif').hide();
		$('.still').show();
		$('#output').html("scrollStop");
		// clear interval
		clearInterval(scrollInterval);
		// set back to false so that we can reint if they start scrolling again.
		scrollIntervalSet = false;
	}

  
});
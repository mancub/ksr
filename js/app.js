$(document).ready(function() {
	var bh = $('#the-body').outerHeight(true);
	setTimeout(function() {
		$('#the-body').scrollTop(bh);
	}, 100);
});
$(document).ready(function() {

	$("#filter_btn").click( function(){
		checking();
	});

	function checking() {
		console.log('Hi');
		if ($("#check1").is(':checked')) {
			$("#card1").show();
		}
		else {
			$("#card1").hide();
		}

		if ($("#check2").is(':checked')) {
			$("#card2").show();
		}
		else {
			$("#card2").hide();
		}

		if ($("#check3").is(':checked')) {
			$("#card3").show();
		}
		else {
			$("#card3").hide();
		}
	}
	
});
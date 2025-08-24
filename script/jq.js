$(function() {

	var allQuotes = $(".ref");
	var currentQuote = 0;

	function changeQuote() {

		$(allQuotes[currentQuote]).fadeOut(800, function() {


		if (currentQuote == allQuotes.length - 1) {
				currentQuote = 0;
		} else {
			currentQuote ++;
		}

		$(allQuotes[currentQuote]).fadeIn(800);


		}); //end of changeQuote()
	}
	var quoteTimer = setInterval(changeQuote, 6500);	

});//end of doc ready
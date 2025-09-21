$(function() {
    var allQuotes = $(".ref");
    var currentQuote = 0;

    allQuotes.hide().eq(0).show(); // Hide all, show first

    function changeQuote() {
        $(allQuotes[currentQuote]).fadeOut(800, function() {
            currentQuote = (currentQuote == allQuotes.length - 1) ? 0 : currentQuote + 1;
            $(allQuotes[currentQuote]).fadeIn(800);
        });
    }
    var quoteTimer = setInterval(changeQuote, 6500);
});

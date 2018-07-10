jQuery(function($){

	// start a new game on page load
	var game = new Game();

	$(".picks").on("click", "img", function() {

		// get choices
		var userChoice = $(this).attr("id");
		var computerChoice = game.getComputerChoice();

		// log previous scores
		var prevWins = game.wins;
		var prevLosses = game.losses;
		var prevTies = game.ties;

		// calculate winner
		var message = game.calculateWinner(userChoice, computerChoice);

		// print user choice
		var copiedElement = $(".picks").find("#" + userChoice).clone().addClass("picked");
		$("#userChoice").find(".picked").remove();
		$("#userChoice").append(copiedElement);
		$("#userChoice .picked").hide().fadeIn(400, function(){
			if (prevLosses != game.losses || prevTies != game.ties) {
				$(this).addClass("loser");
			}
		});

		// print computer choice
		var copiedElement = $(".picks").find("#" + computerChoice).clone().addClass("picked");
		$("#computerChoice").find(".picked").remove();
		$("#computerChoice").append(copiedElement);
		$("#computerChoice .picked").hide().fadeIn(400, function(){
			if (prevWins != game.wins || prevTies != game.ties) {
				$(this).addClass("loser");
			}
		});

		// print message
		$(".message").text(message).hide().fadeIn();

		// update score
		$("#wins").text(game.wins);
		$("#losses").text(game.losses);
		$("#ties").text(game.ties);
		$(".score p").hide().fadeIn();
		
	});
});
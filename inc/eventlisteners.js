jQuery(function($){
	$(".selection").on('click', 'img', function() {
		$(this).siblings().removeClass("selected");
		if ($(this).hasClass("selected") == false) {
			// userChoice Element
			$(this).toggleClass("selected");
			var userChoice = $(this).attr('id');
			var yourChoiceElement = $(".results").find("#yourChoice");
			yourChoiceElement.removeClass(".question-mark").stop(true, true).empty();
			var copyElement = $(this).clone().removeClass("selected");
			yourChoiceElement.append(copyElement).hide().fadeIn();

			// computerChoice Element
			var computerChoice = getComputerChoice();
			var computerChoiceElement = $(".results").find("#computerChoice");
			computerChoiceElement.removeClass(".question-mark").stop(true, true).empty();
			var copyElement = $(".selection").find("#" + computerChoice).clone().removeClass("selected");
			computerChoiceElement.append(copyElement).hide().fadeIn();

			// print result
			determineWinner(userChoice, computerChoice);
			var message = $(".results").find(".shout").text(msg);
			message.hide().fadeIn();
			if (winOrLose == 1) {
				message.append("<br>You Win!");
				$(".results").find("#computerChoice > img").effect('shake');
			} else if (winOrLose == 0) {
				message.append("<br>You Lose!");
				$(".results").find("#yourChoice > img").effect('shake');
			}
			
			// update score
			$(".container").find("#scoreboard").html("<strong>Your score</strong><br>" + wins + " wins<br>" + losses + " losses<br>" + ties + " ties");

		}
	});
});
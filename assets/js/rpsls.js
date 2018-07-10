function Game() {
	this.wins = 0;
	this.losses = 0;
	this.ties = 0;
}

Game.prototype.getComputerChoice = function() {
	var x = Math.floor(Math.random() * 5);	// 0 t/m 4
	switch (x) {
		case 0:
			return "Rock";
			break;
		case 1:
			return "Paper";
			break;
		case 2:
			return "Scissors";
			break;
		case 3:
			return "Lizard";
			break;
		case 4:
			return "Spock";
			break;
		default:
			console.log("Something went wrong. Value of x ",x);
	}
}

Game.prototype.calculateWinner = function (userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		this.ties++;
		this.lastScore = 2;
		return "It's a tie";
	}
	if (userChoice === "Rock") {
		if (computerChoice === "Paper") {
			this.losses++;
			return "Paper covers Rock. You lose!";
		} else if (computerChoice === "Scissors") {
			this.wins++;
			return "Rock breaks Scissors. You win!";
		} else if (computerChoice === "Lizard") {
			this.wins++;
			return "Rock crushes Lizard. You win!";
		} else if (computerChoice === "Spock") {
			this.losses++;
			return "Spock vaporizes Rock. You lose!";
		}
	} else if (userChoice === "Paper") {
		if (computerChoice === "Rock") {
			this.wins++;
			return "Paper covers Rock. You win!";
		} else if (computerChoice === "Scissors") {
			this.losses++;
			return "Scissors cuts Paper. You lose!";
		} else if (computerChoice === "Lizard") {
			this.losses++;
			return "Lizard eats Paper. You lose!";
		} else if (computerChoice === "Spock") {
			this.wins++;
			return "Paper disproves Spock. You win!";
		}
	} else if (userChoice === "Scissors") {
		if (computerChoice === "Rock") {
			this.losses++;
			return "Rock breaks Scissors. You lose!";
		} else if (computerChoice === "Paper") {
			this.wins++;
			return "Scissors cuts Paper. You win!";
		} else if (computerChoice === "Lizard") {
			this.wins++;
			return "Scissors decaptitates Lizard. You win!";
		} else if (computerChoice === "Spock") {
			this.losses++;
			return "Spock smashes Scissors. You lose!";
		}
	} else if (userChoice === "Lizard") {
		if (computerChoice === "Rock") {
			this.losses++;
			return "Rock crushes Lizard. You lose!";
		} else if (computerChoice === "Paper") {
			this.wins++;
			return "Lizard eats Paper. You win!";
		} else if (computerChoice === "Scissors") {
			this.losses++;
			return "Scissors decapitates Lizard. You lose!";
		} else if (computerChoice === "Spock") {
			this.wins++;
			return "Lizard poisons Spock. You win!";
		}
	} else if (userChoice === "Spock") {
		if (computerChoice === "Rock") {
			this.wins++;
			return "Spock vaporizes Rock. You win!";
		} else if (computerChoice === "Paper") {
			this.losses++;
			return "Paper disproves Spock. You lose!";
		} else if (computerChoice === "Scissors") {
			this.wins++;
			return "Spock smashes Scissors. You win!";
		} else if (computerChoice === "Lizard") {
			this.losses++;
			return "Lizard poisons Spock. You lose!";
		}
	}
}

function testAll(multiplier) {
	var testGame = new Game();
	choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
	var c = 0;
	if (!multiplier) {
		multiplier = 1;
	}

	for (let i = 0; i < multiplier; i++) {
		choices.forEach(function(userChoice) {
			choices.forEach(function(computerChoice) {
				c++
				testGame.calculateWinner(userChoice, computerChoice);
			});
		});
	}

	// print output
	console.log("Test ran times: ", c);
	console.log("W: ", testGame.wins, " L: ", testGame.losses, " T: ", testGame.ties);
	if ((testGame.ties * 2 != testGame.wins) || testGame.wins != testGame.losses) {
		console.log("***Error wrong output***");
	} else {
		console.log("Output OK");
	}
}

function testOne(userChoice, multiplier) {
	var testGame = new Game();
	choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
	var c = 0;
	if (!multiplier) {
		multiplier = 1;
	}

	for (let i = 0; i < multiplier; i++) {
		choices.forEach(function(computerChoice) {
			c++
			testGame.calculateWinner(userChoice, computerChoice);
		});
	}

	// print output
	console.log("Test ran times: ", c);
	console.log("W: ", testGame.wins, " L: ", testGame.losses, " T: ", testGame.ties);
	if ((testGame.ties * 2 != testGame.wins) || testGame.wins != testGame.losses) {
		console.log("***Error wrong output***");
	} else {
		console.log("Output OK");
	}
}


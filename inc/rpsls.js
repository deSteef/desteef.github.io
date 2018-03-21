var msg;
var winOrLose;
var wins = 0;
var losses = 0;
var ties = 0;

function getComputerChoice() {
	computerChoice = Math.random();

	if (computerChoice <= 0.2) {
		computerChoice = "rock";
	} else if (computerChoice > 0.2 && computerChoice <= 0.4) {
		computerChoice = "paper";
	} else if (computerChoice > 0.4 && computerChoice <= 0.6) {
		computerChoice = "scissors";
	} else if (computerChoice > 0.6 && computerChoice <= 0.8) {
		computerChoice = "lizard";
	} else if (computerChoice > 0.8) {
		computerChoice = "spock";
	}

	return computerChoice;
}

function determineWinner (userChoice, computerChoice) {

	if (typeof userChoice != 'string' || typeof computerChoice != 'string') {
		msg = "Well this is embarassing. An error ocurred. Check the console for more info.";
		console.log('userchoice and computerchoice need to be strings');
		console.log('userchoice is a ' + typeof userChoice);
		console.log('computerchoice is a ' + typeof computerChoice);
	} else if (userChoice.length < 1 || computerChoice.length < 1) {
		msg = "Well this is embarassing. An error ocurred. Check the console for more info.";
		console.log('userchoice or computerchoice is too short for this function');
		console.log('userchoice has a length of ' + userChoice.length + ' characters');
		console.log('computerchoice has a length of ' + computerChoice.length + ' characters');
	} else if (userChoice == computerChoice) {
		msg = "It's a tie. There are no winners here.";
		winOrLose = 2;
	} else if (userChoice == "rock") {
		if (computerChoice == "paper") {
			msg = "Paper covers Rock";
			winOrLose = 0;
		} else if (computerChoice == "scissors") {
			msg = "Rock crushes Scissors";
			winOrLose = 1;
		} else if (computerChoice == "lizard") {
			msg = "Rock crushes Lizard";
			winOrLose = 1;
		} else if (computerChoice == "spock") {
			msg = "Spock vaporizes Rock";
			winOrLose = 0;
		} else {
			msg = "Well this is embarassing. An error ocurred. Check the console for more info.";
			console.log("Can't determine winner between userchoice: " + userChoice + "and computers choice: " + computerChoice);
		}
	} else if (userChoice == "paper") {
		if (computerChoice == "rock") {
			msg = "Paper covers Rock";
			winOrLose = 1;
		} else if (computerChoice == "scissors") {
			msg = "Scissors cuts Paper";
			winOrLose = 0;
		} else if (computerChoice == "lizard") {
			msg = "Lizard eats Paper";
			winOrLose = 0;
		} else if (computerChoice == "spock") {
			msg = "Paper disproves Spock";
			winOrLose = 1;
		} else {
			msg = "Well this is embarassing. An error ocurred. Check the console for more info.";
			console.log("Can't determine winner between userchoice: " + userChoice + "and computers choice: " + computerChoice);
		}
	} else if (userChoice == "scissors") {
		if (computerChoice == "paper") {
			msg = "Scissors cuts Paper";
			winOrLose = 1;
		} else if (computerChoice == "rock") {
			msg = "Rock crushes Scissors";
			winOrLose = 0;
		} else if (computerChoice == "lizard") {
			msg = "Scissors decapitates Lizard";
			winOrLose = 1;
		} else if (computerChoice == "spock") {
			msg = "Spock smashes Scissors";
			winOrLose = 0;
		} else {
			msg = "Well this is embarassing. An error ocurred. Check the console for more info.";
			console.log("Can't determine winner between userchoice: " + userChoice + "and computers choice: " + computerChoice);
		}
	} else if (userChoice == "lizard") {
		if (computerChoice == "paper") {
			msg = "Lizard eats Paper";
			winOrLose = 1;
		} else if (computerChoice == "rock") {
			msg = "Rock crushes Lizard";
			winOrLose = 0;
		} else if (computerChoice == "scissors") {
			msg = "Scissors decapitates Lizard";
			winOrLose = 0;
		} else if (computerChoice == "spock") {
			msg = "Lizard poisons Spock";
			winOrLose = 1;
		} else {
			msg = "Well this is embarassing. An error ocurred. Check the console for more info.";
			console.log("Can't determine winner between userchoice: " + userChoice + "and computers choice: " + computerChoice);
		}
	} else if (userChoice == "spock") {
		if (computerChoice == "paper") {
			msg = "Paper disproves Spock";
			winOrLose = 0;
		} else if (computerChoice == "rock") {
			msg = "Spock vaporizes Rock";
			winOrLose = 1;
		} else if (computerChoice == "scissors") {
			msg = "Spock smashes scissors";
			winOrLose = 1;
		} else if (computerChoice == "lizard") {
			msg = "Lizard poisons Spock";
			winOrLose = 0;
		} else {
			msg = "Well this is embarassing. An error ocurred. Check the console for more info.";
			console.log("Can't determine winner between userchoice: " + userChoice + "and computers choice: " + computerChoice);
		}
	}
	if (winOrLose == 1) {
		wins++;
	} else if (winOrLose == 0) {
		losses++;
	} else {
		ties++;
	}
}

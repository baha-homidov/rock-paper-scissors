function computerPlay() {
    const moveArray = ["Rock", "Paper", "Scissors"];
    let randInt = Math.floor(Math.random() * 3); // random number between 0 - 2
    return moveArray[randInt];
}

function playRound(computerSelection, userSelection) {
    //turn strings to lowercase for better comparison
    computerSelection = computerSelection.toLowerCase();
    userSelection = userSelection.toLowerCase();

    if (userSelection == "rock") {
        if (computerSelection == "rock") { return "Tie! You and the computer both choose 'Rock'"; }
        else if (computerSelection == "paper") { return "You lose! Paper beats rock"; }
        else if (computerSelection == "scissors") { return "You win! Rock beats scissors"; }
    }
    else if (userSelection == "paper") {
        if (computerSelection == "rock") { return "You win! Paper beats rock"; }
        else if (computerSelection == "paper") { return "Tie! You and the computer both choose 'Paper'"; }
        else if (computerSelection == "scissors") { return "You lose! Scissors beat Paper"; }
    }
    else if (userSelection == "scissors") {
        if (computerSelection == "rock") { return "You lose! Rock beats scissors"; }
        else if (computerSelection == "paper") { return "You win! Scissors beat paper"; }
        else if (computerSelection == "scissors") { return "Tie! You and the computer both choose 'Scissors'"; }
    }
}
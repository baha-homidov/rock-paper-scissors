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

function textToEmoji(text) {
    text = text.toLowerCase();
    if (text == 'rock') return '✊';
    else if (text == 'paper') return '🖐'
    else return '✌️';

}



function changeGameState(userSelection) {

    let computerSelection = computerPlay();

    userMoveIcon.textContent = textToEmoji(userSelection);
    computerMoveIcon.textContent = textToEmoji(computerSelection);

    resultText.textContent = playRound(computerSelection, userSelection);
    if (resultText.textContent.includes("You win")) {
        userScore++; resultText.style.background = "#21D19F";
    }
    else if (resultText.textContent.includes("You lose")) {
        computerScore++;
        resultText.style.background = "#E84855";
    }
    else { resultText.style.background = "#0075C4"; }

    if (userScore == 5) {
        scoreCount.textContent = `${userScore} : ${computerScore}`;
        userScore = computerScore = 0;
        resultText.textContent = "YOU WON THE GAME";
        userMoveIcon.textContent = computerMoveIcon.textContent = '🎉'
        return;
    }

    if (computerScore == 5) {
        scoreCount.textContent = `${userScore} : ${computerScore}`;
        userScore = computerScore = 0;
        resultText.textContent = "YOU LOST THE GAME";
        userMoveIcon.textContent = computerMoveIcon.textContent = '❌';
        return;
    }


    scoreCount.textContent = `${userScore} : ${computerScore}`;
    return;
}


const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultText = document.querySelector('.result .text');
const scoreCount = document.querySelector('.score-count');
const userMoveIcon = document.querySelector('.result .user-selection')
const computerMoveIcon = document.querySelector('.result .computer-selection')
let computerScore = 0;
let userScore = 0;



rockBtn.addEventListener('click', () => changeGameState('rock'));
paperBtn.addEventListener('click', () => changeGameState('paper'));
scissorsBtn.addEventListener('click', () => changeGameState('scissors'));



























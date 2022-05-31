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


function changeGameState(userSelection) {

    resultText.textContent = playRound(userSelection, computerPlay());
    if (resultText.textContent.includes("You win")) { userScore++; }
    else if (resultText.textContent.includes("You lose")) { computerScore++; }

    scoresheet.textContent = `User score: ${userScore}
    Computer score: ${computerScore}`;
}


const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultText = document.querySelector('.result');
const scoresheet = document.querySelector('.scoresheet');
let computerScore = 0;
let userScore = 0;



rockBtn.addEventListener('click',() => changeGameState('rock'));
paperBtn.addEventListener('click',() => changeGameState('paper'));   
scissorsBtn.addEventListener('click', () => changeGameState('scissors'));

    







// function game() {

//     let userScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         console.log(`Round ${i + 1}\n\nUser Score: ${userScore}\nComputer Score: ${computerScore}\n\n`);
//         let roundResult;

        



//         // console.log(`Computer move: ${computerMove}`);
//         // console.log(`Your move: ${userMove}`);


//         console.log(roundResult);
//         if (roundResult.includes("You win")) { userScore++; }
//         else if (roundResult.includes("You lose")) { computerScore++; }
//     }

//     if (userScore > computerScore) {
//         console.log("You win the game!");
//     }
//     else if (computerScore > userScore) {
//         console.log("You lose the game!");
//     }
//     else { console.log("Tie! No one wins the game.") }



// }

















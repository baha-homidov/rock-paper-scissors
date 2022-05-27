function computerPlay() {
    const moveArray = ["Rock", "Paper", "Scissors"];
    let randInt = Math.floor(Math.random() * 3); // random number between 0 - 2
    return moveArray[randInt];
}


//Function that gets computer choice
let computerChoice =  function() {
    let randomNum = Math.floor(Math.random() * 9) + 1;
    if (randomNum <= 3) {
        return "rock";
    } else if (randomNum > 3 && randomNum <= 6) {
        return "paper";
    } else {
        return "scissors"
    }
}

//Set player choice variable


// Function that asks player for choice
let getPlayerChoice = function() {
    do {
        playerChoice = prompt("Please choose rock, papaer, or scissors: ");
        playerChoice = playerChoice.toLowerCase();
    }
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors");
    return playerChoice;
}


//Functions to determine win or lose
let rock = function(computerChoice) {
    if (computerChoice === "paper") {
        return false;
    } else {
            return true;
        }
}

let paper = function(computerChoice) {
    if (computerChoice === "scissors") {
        return false;
    } else {
            return true;
        }
}

let scissors = function(computerChoice) {
    if (computerChoice === "rock") {
        return false;
    } else {
            return true;
        }
}


//Function to play a round and return win or lose
let round = function(playerChoice, computerChoice) {
    let winOrLose;

    console.log(playerChoice);
    console.log(computerChoice);

    if (playerChoice === computerChoice) {
        alert("It's a tie!");
        winOrLose = null;
    } else if (playerChoice === "rock") {
        winOrLose = rock(computerChoice);
        if (winOrLose === true) {
            alert("You Win! Rock beats Scissors!");
            winOrLose = true;
        } else {
            alert("You lose! Paper Beats Rock!");
            winOrLose= false;
        }
    } else if (playerChoice === "paper") {
        winOrLose = paper(computerChoice);
        if (winOrLose === true) {
            alert("You Win! Paper beats Rock!");
            winOrLose = true;
        } else {
            alert("You lose! Scissors beats Paper!");
            winOrLose = false;
        }
    } else if (playerChoice === "scissors") {
        winOrLose = scissors(computerChoice);
        if (winOrLose === true) {
            alert("You Win! Scissors beats Paper!");
            winOrLose = true;
        } else {
            alert("You lose! Rock beats Scissors");
            winOrLose = false;
        }
    }

    return winOrLose;
}


// //function to play best of five game
let games = 1;
let score = 0;

let bestOfFive = function() {
    do {
        let outcome = round(getPlayerChoice(),computerChoice());
        console.log(outcome);
        if (outcome === null) {
        } else if (outcome === true) {
            games++;
            score++;
        } else if (outcome === false) {
            games++;
        }
    } while (games <= 5);

    return score;
}

let gameScore = bestOfFive();

alert(`You won ${gameScore} games out of 5!`);
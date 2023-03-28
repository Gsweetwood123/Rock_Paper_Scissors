//Function that gets computer choice
let computerChoice =  function() {
    let randomNum = Math.floor(Math.random() * 9) + 1;
    if (randomNum <= 3) {
        return "Rock";
    } else if (randomNum > 3 && randomNum <= 6) {
        return "Paper";
    } else {
        return "Scissors"
    }
}
computerChoice = computerChoice().toUpperCase();

//Prompt to ask playerSelection and put it in the variable, loop to make sure its a valid answer
let playerChoice = "";
do {playerChoice = prompt("Please choose rock, papaer, or scissors: ");
playerChoice = playerChoice.toUpperCase();
console.log(playerChoice);
}
while (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS");

// Function that actually plays a round of RPS based on selctions and prompts who wins
let playRound = function(computer, player) {

}


//Loop that goes 5 rounds and displays score at end
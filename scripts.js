//Set variables for score
let playerScore = 0;
let computerScore = 0;

//button interactivity
const btns = document.querySelectorAll(`button`);

btns.forEach(btn => btn.addEventListener(`click`, () => {
    round(btn.id, computerChoice());
}));

const gameButtons = document.querySelector(`#playerChoice`);


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
    let gameResult = ``;

    if ((playerScore === 5) || (computerScore === 5)) {
        if (playerScore === 5) {
            gameResult = `You won!`;
        } else {
            gameResult = `You Lost!`;
        };

        btns.forEach(btn => gameButtons.removeChild(btn));

        const playAnotherRound = document.querySelector(`#replay`);
    
        const askForReplay = document.createElement(`p`);
        askForReplay.textContent = `${gameResult} Would you like to play again?`;
        playAnotherRound.appendChild(askForReplay);
    
        const playAgain = document.createElement(`button`);
        playAgain.textContent = `Play Again`;
        playAnotherRound.appendChild(playAgain);
        
        playAgain.addEventListener(`click`, () => {
            playerScore = 0;
            computerScore = 0;
            document.querySelector(`#playerScore`).textContent = playerScore;
            document.querySelector(`#computerScore`).textContent = computerScore;
            playAnotherRound.removeChild(askForReplay);
            playAnotherRound.removeChild(playAgain);
            btns.forEach(btn => gameButtons.appendChild(btn));
            });

    } else if (playerChoice === computerChoice) {
        document.querySelector(`#results`).textContent = ("It's a tie!");
        winOrLose = null;

    } else if (playerChoice === "rock") {
        winOrLose = rock(computerChoice);
        if (winOrLose === true) {
            document.querySelector(`#results`).textContent = ("You Win! Rock beats Scissors!");
            playerScore++
            document.querySelector(`#playerScore`).textContent = playerScore;
        } else {
            document.querySelector(`#results`).textContent = ("You lose! Paper Beats Rock!");
            computerScore++
            document.querySelector(`#computerScore`).textContent = computerScore;
        }

    } else if (playerChoice === "paper") {
        winOrLose = paper(computerChoice);
        if (winOrLose === true) {
            document.querySelector(`#results`).textContent = ("You Win! Paper beats Rock!");
            playerScore++
            document.querySelector(`#playerScore`).textContent = playerScore;
        } else {
            document.querySelector(`#results`).textContent = ("You lose! Scissors beats Paper!");
            computerScore++
            document.querySelector(`#computerScore`).textContent = computerScore;
        }

    } else if (playerChoice === "scissors") {
        winOrLose = scissors(computerChoice);
        if (winOrLose === true) {
            document.querySelector(`#results`).textContent = ("You Win! Scissors beats Paper!");
            playerScore++
            document.querySelector(`#playerScore`).textContent = playerScore;
        } else {
            document.querySelector(`#results`).textContent = ("You lose! Rock beats Scissors");
            computerScore++
            document.querySelector(`#computerScore`).textContent = computerScore;
        }
    }
    


}
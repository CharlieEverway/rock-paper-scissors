function getRandomInt(max) {
    return Math.floor(Math.random() * max);
} /* Get random number function */

function getComputerChoice(computerChoice) {
    let randomNumber = getRandomInt(3);

    if (randomNumber == 0) {
        computerChoice = "rock";
        return computerChoice;
    }
    if (randomNumber == 1) {
        computerChoice = "paper";
        return computerChoice;
    }
    if (randomNumber == 2) {
        computerChoice = "scissors";
        return computerChoice;
    }

    /* Get Computer Choice between 1 2 or 3 and
  assign that value to a string and return*/
}

function getHumanChoice(humanChoice) {
    let humanInput = prompt();
    humanChoice = humanInput.toLowerCase();
    return humanChoice;
}
/*
 * When called, this inputs the human choice.
 */

let humanScore = 0;
let computerScore = 0;
/*
 * Sets the score to 0.
 */

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose. " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("You lose. " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    if (computerChoice == "rock" && humanChoice == "scissors") {
        console.log("You lose. " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    if (humanChoice == computerChoice) {
        console.log("It's a draw.");
    }

}

/**
 * Initiates a round of gameplay, use this to caculate
 * the result
 * SCISSORS BEATS PAPER
 * PAPER BEATS ROCK
 * ROCK BEATS SCISSORS
 */

function playGame(){
    
}
/* PLAY GAME FUNCTION */

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

/**
 * Calls our functions to get human, comp choices, and initiate the round.
 */

console.log(humanSelection)
console.log("computer choice = " + computerSelection)
console.log("comp score = " + computerScore)
console.log(humanScore)
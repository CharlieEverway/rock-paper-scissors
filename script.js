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

    // Get Computer Choice between 1 2 or 3 and assign that value to a string and return
}

function getHumanChoice(humanChoice) {
    let humanInput = prompt();
    humanChoice = humanInput.toLowerCase();
    return humanChoice;
}
// When called, this calls  the human choice function


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    // Sets the score to 0


    function playRound(humanChoice, computerChoice) {
        if ((humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissors")) {
           
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        if ((computerChoice == "scissors" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "rock" && humanChoice == "scissors")) {
            console.log("You lose. " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        if (humanChoice == computerChoice) {
            console.log("It's a draw.");
        }

    }
    //* initiates a round of gameplay, use this to caculate the result SCISSORS BEATS PAPER, PAPER BEATS ROCK ROCK BEATS SCISSORS
    for (let playRoundCounter = 1; playRoundCounter < 6; playRoundCounter++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Your choice = " + humanSelection)
        console.log("Computer choice = " + computerSelection)
        playRound(humanSelection, computerSelection);
        console.log("NUMBER OF ROUNDS COMPLETE = " + playRoundCounter);
        console.log("Your score = " + humanScore)
        console.log("Computer score = " + computerScore)
    }
     //if playround function has only been called less than 5 times
    //call playround function
}


playGame();
//starts the game
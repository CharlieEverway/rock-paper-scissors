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

const scoreHeader = document.querySelector("#scoreHeader");
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
let humanScore = 0;
let computerScore = 0;
let humanChoice = ""; //declare humanChoice variable to be used in our buttons
const gameWindow = document.querySelector(".gameWindow"); //grab our game window

function playRockPaperScissors() {
    const computerChoice = getComputerChoice();
    if ((humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissors")) {
        humanScore++;
        humanScoreDisplay.textContent = humanScore;
        addMessageToBox("YOU WIN! You picked " + humanChoice + " and the computer picked " + computerChoice + ". Since " + humanChoice + " beats " + computerChoice + ", you are the winner.");
        if (humanScore == 5) {
            addMessageToBox("WINNER!")
        }
    }
    if ((computerChoice == "scissors" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "rock" && humanChoice == "scissors")) {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        addMessageToBox("YOU LOSE... You picked " + humanChoice + " and the computer picked " + computerChoice + ". Since " + computerChoice + " beats " + humanChoice + ", you are the loser.");
        if (computerScore == 5) {
            addMessageToBox("LOSER!")
        }

    }
    if (humanChoice == computerChoice) {
        addMessageToBox("It's a draw. You both picked " + humanChoice + ".");
    }
}

function winCondition() {
    return humanScore === 5 || computerScore === 5;
}


function addMessageToBox(text) {
    const messageBox = document.getElementById('gameMessages');
    const newMessage = document.createElement('p');
    newMessage.textContent = text;
    messageBox.prepend(newMessage);
}


const rockButton = document.querySelector('#rockButton')
rockButton.addEventListener("click", function () {
    if (!winCondition()) {
        humanChoice = "rock";
        playRockPaperScissors();
    }
});

const scissorsButton = document.querySelector('#scissorsButton')
scissorsButton.addEventListener("click", function () {
    if (!winCondition()) {
        humanChoice = "scissors";
        playRockPaperScissors();
    }

});

const paperButton = document.querySelector('#paperButton')
paperButton.addEventListener("click", function () {
    if (!winCondition()) {
        humanChoice = "paper";
        playRockPaperScissors();
    }
});

const resetGameButton = document.querySelector('#resetButton')
resetGameButton.addEventListener("click", function () {
    const messageBox = document.getElementById('gameMessages');
    messageBox.innerHTML = "";
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
});


//when round counter reaches 5, show game message, and stop buttons from working
//MAKE IT SCROLLABLE USING CSS
//KEEP BOX AT FIXED HEIGHT

//FINALLY, SEND A MESSAGE YOU WIN TO DETECT WHEN ALL ROUNDS HAVE WON.
// you have a problem. are we running 5 rounds or until 5 wins
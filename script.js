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
    //for (let playRoundCounter = 1; playRoundCounter < 6; playRoundCounter++)
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

const scoreHeader = document.querySelector("#scoreHeader");
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
let humanScore = 0;
let computerScore = 0;

let humanChoice = ""; //declare humanChoice variable to be used in our buttons
const gameWindow = document.querySelector(".gameWindow"); //grab our game window
//const gameText = document.createElement('p'); //create a p element
//let text = document.createTextNode("This just got added"); //populate teh p element with text
//gameWindow.appendChild(text); //append it, and attach it.


function dashiJanken() {

    const computerChoice = getComputerChoice();

    if ((humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissors")) {
        //alert("You win! " + humanChoice + " beats " + computerChoice);
        //humanScore++;
        //const winParagraph = document.createElement('p');
        //winParagraph.textContent = ("YOU WIN! You picked " + humanChoice + " and the computer picked " + computerChoice + ". Since " + humanChoice + " beats " + computerChoice + ", you are the winner.");
        //gameWindow.appendChild(winParagraph);
        humanScore++;
        humanScoreDisplay.textContent = humanScore;
        addMessageToBox("YOU WIN! You picked " + humanChoice + " and the computer picked " + computerChoice + ". Since " + humanChoice + " beats " + computerChoice + ", you are the winner.");
    }
    if ((computerChoice == "scissors" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "rock" && humanChoice == "scissors")) {
        //alert("You lose. " + computerChoice + " beats " + humanChoice);
        //computerScore++;
        //const loseParagraph = document.createElement('p');
        //loseParagraph.textContent = ("YOU LOSE... You picked " + humanChoice + " and the computer picked " + computerChoice + ". Since " + computerChoice + " beats " + humanChoice + ", you are the loser.");
        //gameWindow.appendChild(loseParagraph);
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        addMessageToBox("YOU LOSE... You picked " + humanChoice + " and the computer picked " + computerChoice + ". Since " + computerChoice + " beats " + humanChoice + ", you are the loser.");
    }
    if (humanChoice == computerChoice) {
        //alert("It's a draw.");
        //const drawParagraph = document.createElement('p');
        //drawParagraph.textContent = ("It's a draw. You both picked " + humanChoice + ".");
        //gameWindow.appendChild(drawParagraph);

        addMessageToBox("It's a draw. You both picked " + humanChoice + ".");
    }

    //TO DO
    //the game should have a window for messages, but only with enough space up to 5 messages. The score
    // should be at the top, and updated. 
    //then add a reset button
}


function addMessageToBox(text) {
    const messageBox = document.getElementById('gameMessages');
    const newMessage = document.createElement('p');
    newMessage.textContent = text;
    messageBox.appendChild(newMessage);

    while (messageBox.childElementCount > 5) {
        messageBox.removeChild(messageBox.firstChild);
    }
}


const rockButton = document.querySelector('#rockButton')
rockButton.addEventListener("click", function () {
    console.log("ROCK")
    humanChoice = "rock";
    dashiJanken();
});

const scissorsButton = document.querySelector('#scissorsButton')
scissorsButton.addEventListener("click", function () {
    console.log("SCISSORS")
    humanChoice = "scissors";
    dashiJanken();
});

const paperButton = document.querySelector('#paperButton')
paperButton.addEventListener("click", function () {
    console.log("PAPER")
    humanChoice = "paper";
    dashiJanken();
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




//playGame();
//starts the game
/*
OK NEXT STEPS: SETUP THE GAME TO RUN UP TO 5 ROUNDS

LIMIT THE BOX TO 5 MESSAGES ONLY
MAKE IT SCROLLABLE USING CSS
KEEP BOX AT FIXED HEIGHT

FINALLY, SEND A MESSAGE YOU WIN TO DETECT WHEN ALL ROUNDS HAVE WON.

*/

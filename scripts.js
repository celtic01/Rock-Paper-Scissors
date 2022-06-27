
const container = document.createElement('div');
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');
const separator = document.createElement('div');
const resultsContainer = document.createElement('div');
const playerChoice = document.createElement('div');
const computerChoice = document.createElement('div');
const matchDecision = document.createElement('div');

const scoreContainer = document.createElement('div');
const playerScore = document.createElement('div');
const computerScore = document.createElement('div');

playerScore.innerText ='you: 0';
computerScore.innerText ='computer: 0';
separator.innerText = ':';

let playerSelection = '';
let computerSelection = '';
let playerWins = 0;
let computerWins = 0;

scoreContainer.classList.add('score-container');
matchDecision.classList.add('match-decision');
computerChoice.classList.add('computer-choice');
playerChoice.classList.add('player-choice');
resultsContainer.classList.add("container-results");
separator.classList.add("separator");
playerScore.classList.add('score');
computerScore.classList.add('score');
container.classList.add("container");

buttonRock.innerText = 'rock';
buttonPaper.innerText = 'paper';
buttonScissors.innerText = 'scissors';




scoreContainer.appendChild(playerScore);
scoreContainer.appendChild(computerScore);
container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);
resultsContainer.appendChild(playerChoice);
resultsContainer.appendChild(separator);
resultsContainer.appendChild(computerChoice);
document.body.appendChild(scoreContainer);
document.body.appendChild(resultsContainer);
document.body.appendChild(matchDecision);
document.body.appendChild(container);



buttonRock.addEventListener('click', () => Game('rock'));

buttonPaper.addEventListener('click', () => Game('paper'));

buttonScissors.addEventListener('click', () => Game('scissors'));

//console.log(playerChoice());//works
//console.log(computerPlay(rand));//works

/*
function playerChoice() {
    let playerSelection;
    while (true) {
        playerSelection = window.prompt("Enter Paper, Rock or Scissors");

        console.log(playerSelection);

        if (playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "scissors") {
            alert(`You chose ${playerSelection}`);
            return playerSelection;
        }

    }
}
*/
function computerPlay(randomNumber) {
    if (randomNumber == 0) {
        console.log("Computer chose paper");
        return "paper";
    }
    else if (randomNumber == 1) {
        console.log("Computer chose scissors");
        return "scissors";
    }
    else {
        console.log("Computer chose rock");
        return "rock";
    }
}

function playRound(player, computer) {
    //draw
    if (player == computer) {
        return "It s a draw!";
    }
    //paper
    else if (player == "paper" && computer == "rock") {
        return "You won!";
    }
    else if (player == "paper" && computer == "scissors") {
        return "You lose!";
    }
    //rock
    else if (player == "rock" && computer == "paper") {
        return "You lose!";
    }
    else if (player == "rock" && computer == "scissors") {
        return "You won!";
    }
    //scissors
    else if (player == "scissors" && computer == "paper") {
        return "You won!";
    }
    else if (player == "scissors" && computer == "rock") {
        return "You lose!";
    }
}

function Game(choice) {
    matchDecision.removeAttribute('class');

    playerChoice.innerText = choice;
    playerSelection = choice;

    computerSelection = computerPlay(Math.floor(Math.random() * 3));
    computerChoice.innerText = computerSelection;

    matchDecision.innerText = playRound(playerSelection, computerSelection);

    if (matchDecision.innerText == "You won!") {
        matchDecision.classList.add('match-decision');
        matchDecision.classList.add('win');
        
        playerWins++
        playerScore.innerText = playerScore.innerText.replace(/\d$/, `${playerWins}`);
      
        if (playerWins == 5) {
            clearAll();
            alert("you won the game, the game will now restart");
           
        }

    } else if (matchDecision.innerText == "You lose!") {
        matchDecision.classList.add('match-decision');
        matchDecision.classList.add('loss')

        computerWins++;
        computerScore.innerText = computerScore.innerText.replace(/\d$/, `${computerWins}`);

        

        if (computerWins == 5) {
            clearAll();
            alert("you lost the game, the game will now restart");
            
        }
    }
    else {
        matchDecision.classList.add('match-decision');
    }
}

function clearAll () {
    computerScore.innerText = "computer: 0";
    playerScore.innerText = 'you: 0';
    playerChoice.innerText = "";
    computerChoice.innerText = "";
    matchDecision.innerText = "";
    computerWins = 0;
    playerWins = 0;
}

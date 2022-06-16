
const container = document.createElement('div');
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');
const separator = document.createElement('div');
const resultsContainer = document.createElement('div');
const playerChoice = document.createElement('div');
const computerChoice = document.createElement('div');
const matchDecision = document.createElement('div');

separator.innerText = ':';

let playerSelection = '';
let computerSelection = '';
let playerWins = 0;
let computerWins = 0;

matchDecision.classList.add('match-decision');
computerChoice.classList.add('computer-choice');
playerChoice.classList.add('player-choice');
resultsContainer.classList.add("container-results");
separator.classList.add("separator");

buttonRock.innerText = 'rock';
buttonPaper.innerText = 'paper';
buttonScissors.innerText = 'scissors';


container.classList.add("container");

container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);
resultsContainer.appendChild(playerChoice);
resultsContainer.appendChild(separator);
resultsContainer.appendChild(computerChoice);
document.body.appendChild(resultsContainer);
document.body.appendChild(matchDecision);
document.body.appendChild(container);


buttonRock.addEventListener('click', () => {

    matchDecision.removeAttribute('class');

    playerChoice.innerText = "rock";
    playerSelection = "rock";
    computerChoice.innerText = computerPlay(Math.floor(Math.random() * 3));
    computerSelection = computerChoice.innerText;
    matchDecision.innerText = playRound(playerSelection,computerSelection);

    if(matchDecision.innerText == "You won!")
    {
        matchDecision.classList.add('match-decision');
        matchDecision.classList.add('win');
    }else if (matchDecision.innerText == "You lose!")
    {
        matchDecision.classList.add('match-decision');
        matchDecision.classList.add('loss')
    }
    else 
    matchDecision.classList.add('match-decision');
});

buttonPaper.addEventListener('click', () => {

    matchDecision.removeAttribute('class');

    playerChoice.innerText = "paper";
    playerSelection = "paper";
    computerChoice.innerText = computerPlay(Math.floor(Math.random() * 3));
    computerSelection = computerChoice.innerText;
    matchDecision.innerText = playRound(playerSelection,computerSelection);

    if(matchDecision.innerText == "You won!")
    {
        matchDecision.classList.add('match-decision');
        matchDecision.classList.add('win');
    }else if (matchDecision.innerText == "You lose!")
    {
        matchDecision.classList.add('match-decision');
        matchDecision.classList.add('loss')
    }
    else 
    matchDecision.classList.add('match-decision');
});

buttonScissors.addEventListener('click', () => {
 
    matchDecision.removeAttribute('class');

    playerChoice.innerText = "scissors";
    playerSelection = "scissors";
    computerChoice.innerText = computerPlay(Math.floor(Math.random() * 3));
    computerSelection = computerChoice.innerText;
    matchDecision.innerText = playRound(playerSelection,computerSelection);

    if(matchDecision.innerText == "You won!")
    {
        matchDecision.classList.add('match-decision');
        matchDecision.classList.add('win');
    }else if (matchDecision.innerText == "You lose!")
    {
        matchDecision.classList.add('match-decision');
        matchDecision.classList.add('loss')
    }
    else 
    matchDecision.classList.add('match-decision');
});

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

let rand = Math.floor(Math.random() * 3);

const container = document.createElement('div');
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');
const separator = document.createElement('div');
const resultsContainer = document.createElement('div');
const playerChoice = document.createElement('div');

separator.innerText = ':';

playerChoice.classList.add('choice');
resultsContainer.classList.add("container-results");
separator.classList.add("separator");

buttonRock.innerText = 'Rock';
buttonPaper.innerText = 'Paper';
buttonScissors.innerText = 'Scissors';


container.classList.add("container");

container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);
resultsContainer.appendChild(playerChoice);
resultsContainer.appendChild(separator);
document.body.appendChild(resultsContainer);
document.body.appendChild(container);


buttonRock.addEventListener('click', () => {

    playerChoice.innerText = "Rock";

});

buttonPaper.addEventListener('click', () => {

    playerChoice.innerText = "Paper";
});

buttonScissors.addEventListener('click', () => {

    playerChoice.innerText = "Scissors";

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

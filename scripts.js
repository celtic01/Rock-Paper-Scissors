let rand = Math.floor(Math.random() * 3);

const container = document.createElement('div');
const buttonPaper = document.createElement('button');
const buttonRock = document.createElement('button');
const buttonScissors = document.createElement('button');
const results = document.createElement('div');

let playerChoice = '';

results.innerText ="Your choice:"
buttonPaper.innerText = 'Paper';
buttonRock.innerText = 'Rock';
buttonScissors.innerText= 'Scissors';

buttonPaper.addEventListener('click', () => {
    
    playerChoice = 'paper';
    alert("You chose Paper!");
    console.log(playerChoice);

});

buttonRock.addEventListener('click', () => {
    
    playerChoice = 'rock';
    alert("You chose Rock!");
    console.log(playerChoice);
    
});

buttonScissors.addEventListener('click', () => {
    
    playerChoice = 'scissors';
    alert("You chose Scissors!");
    console.log(playerChoice);
    
    playRound(playerChoice,computerPlay(rand))
    
});



container.classList.add("container");

container.appendChild(buttonPaper);
container.appendChild(buttonRock);
container.appendChild(buttonScissors);

document.body.appendChild(container);



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

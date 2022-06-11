let rand = Math.floor(Math.random() * 3);




//console.log(playerChoice());//works
//console.log(computerPlay(rand));//works
game()

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


function game()
{
    let counterPlayerWins = 0;
    let counterComputerWins = 0;
    let result;
    for(let i = 0; i < 5; i++)
    {
        if(counterPlayerWins > 2 || counterComputerWins > 2)
        {
            break;
        }

        result = playRound(playerChoice(),computerPlay(rand));

        if (result == "You won!")
        {
            console.log("you won this round!");
            counterPlayerWins++;
        }
        else if (result =="You lose!")
        {
            console.log("you lost this round!");
            counterComputerWins++;
        }
    }
    if( counterPlayerWins > counterComputerWins)
    {
        console.log("you won the game!");
    }
    else 
    console.log("you lost!");
}
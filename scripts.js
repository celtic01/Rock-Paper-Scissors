let rand = Math.floor(Math.random() * 3);


console.clear();

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
        return "paper";
    }
    else if (randomNumber == 1) {
        return "scissors";
    }
    else {
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


function game() {
    let counterPlayer = 0;
    let counterComputer = 0;

    for (let i = 0; i < 5; i++) {
        if (counterPlayer == 3) {
            console.log("You have won!:)")
            break;
        }
        if (counterComputer == 3) {
            console.log("You have lost!:(")
            break;
        }
        if (playRound(playerChoice(), computerPlay(rand)) == "It s a draw!")
            console.log("draw");
        continue;
        if (playRound(playerChoice(), computerPlay(rand) == "You won!")) {
            console.log("win");
            counterPlayer++;
        }
        else {
            counterComputer++;
            console.log("lost");
        }
    }
}

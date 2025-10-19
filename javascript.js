function getComputerChoice() {
    if(Math.random() < 0.33) {
        return "Paper";
    } else if(Math.random() < 0.66)
                return "Rock";
                else return "Scissors";
}

let humanChoice = prompt("You wanna play as (Rock/Paper/Scissors):")

console.log(humanChoice);

let humanScore, computerScore;
humanScore = 0;
computerScore = 0;

let computerChoice = getComputerChoice();
console.log(computerChoice);
function playRound(humanChoice, computerChoice) {
    if(humanChoice == "Rock") {
        if(computerChoice == "Scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
        else if(computerChoice == "Paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else {
            console.log("It's a tie!");
        }
    }

    if(humanChoice == "Scissors") {
        if(computerChoice == "Paper") {
            console.log("You win! Scissors beat Paper.");
            humanScore++;
        }
        else if(computerChoice == "Rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else {
            console.log("It's a tie!");
        }
    }

    if(humanChoice == "Paper") {
        if(computerChoice == "Rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else if(computerChoice == "Scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else {
            console.log("It's a tie!");
        }
    }
}

playRound(humanChoice, computerChoice);
console.log(humanScore)
console.log(computerScore)
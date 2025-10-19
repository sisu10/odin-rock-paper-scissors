function getComputerChoice() {
    if(Math.random() < 0.33) {
        return "Paper";
    } else if(Math.random() < 0.66)
                return "Rock";
                else return "Scissors";
}

console.log(getComputerChoice());


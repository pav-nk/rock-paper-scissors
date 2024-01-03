const options = ["scissors", "paper", "rock"];
let roundCount = 5;
const score = {
    player: 0,
    computer: 0,
};

function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    return options[getRandomNumber()];
}

function playRound(playerSelection, computerSelection) {

};
 
function game() {
    console.log("Welcome to the game: 'Rock Paper Scissors'");
    let i = 1;
    while (i <= roundCount) {
        const playerSelection = (prompt('Make your choice: rock, scissors or paper?', 'rock')).toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        i += 1;
    }
};

game();
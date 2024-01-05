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
    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerSelection} ties with ${computerSelection}`;
    }
    let isPlayerWon = false;
    switch (playerSelection) {
        case 'paper':
          isPlayerWon = computerSelection === 'rock';
          break;
        case 'rock':
          isPlayerWon = computerSelection === 'scissors';
          break;
        case 'scissors':
          isPlayerWon = computerSelection === 'paper';
          break;
    }
    if (isPlayerWon) {
        score.player += 1;
    } else {
        score.computer += 1;
    }
    return isPlayerWon ? `You won! ${playerSelection} beats ${computerSelection}` : `You lost! ${playerSelection} is beaten by ${computerSelection}`;
};
 
function game() {
    console.log("Welcome to the game: 'Rock Paper Scissors'");
    let i = 1;
    while (i <= roundCount) {
        const playerSelection = (prompt('Make your choice: rock, scissors or paper?', 'rock')).toLowerCase();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        i += 1;
    }
    const { player, computer } = score;
    if (player > computer) {
        console.log(`Player won! Score: ${player} : ${computer}`);
    } else if (computer > player) {
        console.log(`Computer won! Score: ${computer} : ${player}`);
    } else {
        console.log("It's a tie!");
    }
};

// game();
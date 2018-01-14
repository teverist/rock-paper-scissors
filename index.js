function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playerPlay() {
    let playerChoice = prompt("Rock, paper or scissors?");
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
	
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))


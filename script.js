'use strict';
let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let computerPick = choices[Math.floor(Math.random() * 3)];
    return computerPick;
};
//////////

const buttons = document.querySelectorAll("button");
const OUT_PUT = document.querySelector(".output");
////////

let draw = 'Tie';
let playerWin = 'Player Wins!';
let compWin = 'Bot Wins!'
////////

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let WinningScore = 5;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return draw;
        } else if (
            humanChoice == choices[0] && computerChoice == choices[2] ||
            humanChoice == choices[1] && computerChoice == choices[0] ||
            humanChoice == choices[2] && computerChoice == choices[1]) {
            humanScore++
            playerScores.textContent = (`Player score: ${humanScore} | Bot Score: ${computerScore}`);
            return playerWin;
        }
        computerScore++
        playerScores.textContent = (`Player score: ${humanScore} | Bot Score: ${computerScore}`);
        return compWin;
    };
    for (let i = 1; i <= 5; i++) {
        const playerChoice = getHumanChoice();
        const compChoice = getComputerChoice();
        const oneRound = playRound(playerChoice, compChoice);
        console.log(`Round ${i}: ${oneRound}`);
    };
    if (humanScore > computerScore) {
        return '--Player wins the game--'
    } else if (humanScore < computerScore) {
        return '--Bot wins the game--'
    }
    return '---TIE!---'
}
console.log(playGame());
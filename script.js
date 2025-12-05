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
let playerWin = 'You Win!';
let compWin = 'Computer Wins!';
////////

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`Human: ${humanChoice} | Bot: ${computerChoice}`);
        if (humanChoice === computerChoice) {
            return draw;
        } else if (humanChoice == choices[0] && computerChoice == choices[2] || humanChoice == choices[1] && computerChoice == choices[0] || humanChoice == choices[2] && computerChoice == choices[1]) {
            humanScore++
            console.log(`player score: ${humanScore}`);
            return playerWin;
        };
        computerScore++
        console.log(`bot score: ${computerScore}`);
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
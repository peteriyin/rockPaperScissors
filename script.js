'use strict';
let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let computerPick = Math.floor(Math.random() * choices.length);
    if (computerPick == 0) {
        return choices[0];
    } else if (computerPick == 1) {
        return choices[1];
    }
    return choices[2];
};
const compChoice = getComputerChoice();
console.log(compChoice);
//////////

function getHumanChoice() {
    let pick = prompt('rock, paper or scissors');
    return (pick.toLowerCase());
};
const humanChoice = getHumanChoice();
////////

let humanScore = 0;
let computerScore = 0;
////////

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    if (humanChoice === computerChoice) {
        return 'Tie'
    } else if (humanChoice == choices[0] && computerChoice == choices[2] || humanChoice == choices[1] && computerChoice == choices[0] || humanChoice == choices[2] && computerChoice == choices[1]) {
        return 'You Win!'
    }
    return 'Computer Wins!'
};

console.log(playRound(humanChoice, compChoice));
'use strict';
let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let computerPick = Math.floor(Math.random() * choices.length);
    if (computerPick == 0) {
        return choices[0]
    } else if (computerPick == 1) {
        return choices[1]
    }
    return choices[2];
};
console.log(getComputerChoice());

function getHumanChoice() {
    let humanPick = prompt('rock, paper or scissors');
    return humanPick
};
console.log(getHumanChoice());

let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()

let humanScore = 0;
let computerScore = 0;
function getOutcome(humanChoice, computerChoice) {

};
'use strict';
function computerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let pick = Math.floor(Math.random() * choices.length);
    if (pick == 0) {
        return choices[0]
    } else if (pick == 1) {
        return choices[1]
    }
    return choices[2];
};
console.log(computerChoice());
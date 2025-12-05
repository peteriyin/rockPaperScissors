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

    const playerChoices = document.createElement("p");
    const playerScores = document.createElement("p");
    const winOrTie = document.createElement("p");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const playerChoice = event.target.textContent.toLowerCase();
            const compChoice = getComputerChoice();

            playerChoices.textContent = (`Player: ${playerChoice} | Bot: ${compChoice} `);
            winOrTie.textContent = playRound(playerChoice, compChoice);

            if (humanScore == WinningScore) {
                winOrTie.textContent = '--Player wins the game--'
            } else if (computerScore == WinningScore) {
                winOrTie.textContent = '--Bot wins the game--'
            }

            OUT_PUT.appendChild(playerChoices);
            OUT_PUT.append(winOrTie);
            OUT_PUT.appendChild(playerScores);
        });
    });

}
playGame();
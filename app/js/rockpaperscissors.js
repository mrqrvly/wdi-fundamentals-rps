       

        ///////////////////////////////////////
        // Provided Code - Please Don't Edit //
        ///////////////////////////////////////


'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


        ////////////////////////////////////
        // Get player and computer throws //
        ////////////////////////////////////


function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}


        /////////////////////////////////
        // Determine winner of a throw //
        /////////////////////////////////


function getWinner(playerMove,computerMove) {
    var winner;
    
    if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            winner = 'computer';
        } else if (computerMove === 'scissors') {
            winner = 'player';
        } else {
            winner = 'tie';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner = 'player';
        } else if (computerMove === 'scissors') {
            winner = 'computer';
        } else {
            winner = 'tie';
        }
    } else {
        if (computerMove === 'rock') {
            winner = 'computer';
        } else if (computerMove === 'paper') {
            winner = 'player';
        } else {
            winner = 'tie';
        }
    }

    return winner;
}


        ///////////////////////////////////////////////////////////////
        // run game and repeat until player or computer wins 5 times //
        ///////////////////////////////////////////////////////////////


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;

    while ((playerWins < 5) && (computerWins < 5)) {

        getWinner('rock', 'scissors');

        console.log("Player: " + playerMove + "   " + "Computer: " + computerMove);

        if (winner === 'player') {
            playerWins++;
        } else if (winner === 'computer') {
            computerWins++;
        } else {
            console.log("Nobody wins.");
        }

        console.log("The score is now " + playerWins + " - " + computerWins + ".");
    }

    return [playerWins, computerWins];
}

playToFive();
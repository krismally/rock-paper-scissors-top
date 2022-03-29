/* Rock Paper Scissors game for The Odin Project
1. computer player that randomly returns rock, paper, or scissors
2. user prompted to choose rock, paper, or scissors(case insensitive)
3. if user enters anything else ask again for the required input
4. compare user's vs. computer's answer
5. log if user won or lost based on game rules(rock>scissors,scissors>paper,paper>rock)
6. repeat 5 times
7. return won if user's gamesWon>gamesLost, else return lost
*/

// define computer player
function computerPlayer(){
    let res = Math.floor(Math.random() * 3);
    switch (res) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return 'scissors';
    }
}

let playerScore = 0;
let compScore = 0;

// single round
function round(playerSelection, compSelection) {
    if (playerSelection == compSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && compSelection == "paper") || 
        (playerSelection == "paper" && compSelection == "scissors") || 
        (playerSelection == "scissors" && compSelection == "rock")
    ){
        compScore++;
        return `You Lose! Sorry, ${compSelection} beats ${playerSelection}.`;
    } else if (
        (playerSelection == "paper" && compSelection == "rock") || 
        (playerSelection == "scissors" && compSelection == "paper") || 
        (playerSelection == "rock" && compSelection == "scissors")
    ){
        playerScore++;
        return `You Win! Wahoo, ${playerSelection} beats ${compSelection}!`;
    }
}

function game(){
    for (let i=0; i<5;i++){
        let playerSelection = prompt("Choose your fighter: rock, paper, or scissors?").toLowerCase();
        let compSelection = computerPlayer();
        console.log(round(playerSelection, compSelection))
    }
    if (playerScore>compScore){
        return "You beat the computer! Congrats!"
    } else if (playerScore==compScore){
        return "It's a tie!"
    } else {
        return "The computer beat you! Sorry:(."
    }
}


console.log(game());
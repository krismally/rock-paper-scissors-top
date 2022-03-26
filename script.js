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
    if (res==1){
        res = "rock";
    } else if (res==2){
        res = "paper";
    } else{
        res = "scissors";
    }
    return res;
}

// single round 
function round(playerSelection, compSelection){
    if (playerSelection == compSelection) {
        return "Tie";
    } else if ((playerSelection == "rock" && compSelection == "paper") || (playerSelection == "paper" && compSelection == "scissors") || (playerSelection == "scissors" && compSelection == "rock")){
        return `You Lose! Sorry, ${compSelection} beats ${playerSelection}.`;
    } else if ((playerSelection == "paper" && compSelection == "rock") || (playerSelection == "scissors" && compSelection == "paper") || (playerSelection == "rock" && compSelection == "scissors")){
        return `You Win! Wahoo, ${playerSelection} beats ${compSelection}!`;
    } else {
        return "Please enter rock, paper, or scissors!"
    }
}

// defines what user and computer selects; rock, paper, or scissors
const compSelection = computerPlayer();
const playerSelection = prompt("Choose your fighter: rock, paper, or scissors?").toLowerCase();

console.log(round(playerSelection, compSelection));
/*Rock papers scissors game:
Player vs. computer(picks randomly)*/

document.getElementById("heading").innerHTML ="Rock paper scissors"
game()
//a function that chooses randomly from the options
function computerPlay() {
    let randomNumber=Math.floor(Math.random()*3);

    if (randomNumber===0) {
        return "rock";
    }
    else if (randomNumber===1) {
        return "paper"
    }
    else {
        return "scissors"
    }
    }

//a function that declares the winner
function playRound(playerPick,computerPick) {

    
    if (playerPick===computerPick) {
        return `Its a tie!`
    }
    else if (playerPick=="rock"&&computerPick!="paper") {
        return `You win, ${playerPick} beats ${computerPick}`
        
    }
    else if (playerPick=="paper"&&computerPick!="scissors") {
        return `You win, ${playerPick} beats ${computerPick}`
    }
    else if (playerPick=="scissors"&&computerPick!="rock") {
        return `You win, ${playerPick} beats ${computerPick}`
    }
    else {
        return `You lose, ${computerPick} beats ${playerPick}`
    }   
}

//a function that runs the game 5 times (the main function)
function game() {
    let playerScore=0;
    let computerScore=0;
    
    for (let i = 0; i < 5; i++) {
        let playerPick=prompt("Choose your weapon! Rock, paper or scissors?").toLowerCase();
        let computerPick=computerPlay();
        let whoWon=playRound(playerPick,computerPick);
        if (whoWon==`You win, ${playerPick} beats ${computerPick}`) {
            playerScore++;
            console.log(`You won! Scores: Player: ${playerScore} Computer: ${computerScore}`);
            
        }
        else if (whoWon==`You lose, ${computerPick} beats ${playerPick}`) {
            computerScore++;
            console.log(`You lost! Scores: Player: ${playerScore} Computer: ${computerScore}`);
        }
        else {
            console.log(`You tied! Scores: Player: ${playerScore} Computer: ${computerScore}`);
            continue;
        }
    }
    
    if (playerScore>computerScore) {
        console.log("You are better than computer!");
        document.getElementById("demo").innerHTML ="You won!!!"
    }
    else {
        console.log("Computer beat you... Better luck next time!");
        document.getElementById("demo").innerHTML ="You lost..."
    }
     
}

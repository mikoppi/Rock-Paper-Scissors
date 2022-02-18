/*Rock papers scissors game:
Player vs. computer(picks randomly)*/
let playerScore=0;
let computerScore=0;
let computerPick;
let playerPick;


//connect the buttons to javascript
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', getBothPlayersPicks);
});

//DOM manipulation for results
const results=document.querySelector('#results');
const paraScores=document.createElement('p');
const paraResult=document.createElement('h1');
results.appendChild(paraScores);
results.appendChild(paraResult);





//function that gets the players choice and starts the game
function getBothPlayersPicks(e) {
    playerPick=(e.target.id);
    computerPick=computerPlay()
    if (playerScore<5&&computerScore<5) {
       game();
    }
    else {
        declareWinner(playerScore,computerScore);
    }     
}

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
        return `Its a tie`
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
    
    let whoWon=playRound(playerPick,computerPick);

    if (whoWon==`You win, ${playerPick} beats ${computerPick}`) {
        playerScore++;
        paraScores.textContent=`${whoWon}. Scores: Player: ${playerScore} Computer: ${computerScore}`;        
    }
    else if (whoWon==`You lose, ${computerPick} beats ${playerPick}`) {
        computerScore++;
        paraScores.textContent=`${whoWon}. Scores: Player: ${playerScore} Computer: ${computerScore}`;
    }
    else {
        paraScores.textContent=`${whoWon}. Scores: Player: ${playerScore} Computer: ${computerScore}`;    
    }    
}

function declareWinner(playerScore,computerScore) {
    if (playerScore==5) {
        paraResult.textContent='Game ended. You are the winner!'
        
    }
    else {
        paraResult.textContent="Game ended. Computer beat you... Better luck next time!";
    }        
}  



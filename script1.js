// setting up the random number generator for the computer guess


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/* identifying two variables to store the computer's output: one for the number 
that is randomly generated for the computer, then one as a string to represent
the computer's actual 'guess' */

let computerGuess;
let computerChoice;

// creating a function to map the random number to a specific string

function getComputerChoice(){
computerGuess = getRandomInt(3)
  if (computerGuess === 0){
    return computerChoice = "petros";
  }
  else if (computerGuess === 1){
    return computerChoice = "papyrus";
  }
  else {
    return computerChoice = "shears";
  }
}


// set up the ability for a player to enter their guess and make it match the computer's

let humanGuess
let humanChoice

function getHumanChoice(){
   humanGuess = prompt("Make Your Choice!  Petros, Papyrus, or Shears!")
   humanChoice = humanGuess.toLowerCase(); 
   return humanChoice
}


// create score variables and initialize to 0

let humanScore = 0;
let computerScore = 0;

// write the logic to play a single round




function playRound(){

getComputerChoice();
console.log(computerChoice);

getHumanChoice();
console.log(humanChoice);

  if (computerChoice === humanChoice){
    console.log("You tied!  Try again.");
  } 

  else if (computerChoice === "petros" && humanChoice === "papyrus"){
    console.log("You Win! Papyrus beats Petros.");
    humanScore++;
    
  }
  else if (computerChoice === "petros" && humanChoice === "shears"){
    console.log("You Lose! Petros beats Shears.");
    computerScore++;
  }

  else if (computerChoice === "papyrus" && humanChoice === "shears"){
    console.log("You Win! Shears beats Papyrus.");
    humanScore++;
  }
  else if (computerChoice === "papyrus" && humanChoice === "petros"){
    console.log("You Lose! Papyrus beats Petros.");
    computerScore++;
  }

  else if (computerChoice === "shears" && humanChoice === "petros"){
    console.log("You Win! Petros beats Shears.");
    humanScore++;
  }
  else {
    console.log("You Lose! Shears beats Papyrus.");
    computerScore++;
  }
  
console.log(humanScore);
console.log(computerScore);
    
}

// write a function to play the game five times.  The assignemnt gives lots of tips here.  Why is mine so simple?


function playGame(){

playRound();

playRound();
  
playRound();

playRound();

playRound();

}
  
playGame();



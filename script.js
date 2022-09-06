let secretNumber;
let lastGuess;
let guessesRemaining = 10;
let previousGuesses = [];


const CORRECT_MESSAGE = "Correct! You must be a powerful psychic.";
const INCORRECT_MESSAGE = "Incorrect. You are merely a normal human.";
const HIGHER_MESSAGE = "Your guess is too high, try again";
const LOWER_MESSAGE = "Your guess is too low, try again";

function generateNumber() {
  secretNumber = Math.ceil(Math.random()*10);
  console.log("secretNumber", secretNumber);

  // MILESTONE 2: to return a secret number between 1 and 10.// 
}


function checkIsCorrect(){ 
  let result;
  if(secretNumber===lastGuess){
   result = true;
  
}else{
  result = false;
 
}
 return result;
}



function makeGuess() {
  if(!secretNumber) {
    //gives you the return value for generateNumber function
    generateNumber();    
  } 
if (guessesRemaining === 0){
  alert('No more guesses!')
} else {
 lastGuess = parseInt(prompt("What is your guess?"))


 console.log(lastGuess);
  
guessesRemaining = guessesRemaining - 1;

updatePage();
previousGuesses.push(lastGuess)
       }
 
}

function updatePage() {
  const previous = document.getElementById("previous-guesses")
  previous.innerHTML = previousGuesses;
  
  document.getElementById("last-guess").innerHTML = lastGuess;
  const correct = document.getElementById("correct");
  const isCorrect = checkIsCorrect();
  if(isCorrect) {
    correct.innerHTML = CORRECT_MESSAGE;
  } else {
    correct.innerHTML = INCORRECT_MESSAGE;
  }
  
  const specialMessage = document.getElementById("special-message");
  if( lastGuess > secretNumber){
         specialMessage.innerHTML = HIGHER_MESSAGE;
  }else if (lastGuess < secretNumber) {
         specialMessage.innerHTML = LOWER_MESSAGE;
  }else {
        specialMessage.innerHTML = " ";
  }
  
  const remaining = document.getElementById("guesses-remaining");
  remaining.innerHTML = guessesRemaining;
}
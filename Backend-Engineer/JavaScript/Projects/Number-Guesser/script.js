let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    return Math.floor(Math.random() * 10);
}
// testing the function generateTarget()
console.log(generateTarget());

const compareGuesses = (randomGuess, userGuess, computerGuess) =>{
    let 
    if(userGuess === computerGuess){
        return true;
    } else if (randomGuess - userGuess < randomGuess - computerGuess){
        return `${true} case of user input is near the target`;
    
    } else if (randomGuess - userGuess > randomGuess - computerGuess){
        return false;
    
    } else if (randomGuess - userGuess >= randomGuess - computerGuess){
        return `${false}  case of equality`;
    }
}

// testing the function generateTarget()
console.log(compareGuesses(generateTarget(), 4, 5));
console.log(compareGuesses(generateTarget(), 8, 4));
console.log(compareGuesses(5, 4, 4));



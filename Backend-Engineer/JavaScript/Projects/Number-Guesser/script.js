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
    let userDivid = randomGuess - userGuess;
    let computerDivid = randomGuess - computerGuess;
    userDivid = Math.abs(userDivid);
    computerDivid = Math.abs(computerDivid);
    if(userGuess === computerGuess){
        return true;
    } else if ( userDivid < computerDivid){
        return `${true} case of user input is near the target`;
    
    } else if (userDivid > computerDivid){
        return false;
    
    } else if (userDivid >= computerDivid){
        return `${false}  case of equality`;
    }
}

// testing the function generateTarget()
console.log(compareGuesses(generateTarget(), 4, 5));
console.log(compareGuesses(generateTarget(), 8, 4));
console.log(compareGuesses(5, 4, 4));



let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    return Math.floor(Math.random() * 10);
}
// testing the function generateTarget()
console.log(generateTarget() + ' target');

const compareGuesses = (randomGuess, userGuess, computerGuess) => {
    randomGuess = generateTarget();
    const userDistance = Math.abs(randomGuess - userGuess);
    const computerDistance = Math.abs(randomGuess - computerGuess);
    console.log(userDistance + ' human guess');
    console.log(computerDistance + ' com gues');

    if (userDistance < computerDistance) {
        console.log("User is closer");
        return true;  // Human wins
    } else if (userDistance > computerDistance) {
        console.log("Computer is closer");
        return false;  // Computer wins
    } else {
        console.log("It's a tie, human wins");
        return true;  // Tie goes to human
    }
};


// testing the function generateTarget()
// console.log(compareGuesses(generateTarget(), 4, 5));
// console.log(compareGuesses(generateTarget(), 8, 4));
// console.log(compareGuesses(5, 4, 4));

// creating the Updating scroe functionnality

const updateScore = (winner) =>{
    if(winner === 'human'){
        humanScore++;
    }
    else if(winner === 'computer'){
        computerScore++;
    }
    else {
        return 'Error Input'
    }
}

// test updateScore
// updateScore('human');
// console.log(humanScore);
// updateScore('human');
// console.log(humanScore);
// updateScore('human');
// console.log(humanScore);
// updateScore('dummy');
// console.log(humanScore);
// updateScore('computer');
// console.log(computerScore);


const advanceRound = ()=>{
    currentRoundNumber++;
}
// console.log(currentRoundNumber);
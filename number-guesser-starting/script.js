let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}
const compareGuesses = (user, computer, target) => {
    target = generateTarget();
    if (computer === target) {
        return 'Computer Won!';
    }
    else if ((computer > target) && (user > computer)){
        return 'Computer Won!';
    }
    else if ((computer < target) && (user < computer)){
        return 'Computer Won!';
    }
    else {
        return 'You Win!'
    }
}
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }
}
const advanceRound = () => {
    currentRoundNumber++;
}
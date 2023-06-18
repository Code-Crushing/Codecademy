let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (user, computer) => {
    const target = generateTarget();
    
    if (Math.abs(user - target) <= Math.abs(computer - target)) {
        return 'You Win!';
    } else {
        return 'Computer Wins!';
    }
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};

const checkUserGuess = (guess) => {
    if (guess < 0 || guess > 9) {
        return 'You are out of range. Guess needs to be between 0 and 9.';
    }
};

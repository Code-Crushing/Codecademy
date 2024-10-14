console.log('hi');

const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    } else {
        console.log('Not a proper choice, try again!');
    }
}
// console.log(getUserChoice('Rock'));

const getComputerChoice = () =>{
    let number = Math.floor(Math.random() * 3);
    switch(number){
        case 0: 
            return 'rock';
            break;

        case 1:
            return 'paper';
            break;
        
        case 2:
            return 'scissors';
            break;
    }
}
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
        return 'It is a tie'
    }

    if (userChoice === 'rock') {
        
        if(computerChoice === 'paper'){
            return "You lost the computer won";
        } else {
            return "You won!"
        }
    }
    if (userChoice === 'paper') {

        if(computerChoice === 'scissors'){
            return "You lost the computer won";
        } else {
            return "You won!"
        }
    }
    if (userChoice === 'scissors') {

        if(computerChoice === 'rock'){
            return "You lost the computer won";
        } else {
            return "You won!"
        }
    }
}
console.log(determineWinner(getUserChoice('rock'), getComputerChoice()));
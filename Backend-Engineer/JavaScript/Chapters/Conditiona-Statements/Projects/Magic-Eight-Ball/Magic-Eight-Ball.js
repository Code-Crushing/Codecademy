let userName = 'Fahd';

// a ternary expression that decides what to do if the user enters a name or not. If the user enters a name

userName? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Am I gonna continue the journey?';
console.log(`${userName} asked: ${userQuestion}`);

let randomeNumber = Math.floor(Math.random() *8);

let eightBall = '';

switch (randomeNumber){
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'Maybe';
        break;
    case 2:
        eightBall = 'It is decidedly so';
        break;
    case 3:
        eightBall = 'Reply hazy try again';
        break;
    case 4:
        eightBall = 'Cannot predict now';
        break;
    case 5:
        eightBall = 'Do not count on it';
        break;
    case 6:
        eightBall = 'My sources say no';
        break;
    case 7:
        eightBall = 'Outlook not so good';
        break;
    case 8:
        eightBall = 'Signs point to yes';
        break;
}
console.log(eightBall);

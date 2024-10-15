const getSleepHours = (day)=>{
    day = day.toLowerCase();
    switch(day){
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 6;
            break;
        case 'wednesday':
            return 5;
            break;
        case 'thursday':
            return 8;
            break;
        case 'friday':
            return 7;
            break;
        case 'saturday':
            return 4;
            break;
        case 'sunday':
            return 11;
            break;
    }
}

// console.log(getSleepHours('sunday'));

const getActualSleepHours = () => getSleepHours('monday')+ getSleepHours('tuesday')+ getSleepHours('wednesday')+ getSleepHours('thursday')+ getSleepHours('friday')+ getSleepHours('saturday')+ getSleepHours('sunday');

// console.log(getActualSleepHours());

const getIdealSleepHours = () =>{
    let idealHours = 7;
    return idealHours *= 7;
}
// console.log(getIdealSleepHours());

const calculateSleepDeebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours){
        console.log('You got an ideal week of sleep');
    } else if (actualSleepHours < idealSleepHours){
        console.log('You are lacking a few hours of sleep try to get your self more composed')
    } else {
        console.log('You got more sleep then intended good for you!')
    }
}
console.log(calculateSleepDeebt());


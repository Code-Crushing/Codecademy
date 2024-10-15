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
            return 9;
            break;
    }
}

console
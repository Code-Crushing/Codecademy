let raceNumber = Math.floor(Math.random() * 1000);
let regiteredEarly = false;
let runnerAge = 18;

if (regiteredEarly && runnerAge > 18){
    raceNumber += 1000;
}

if (regiteredEarly && runnerAge > 18){
    console.log(`Hey, ${raceNumber} you will start the race at 9:30am.`);

} else if(!regiteredEarly && runnerAge > 18){
    console.log(`Hey, ${raceNumber} you will start the race at 11:00am.`);

} else if(runnerAge < 18) {
    console.log(`Hey, ${raceNumber} you will start the race at 12:30pm.`);

} else {
    console.log(`Hey,if you are 18 yo please check at the desk.`)
}


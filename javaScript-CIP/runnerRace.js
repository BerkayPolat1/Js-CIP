let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = Math.random([true, false]);

let runnerAge = Math.floor(Math.random() * 80);

if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
} 

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Runner ${raceNumber}, you will race at 9.30 am.`)
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Runner ${raceNumber}, you will race at 11.00 am.`)
}

if (runnerAge < 18) {
  console.log(`Runner ${raceNumber}, you will race at 12.30 am.`)
} else if (runnerAge = 18) {
  console.log(`Runner ${raceNumber}, please see the registration desk.`)
}







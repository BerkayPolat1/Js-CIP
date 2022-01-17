// simple for loop

for (let counter = 5; counter <= 10; counter++){
    console.log(counter)
  }

// reverse for loop

for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }

// iterating an array

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}.`);
}


// nested loops 

let bobsFollowers = ['Aysel', 'Berkay', 'Yaşar', 'Berk'];

let tinasFollowers = ['Aysel', 'Berk', 'Ozan'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
      }
  }
}

console.log(mutualFollowers);

// while loop

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = "";

while (currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}

// do, while statement

const cupsOfSugarNeeded = 4;

let cupsAdded = 0;

do {
  cupsAdded += 1 
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);


// break keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i])
  if (rapperArray[i] === "Notorious B.I.G.")
    break;
}


console.log("And if you don't know, now you know.");




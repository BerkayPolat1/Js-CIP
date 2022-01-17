// falsy and non-falsy (truthy) statements

let wordCount = 0;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = 'Hello World!';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


// truthy and falsy assignment 

let tool = '';

//short circuit evaluation: Pen will be assigned since tool is falsy. 
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// ternary operators

let isLocked = false;

isLocked 
? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');


// ternary 2. code

let favoritePhrases = 'Love That!';

favoritePhrases === 'Love That!'
? console.log('I love that!')
: console.log("I don't love that!");


// else if let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.')
} else if (season === "fall") {
  console.log('It\'s fall! Leaves are falling!')
} else if (season === "summer") {
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}

// the switch keyword instead of millions of else if 

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!')
    break;
  case 'second place':
    console.log('You get the silver medal!')
    break;
  case 'third place':
    console.log('You get the bronze medal!')
    break;
  default:
    console.log('No medal awarded.')
    break;
}
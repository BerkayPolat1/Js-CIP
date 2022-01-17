// array
const hobbies = ["yes", "one", "erek"]

console.log(hobbies)

// accessing elements in an array

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];

console.log(listItem)

console.log(famousSayings[2])

console.log(famousSayings[3])

// changing an item in the array 

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados'


// reassigning values to an array 

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments = ['mayo']

console.log(condiments)

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

utensils[3] = 'Spoon'

console.log(utensils)

// length property 

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length)


// push method (adding items to an array)

const chores = ['wash dishes', 'do laundry', 'take out trash'];


chores.push('tidy your bed', 'wipe your desk');

console.log(chores)

// deleting items in an array 

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(chores)


// more array method (shift, unshift, slice(non-mutating), indexOf)

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift([0])

groceryList.unshift('popcorn')

console.log(groceryList.slice(1, 4))

console.log(groceryList)

const pastaIndex = groceryList.indexOf('pasta')

console.log(pastaIndex)

// mutation in an array

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)



function removeElement(newArr){
  newArr.pop()
}

removeElement(concept);
console.log(concept)

// nested array

const numberClusters = [[1,2],[3,4],[5,6]];

const target = console.log(numberClusters[2][1]); // output == 6





// for each 

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function(fruit) {
  console.log(`I want to eat a ${fruit}`)
})


// map method(accessing each element in the array)

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(number => {
  return number / 100;
})

console.log(smallNumbers)


// filtering iterator

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
})

console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

console.log(longFavoriteWords);

// findIndex iterator 

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
})


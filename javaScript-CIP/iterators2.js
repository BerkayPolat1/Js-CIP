// reduce method

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10)

console.log(newSum);


// practice 

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];



 console.log(words.some(word => {
  return word.length < 6;
}));

const interestingWords = words.filter(word => {
  return word.length > 5
})


console.log(interestingWords.every(word => {
  return word.length > 5
}));


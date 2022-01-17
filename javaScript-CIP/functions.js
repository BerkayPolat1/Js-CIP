function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
  }
  
  sayThanks();

// parameters

function sayThanks(name) {
 console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
  
sayThanks('Cole');
  
// default values of parameters

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}!`);
    console.log(`Remember to buy ${item2}!`);
    console.log(`Remember to buy ${item3}!`);
  }
  
makeShoppingList();

// return keyword

function monitorCount(rows, columns) {
    return rows * columns
  }

const numOfMonitors = monitorCount(5, 4);
  
console.log(numOfMonitors)


// functions with variables 

const plantNeedsWater = function(day, plantNeedsWater) {
    if (day === 'Wednesday') {
      return true;
    } else {
        return false;
    }
  }
  
  console.log(plantNeedsWater('Tuesday'));
  
  
// arrow functions 

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

// concise form (no parentheses when 1 parameter)

const plantNeedsWater = day => day === 'Wednesday'
? true : false;

// accessing properties 

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};
  
let crewCount = spaceship.numCrew;
  
let planetArray = spaceship.flightPath;

console.log(planetArray + crewCount )
  

// another way of accessing properties

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
let propName =  'Active Mission';
  
let isActive = spaceship['Active Mission'];
  
console.log(spaceship[propName])

// deleting and changing the properties

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
spaceship.color = 'glorious gold';
  
spaceship.numEngines = 9;
  
delete spaceship['Secret Mission']
  
console.log(spaceship)

// creating objects and appending methods 

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = { // object 
  retreat () { // method
    console.log(retreatMessage)
  }, takeOff () { // other object seperated by comma
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();

alienShip.takeOff();

// accessing nested objects 
let spaceship = {
  passengers: [{name: 'Space Dog'}], 
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0] 

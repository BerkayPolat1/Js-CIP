// this keyword 

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo () {
      return (`I am ${this.model} and my current energy level is ${this.energyLevel}.`) // accessing other properties of robot
    }
  };
  
console.log(robot.provideInfo()); 


// get method (not using parentheses to call)

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};

console.log(robot.energyLevel);


// factory functions

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep () {
      console.log('Beep Boop')
    }
  }
};

const tinCan = robotFactory('P-500', true);

tinCan.beep()


// shorthand notation of reiterated properties of objects 

function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)


// destructed assignment (making properties variables shorthand)


const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};


 const { functionality } = robot // or 

const functionality = robot.functionality

functionality.beep()


// built-in object methods

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};


const robotKeys = Object.keys(robot);
console.log(robotKeys);
const robotEntries = Object.entries(robot)
console.log(robotEntries);



const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);

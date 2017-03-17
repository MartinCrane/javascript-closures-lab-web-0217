
const app = "I don't do much."

function bumpCounter() {

  var counter = 0;

  function addBump() {
    return counter = counter + 1;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps
  };
}

const createAnimal = (animalType) => {

  const devious = (deadlyDevice) => {
    return {
      deadlyDevice,
      animalType
    }
  }
  return devious
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')

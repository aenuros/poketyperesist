// Defensive
// the weaknesses each type has. e.g. a normal type receives 2x from fighting type

var normal = {
  normal:1,
  fire:1,
  water:1,
  electric:1,
  grass:1,
  ice:1,
  fighting:2,
  poison:1,
  ground:1,
  flying:1,
  psychic:1,
  bug:1,
  rock: 1,
  ghost:0,
  dragon:1,
  dark:1,
  steel: 1,
  fairy:1
}

var fire = {
  normal:1,
  fire:0.5,
  water:2,
  electric:1,
  grass:0.5,
  ice:0.5,
  fighting:1,
  poison:1,
  ground:2,
  flying:1,
  psychic:1,
  bug:0.5,
  rock:2,
  ghost:1,
  dragon:1,
  dark:1,
  steel:0.5,
  fairy:0.5
}

var water = {
  normal:1,
  fire:0.5,
  water:0.5,
  electric:2,
  grass:2,
  ice:0.5,
  fighting:1,
  poison:1,
  ground:1,
  flying:1,
  psychic:1,
  bug:1,
  rock:1,
  ghost:1,
  dragon:1,
  dark:1,
  steel:0.5,
  fairy:1
}

var electric = {
  normal:1,
  fire:1,
  water:1,
  electric:0.5,
  grass:1,
  ice:1,
  fighting:1,
  poison:1,
  ground:2,
  flying:0.5,
  psychic:1,
  bug:1,
  rock:1,
  ghost:1,
  dragon:1,
  dark:1,
  steel:0.5,
  fairy:1
}

var grass = {
  normal:1,
  fire:2,
  water:0.5,
  electric:0.5,
  grass:0.5,
  ice:2,
  fighting:1,
  poison:2,
  ground:0.5,
  flying:2,
  psychic:1,
  bug:2,
  rock:1,
  ghost:1,
  dragon:1,
  dark:1,
  steel:1,
  fairy:1
}

var ice = {
  normal:1,
  fire:2,
  water:1,
  electric:1,
  grass:1,
  ice:0.5,
  fighting:2,
  poison:1,
  ground:1,
  flying:1,
  psychic:1,
  bug:1,
  rock:2,
  ghost:1,
  dragon:1,
  dark:1,
  steel:2,
  fairy:1
}

var fighting = {
  normal:1,
  fire:1,
  water:1,
  electric:1,
  grass:1,
  ice:1,
  fighting:1,
  poison:1,
  ground:1,
  flying:2,
  psychic:2,
  bug:0.5,
  rock:0.5,
  ghost:1,
  dragon:1,
  dark:0.5,
  steel:1,
  fairy:2
}

var poison = {
  normal:1,
  fire:1,
  water:1,
  electric:1,
  grass:0.5,
  ice:1,
  fighting:0.5,
  poison:0.5,
  ground:2,
  flying:1,
  psychic:2,
  bug:0.5,
  rock:1,
  ghost:1,
  dragon:1,
  dark:1,
  steel:1,
  fairy:0.5
}

var ground = {
  normal:1,
  fire:1,
  water:2,
  electric:0,
  grass:2,
  ice:2,
  fighting:1,
  poison:0.5,
  ground:1,
  flying:1,
  psychic:1,
  bug:1,
  rock:0.5,
  ghost:1,
  dragon:1,
  dark:1,
  steel:1,
  fairy:1
}

var flying = {
  normal:1,
  fire:1,
  water:1,
  electric:2,
  grass:0.5,
  ice:2,
  fighting:0.5,
  poison:1,
  ground:0,
  flying:1,
  psychic:1,
  bug:0.5,
  rock:2,
  ghost:1,
  dragon:1,
  dark:1,
  steel:1,
  fairy:1
}

var psychic = {
  normal:1,
  fire:1,
  water:1,
  electric:1,
  grass:1,
  ice:1,
  fighting:0.5,
  poison:1,
  ground:1,
  flying:1,
  psychic:0.5,
  bug:2,
  rock:1,
  ghost:2,
  dragon:1,
  dark:2,
  steel:1,
  fairy:1
}

var bug = {
  normal:1,
  fire:2,
  water:1,
  electric:1,
  grass:0.5,
  ice:1,
  fighting:0.5,
  poison:1,
  ground:0.5,
  flying:2,
  psychic:1,
  bug:1,
  rock:2,
  ghost:1,
  dragon:1,
  dark:1,
  steel:1,
  fairy:1
}

var rock = {
  normal:0.5,
  fire:0.5,
  water:2,
  electric:1,
  grass:2,
  ice:1,
  fighting:2,
  poison:0.5,
  ground:2,
  flying:0.5,
  psychic:1,
  bug:1,
  rock:1,
  ghost:1,
  dragon:1,
  dark:1,
  steel:2,
  fairy:1
}

var ghost = {
  normal:0,
  fire:1,
  water:1,
  electric:1,
  grass:1,
  ice:1,
  fighting:0,
  poison:0.5,
  ground:1,
  flying:1,
  psychic:1,
  bug:0.5,
  rock:1,
  ghost:2,
  dragon:1,
  dark:2,
  steel:1,
  fairy:1
}

var dragon = {
  normal:1,
  fire:0.5,
  water:0.5,
  electric:0.5,
  grass:0.5,
  ice:2,
  fighting:1,
  poison:1,
  ground:1,
  flying:1,
  psychic:1,
  bug:1,
  rock:1,
  ghost:1,
  dragon:2,
  dark:1,
  steel:1,
  fairy:2,
}

var dark = {
  normal:1,
  fire:1,
  water:1,
  electric:1,
  grass:1,
  ice:1,
  fighting:2,
  poison:1,
  ground:1,
  flying:1,
  psychic:0,
  bug:2,
  rock:1,
  ghost:0.5,
  dragon:1,
  dark:0.5,
  steel:1,
  fairy:2
}

var steel = {
  normal:0.5,
  fire:2,
  water:1,
  electric:1,
  grass:0.5,
  ice:0.5,
  fighting:2,
  poison:0,
  ground:2,
  flying:0.5,
  psychic:0.5,
  bug:0.5,
  rock:0.5,
  ghost:1,
  dragon:0.5,
  dark:1,
  steel:0.5,
  fairy:0.5
}

var fairy = {
  normal:1,
  fire:1,
  water:1,
  electric:1,
  grass:1,
  ice:1,
  fighting:0.5,
  poison:2,
  ground:1,
  flying:1,
  psychic:1,
  bug:0.5,
  rock:1,
  ghost:1,
  dragon:0,
  dark:0.5,
  steel:2,
  fairy:1
}


/*
for (var property1 in firstType) {
  if (firstType[property1] > 1) {
    console.log(property1);
  }
}

console.log("/////");

for (var weakness in secondType) {
  if (secondType[weakness] > 1) {
    console.log(weakness);
  }
}

console.log("/////");
*/



function getWeakness() {

  let firstType = document.getElementById("first-type-select").value;
  let secondType = document.getElementById("second-type-select").value;

  console.log(firstType + secondType);

  // convert the text to the object
  switch (firstType) {
    case 'normal':
      firstType = normal;
      break;
    case 'fire':
      firstType = fire;
      break;
    case 'water':
      firstType = water;
      break;
    case 'electric':
      firstType = electric;
      break;
    case 'grass':
      firstType = grass;
      break;
    case 'ice':
      firstType = ice;
      break;
    case 'fighting':
      firstType = fighting;
      break;
    case 'poison':
      firstType = poison;
      break;
    case 'ground':
      firstType = ground;
      break;
    case 'flying':
      firstType = flying;
      break;
    case 'psychic':
      firstType = psychic;
      break;
    case 'bug':
      firstType = bug;
      break;
    case 'rock':
      firstType = rock;
      break;
    case 'ghost':
      firstType = ghost;
      break;
    case 'dragon':
      firstType = dragon;
      break;
    case 'dark':
      firstType = dark;
      break;
    case 'steel':
      firstType = steel;
      break;
    case 'fairy':
        firstType = fairy;
        break;
    default:
      console.log("An error occurred.");
  }

  switch (secondType) {
    case 'normal':
      secondType = normal;
      break;
    case 'fire':
      secondType = fire;
      break;
    case 'water':
      secondType = water;
      break;
    case 'electric':
      secondType = electric;
      break;
    case 'grass':
      secondType = grass;
      break;
    case 'ice':
      secondType = ice;
      break;
    case 'fighting':
      secondType = fighting;
      break;
    case 'poison':
      secondType = poison;
      break;
    case 'ground':
      secondType = ground;
      break;
    case 'flying':
      secondType = flying;
      break;
    case 'psychic':
      secondType = psychic;
      break;
    case 'bug':
      secondType = bug;
      break;
    case 'rock':
      secondType = rock;
      break;
    case 'ghost':
      secondType = ghost;
      break;
    case 'dragon':
      secondType = dragon;
      break;
    case 'dark':
      secondType = dark;
      break;
    case 'steel':
      secondType = steel;
      break;
    case 'fairy':
        secondType = fairy;
        break;
    case 'na':
        secondType = "na";
        break;
    default:
      console.log("An error occurred.");
  }

  console.log(firstType + secondType);

// clear the inner html of typeOutput
document.getElementById("typeOutput").innerHTML = "";

if (secondType == "na" ) {
  console.log("na2na");
  console.log(firstType[weakness]);
 for (var weakness in firstType){
  if (firstType[weakness] >= 2) {
  document.getElementById("typeOutput").innerHTML += '<p>' + weakness + ": " + (firstType[weakness]) + "x" + '</p>';
  }
  }
}
 else {
   for (var weakness in firstType,secondType) {

     if (firstType == secondType) {
       if (firstType[weakness] >= 2) {
       document.getElementById("typeOutput").innerHTML += '<p>' + weakness + ": " + (firstType[weakness]) + "x" + '</p>';
       }
     }
     else if ((firstType[weakness] * secondType[weakness]) >= 2) {
       document.getElementById("typeOutput").innerHTML += '<p>' + weakness + ": " + (firstType[weakness] * secondType[weakness]) + "x" + '</p>';
     }
   }
  }

}

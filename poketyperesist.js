
//type resistance eg. normal against rock deals 0.5x damage
var normal = {
  normal:1,
  fire:1,
  water:1,
  electric:1,
  grass:1,
  ice:1,
  fighting:1,
  poison:1,
  ground:1,
  flying:1,
  psychic:1,
  bug:1,
  rock: 0.5,
  ghost:1,
  dragon:1,
  dark:1,
  steel: 0.5,
  fairy:1
}

var fire = {
  normal:1,
  fire:0.5,
  water:0.5,
  electric:1,
  grass:2,
  ice:2,
  fighting:1,
  poison:1,
  ground:1,
  flying:1,
  psychic:1,
  bug:2,  rock:0.5,
  ghost:1,
  dragon:0.5,
  dark:1,
  steel:2,
  fairy:1
}

var water = {
  normal:1,
  fire:2,
  water:0.5,
  electric:1,
  grass:0.5,
  ice:1,
  fighting:1,
  poison:1,
  ground:2,
  flying:1,
  psychic:1,
  bug:1,
  rock:2,
  ghost:1,
  dragon:0.5,
  dark:1,
  steel:1,
  fairy:1
}

var electric = {
  normal:1,
  fire:1,
  water:2,
  electric:0.5,
  grass:0.5,
  ice:1,
  fighting:1,
  poison:1,
  ground:0,
  flying:2,
  psychic:1,
  bug:1,
  rock:1,
  ghost:1,
  dragon:0.5,
  dark:1,
  steel:1,
  fairy:1
}

var grass = {
  normal:1,
  fire:0.5,
  water:2,
  electric:1,
  grass:0.5,
  ice:1,
  fighting:1,
  poison:0.5,
  ground:2,
  flying:0.5,
  psychic:1,
  bug:0.5,
  rock:2,
  ghost:1,
  dragon:0.5,
  dark:1,
  steel:0.5,
  fairy:1
}

var ice = {
  normal:1,
  fire:0.5,
  water:0.5,
  electric:1,
  grass:2,
  ice:0.5,
  fighting:1,
  poison:1,
  ground:2,
  flying:2,
  psychic:1,
  bug:1,
  rock:1,
  ghost:1,
  dragon:2,
  dark:1,
  steel:0.5,
  fairy:1
}

var fighting = {
  normal:2,
  fire:1,
  water:1,
  electric:1,
  grass:1,
  ice:2,
  fighting:1,
  poison:0.5,
  ground:1,
  flying:0.5,
  psychic:0.5,
  bug:0.5,
  rock:2,
  ghost:0,
  dragon:1,
  dark:2,
  steel:2,
  fairy:0.5
}

var poison = {
  normal:1,
  fire:1,
  water:1,
  electric:1,
  grass:2,
  ice:1,
  fighting:1,
  poison:0.5,
  ground:0.5,
  flying:1,
  psychic:1,
  bug:1,
  rock:0.5,
  ghost:0.5,
  dragon:1,
  dark:1,
  steel:0,
  fairy:2
}

var ground = {
  normal:1,
  fire:2,
  water:1,
  electric:2,
  grass:0.5,
  ice:1,
  fighting:1,
  poison:2,
  ground:1,
  flying:0,
  psychic:1,
  bug:0.5,
  rock:2,
  ghost:1,
  dragon:1,
  dark:1,
  steel:2,
  fairy:1
}

var flying = {
  normal:1,
  fire:1,
  water:1,
  electric:0.5,
  grass:2,
  ice:1,
  fighting:2,
  poison:1,
  ground:1,
  flying:1,
  psychic:1,
  bug:2,
  rock:0.5,
  ghost:1,
  dragon:1,
  dark:1,
  steel:0.5,
  fairy:1
}

var psychic = {
  normal:1,
  fire:1,
  water:1,
  electric:1,
  grass:1,
  ice:1,
  fighting:2,
  poison:2,
  ground:1,
  flying:1,
  psychic:0.5,
  bug:1,
  rock:1,
  ghost:1,
  dragon:1,
  dark:0,
  steel:0.5,
  fairy:1
}

var bug = {
  normal:1,
  fire:0.5,
  water:1,
  electric:1,
  grass:2,
  ice:1,
  fighting:0.5,
  poison:0.5,
  ground:1,
  flying:0.5,
  psychic:2,
  bug:1,
  rock:1,
  ghost:0.5,
  dragon:1,
  dark:2,
  steel:0.5,
  fairy:0.5
}

var rock = {
  normal:1,
  fire:2,
  water:1,
  electric:1,
  grass:1,
  ice:2,
  fighting:0.5,
  poison:1,
  ground:0.5,
  flying:2,
  psychic:1,
  bug:2,
  rock:1,
  ghost:1,
  dragon:1,
  dark:1,
  steel:0.5,
  fairy:1
}

var ghost = {
  normal:0,
  fire:1,
  water:1,
  electric:1,
  grass:1,
  ice:1,
  fighting:1,
  poison:1,
  ground:1,
  flying:1,
  psychic:2,
  bug:1,
  rock:1,
  ghost:2,
  dragon:1,
  dark:0.5,
  steel:1,
  fairy:1
}

var dragon = {
  normal:1,
  fire:1,
  water:1,
  electric:1,
  grass:1,
  ice:1,
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
  steel:0.5,
  fairy:0
}

var dark = {
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
  psychic:2,
  bug:1,
  rock:1,
  ghost:2,
  dragon:1,
  dark:0.5,
  steel:1,
  fairy:0.5
}

var steel = {
  normal:1,
  fire:0.5,
  water:0.5,
  electric:0.5,
  grass:1,
  ice:2,
  fighting:1,
  poison:1,
  ground:1,
  flying:1,
  psychic:1,
  bug:1,
  rock:2,
  ghost:1,
  dragon:1,
  dark:1,
  steel:0.5,
  fairy:2
}

var fairy = {
  normal:1,
  fire:0.5,
  water:1,
  electric:1,
  grass:1,
  ice:1,
  fighting:2,
  poison:0.5,
  ground:1,
  flying:1,
  psychic:1,
  bug:1,
  rock:1,
  ghost:1,
  dragon:2,
  dark:2,
  steel:0.5,
  fairy:1
}

function getType() {

  let selectType = document.getElementById("move-type-select").value;

  switch (selectType) {
    case 'normal':
      moveType = normal;
      break;
    case 'fire':
      moveType = fire;
      break;
    case 'water':
      moveType = water;
      break;
    case 'electric':
      moveType = electric;
      break;
    case 'grass':
      moveType = grass;
      break;
    case 'ice':
      moveType = ice;
      break;
    case 'fighting':
      moveType = fighting;
      break;
    case 'poison':
      moveType = poison;
      break;
    case 'ground':
      moveType = ground;
      break;
    case 'flying':
      moveType = flying;
      break;
    case 'psychic':
      moveType = psychic;
      break;
    case 'bug':
      moveType = bug;
      break;
    case 'rock':
      moveType = rock;
      break;
    case 'ghost':
      moveType = ghost;
      break;
    case 'dragon':
      moveType = dragon;
      break;
    case 'dark':
      moveType = dark;
      break;
    case 'steel':
      moveType = steel;
      break;
    case 'fairy':
        moveType = fairy;
        break;
    default:
      console.log("An error occurred.");
  }

  let type1 = document.getElementById("pokemon-first-type").value;;
  let type2 = document.getElementById("pokemon-second-type").value;;

  //if pokemon only has one type
  if (type2 == "none") {
    totalEffectiveness = moveType[type1];
  }
  else {
    totalEffectiveness = moveType[type1] * moveType[type2];
  }

  document.getElementById("typeOutput").innerHTML = "Total effectiveness: "+ totalEffectiveness + "x";

}

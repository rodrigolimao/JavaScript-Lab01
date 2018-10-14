// Step 1 - Complete the function:
// Argument: Accepts an array
// Return: Returns a random element from the array
function randomArrayElement (arr) {
  // Step 1a - Return a random elment from the array
return arr[Math.floor(Math.random() * arr.length)];
}


// Step 2 - Complete the function:
// Argument: None
// Return: Returns a string from the combined array elements
function generateCharacterName() {
  // Step 2a - Store a random adjective into a variable named: 'adjective'
  // from the adjectives array
  var adjective = adjectives[Math.round(Math.random()*adjectives.length)];

  // Step 2a - Store a random first noun into a variable named: 'firstNoun'
  // from the firstNouns array
  var firstNoun = firstNouns[Math.round(Math.random()*firstNouns.length)];

  // Step 2a - Store a random second noun into a variable named: 'secondNoun'
  // from the secondNouns array
  var secondNoun = secondNouns[Math.round(Math.random()*secondNouns.length)];

  // Step 2b - Use a ternary to establish if the adjective is empty
  // If it is, prepend "The" to the adjective using string interpolation
  // Else, return an empty string
  adjective === "" ? "The" + adjective : "";

  // Step 2c - Return a string by first placing adjective, firstNoun
  // and secondNoun into an array, and then using the join array
  // method to convert it to a string

  let joinArray = [adjective, firstNoun, secondNoun];
  let characterString = joinArray.join(" ");
  return characterString;
}

// Step 3a - Select and store the H1 element
// in a variable named 'h1'
var h1 = document.querySelector('h1');

// Step 3b - Select and store the origin h2 element
// in a variable named 'originH2'
var originH2 = document.querySelector('h2');

// Step 3c - Select and store the origin p element
// in a variable named 'originP'
var originP = document.querySelector('p');

// Step 3d - Select and store the tbody of the stats table
// in a variable named 'tbody'
var tbody = document.querySelector('tbody');


// Step 4a - Randomly select an alter ego from the alterEgos array
// and store it a variable named 'alterEgo'
var alterEgo = alterEgos[Math.round(Math.random()*alterEgos.length)];

// Step 4b - Generate a character name
// and store it a variable named 'character'
var character = generateCharacterName();

// Step 4c - Randomly select a power from the powers array
// and store it a variable named 'power'
var power = powers[Math.round(Math.random()*powers.length)];

// Step 4a - Randomly select a character type from this list of types:
// superhero, villain, mercenary, anti-hero
// By passing it as an array to the randomArrayElement function as an
// argument.
// Store the returned value into a variable named 'type'
var characterType = ["superhero","villain","mercenary","anti-hero"];

 function randomArrayElement(characterType){
var type = characterType[Math.round(Math.random()*characterType.length)];
return type;
}


// Step 5 - Replace the h1 content ':character:' with your character's name
document.getElementsByClassName("pagetitle")[0].innerHTML = character;

// Step 6 - Create a multidimensional array in this structure:
// [ [ 'Label', value ] ]
// and store it in a constant variable named 'valueAndLabel'.
// The labels (and order) will be:
// Character Name, Alter Ego, Power, and Character Type
const valueAndLabel = [
  ['Character Name', character],
  ['Alter Ego', alterEgo],
  ['Power', power],
  ['Character Type', randomArrayElement(characterType)]
];

for(let tdLabelAndValue of valueAndLabel) {
  // Step 6a - Using destructuring, create 2 new variables named 'label' and 'value',
  // and store the elements in tdLabelAndValue in them

let [label, value] = tdLabelAndValue;

  // Step 6b - Create a new 'tr' element
  // and store it in a variable named 'tr'
var tr = document.createElement('tr');

  // Step 6c - Create a new 'td' element
  // and store it in a variable named 'tdLabel'
var tdLabel = document.createElement('td');

  // Step 6d - Create a new 'td' element
  // and store it in a variable named 'tdValue'
var tdValue = document.createElement('td');

  // Step 6e - Set the tdLabel text to equal the value from 'label'
tdLabel.textContent = label;

  // Step 6f - Set the tdValue text to equal the value from 'value'
tdValue.textContent = value;

  tr.appendChild(tdLabel);
  tr.appendChild(tdValue);
  tbody.appendChild(tr);
}

// Step 7 - Select and store a random origin from the array origins.
// Store it in a variable named 'story'
var story = origins[Math.round(Math.random()*origins.length)];

// Step 7a - Replace the originH2 ':character:' content with our character name
document.getElementsByClassName("character2")[0].innerHTML = generateCharacterName();

// Step 7b - Replace all instances of ':character:' in 'story' with our
// character name
story = story.replace(':character:', character);

// Step 7c - Replace all instances of ':alterego:' in 'story' with our
// alter ego
story = story.replace(':alterego:', alterEgo);

// Step 7d - Replace all instances of ':power:' in 'story' with our
// power
story = story.replace(':power:', power);

// Step 7e - Output the story to the origin paragraph tag
originP.textContent = story;

console.log(promptArray);

let crewMember = 2;
const crew = [];
const crewPoints = [];

//query selectors
const form = document.querySelector("#crewForm");
const inputContainer = document.querySelector("#inputContainer");
const formButton = document.querySelector("#submitCrew");
const readyButton = document.querySelector("#ready");
const startMenu = document.querySelector("#start");
const game = document.querySelector("#game");
const promptContainer = document.querySelector("#promptContainer");
const nextPrompt = document.querySelector("#nextPrompt");
const reset = document.querySelector("#reset");

// adding input field if more players should be added
function addCrewMember(e) {
  // prevents page reloading by default
  e.preventDefault();
  // increase number of crew members
  crewMember++;
  //create new input element and assign attributes
  let newElement = document.createElement("input");
  newElement.setAttribute("type", "text");
  newElement.setAttribute("id", "crew" + crewMember);
  newElement.setAttribute("name", "crew" + crewMember);
  // append the new input element to the end of the container of crew member input fields
  inputContainer.appendChild(newElement);
}

// function for setting up a question in the prompt box
function nextQuestion() {
  // finds number lower than promptArray.length but higher or equal to min (indeces)
  let randomNumber = Math.floor(Math.random() * promptArray.length);
  console.log(randomNumber);
  promptContainer.innerHTML = promptArray[randomNumber];
}

// starting game function after user clicks ready
function startGame(e) {
  // prevents page reloading by default
  e.preventDefault();
  // for loop goes through the input elements inside the input container
  for (let i = 0; i < inputContainer.children.length; i++) {
    console.log(inputContainer.children[i].value);
    // push each input element's value (name) into the crew array
    let crewName = inputContainer.children[i].value;
    crew.push(crewName);
    // crew points will need as many points as crew members (input elements)
    crewPoints.push(0);
  }

  console.log(
    `Current crew consists of : ${crew} and their points are ${crewPoints}`
  );

  // hide the starting menu
  startMenu.setAttribute("style", "display: none");
  game.setAttribute("style", "display: block");
  nextQuestion();
}

function resetFn() {
  location.reload();
}

// adding click event to button so input field is added for a new crew member
formButton.addEventListener("click", addCrewMember);
readyButton.addEventListener("click", startGame);
nextPrompt.addEventListener("click", nextQuestion);
reset.addEventListener("click", resetFn);

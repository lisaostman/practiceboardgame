let crewMember = 2;
const crew = [];

//query selectors
const form = document.querySelector("#crewForm");
const inputContainer = document.querySelector("#inputContainer");
const formButton = document.querySelector("#submitCrew");
const readyButton = document.querySelector("#ready");

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

// starting game function after user clicks ready
function startGame(e) {
  e.preventDefault();
}

// adding click event to button so input field is added for a new crew member
formButton.addEventListener("click", addCrewMember);
readyButton.addEventListener("click", startGame);

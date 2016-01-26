//nav menu animation
var nav = document.querySelector("#nav-button");
nav.addEventListener("click",clickNavButton);
var navMenu = document.querySelector("#menu");
var content = document.querySelector("#content");

function clickNavButton(event){
  var open = navMenu.style.left == "0px";
  var close = navMenu.style.left == "-200px";

  if (open == true) {
    navMenu.style.left = "-200px";
    content.style.left = "0px";

  }
  else {
    navMenu.style.left = "0px";
    content.style.left = "200px";
  }
}



//start game
var startGame = document.querySelector("#start-game");
startGame.addEventListener("click",clickStartGame);

function clickStartGame(event) {
  console.log("start!")
  index = getRandomIndex();
  countryIndexCode = getCurrentAbbrev();
  getCurrentName();
  removeTransparentDiv();
}

function getRandomIndex() {
  return Math.floor(Math.random() * countryListName.length);
}


function getCurrentName(){
  var guessCountry = countryListName[index];
  guessCountryDiv = document.querySelector("#country-name");
  guessCountryDiv.textContent = guessCountry;
}

function getCurrentAbbrev() {
   return countryListAbbrev[index];
}

function removeTransparentDiv(){
  var div = document.querySelector("#transparent");
  div.remove();
}

//outcome responses
var correct = ["Yay! Great job!", "Correct! Try another!", "Wow! You're a geographical genius!"];
var wrong = ["Nope! Try again","Sorry...try again","Hmm you're not great at this"];

//number of guesses
var guessCounter = document.querySelector("#guess-counter");


function guessIncorrectly(){
  var startingCount = guessCounter.textContent;
  var addGuess = parseInt(startingCount) + 1;
  guessCounter.textContent = addGuess;
}


// var hint = document.querySelector("#hint");
// hint.addEventListener("click",getHint);
//
// function getHint(event){
//   var hintText = document.querySelector("#gen-hint")
//   hintText.textContent = countryRegion[index];
// }

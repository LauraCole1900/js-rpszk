// Global variables
let wins = 0;
let losses = 0;
let draws = 0;
const choices = ["R", "P", "S", "Z", "K"];
let userConfirm;
let userChoice = "";
let computerChoice = "";
const winDiv = document.querySelector("#wins");
const lossDiv = document.querySelector("#losses");
const drawDiv = document.querySelector("#draws");
const playerBtnsDiv = document.querySelector("#playerBtns");


// Function to start the game
const gameStart = () => {
  const checkForGame = document.getElementById("playText");
  if (checkForGame) {
    return;
  } else {
    const textRowDiv = document.createElement("div");
    textRowDiv.setAttribute("id", "playText");
    textRowDiv.setAttribute("class", "row col-12 textRow");
    const btnRowDiv = document.createElement("div");
    btnRowDiv.setAttribute("class", "row buttonRow");

    const playNow = document.createElement("p");
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");
    const lizardBtn = document.createElement("button");
    const spockBtn = document.createElement("button");

    playNow.textContent = "Please select a button to begin play."
    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";
    scissorsBtn.textContent = "Scissors";
    lizardBtn.textContent = "Lizard";
    spockBtn.textContent = "Spock";

    rockBtn.setAttribute("id", "R");
    paperBtn.setAttribute("id", "P");
    scissorsBtn.setAttribute("id", "S");
    lizardBtn.setAttribute("id", "Z");
    spockBtn.setAttribute("id", "K");
    rockBtn.setAttribute("class", "playerBtn");
    paperBtn.setAttribute("class", "playerBtn");
    scissorsBtn.setAttribute("class", "playerBtn");
    lizardBtn.setAttribute("class", "playerBtn");
    spockBtn.setAttribute("class", "playerBtn");

    playerBtnsDiv.appendChild(textRowDiv)
    textRowDiv.appendChild(playNow);
    playerBtnsDiv.appendChild(btnRowDiv);
    btnRowDiv.appendChild(rockBtn);
    btnRowDiv.appendChild(paperBtn);
    btnRowDiv.appendChild(scissorsBtn);
    btnRowDiv.appendChild(lizardBtn);
    btnRowDiv.appendChild(spockBtn);

    rockBtn.addEventListener("click", userChoose);
    paperBtn.addEventListener("click", userChoose);
    scissorsBtn.addEventListener("click", userChoose);
    lizardBtn.addEventListener("click", userChoose);
    spockBtn.addEventListener("click", userChoose);
  }
}

const checkClick = (e) => {
  console.log(e.target);
}


// Function that grabs the user's choice from their button-click
const userChoose = (e) => {
  const userChoiceEl = document.getElementById("userChoice");
  const computerChoiceEl = document.getElementById("computerChoice");
  const resultsChoiceEl = document.getElementById("resultsChoice");
  if (userChoiceEl) {
    playerBtnsDiv.removeChild(userChoiceEl);
    playerBtnsDiv.removeChild(computerChoiceEl);
    playerBtnsDiv.removeChild(resultsChoiceEl);
  }
  userChoice = e.target.id;
  let choiceText = "";
  switch (userChoice) {
    case "R":
      choiceText = "Rock";
      break;
    case "P":
      choiceText = "Paper";
      break;
    case "S":
      choiceText = "Scissors";
      break;
    case "Z":
      choiceText = "Lizard";
      break;
    case "K":
      choiceText = "Spock";
      break;
    default:
      choiceText = "Undefined. Please choose again."
  }
  const userChoiceText = document.createElement("p");
  userChoiceText.textContent = `You chose ${choiceText}.`
  userChoiceText.setAttribute("class", "user choice col-12");
  userChoiceText.setAttribute("id", "userChoice");
  playerBtnsDiv.appendChild(userChoiceText);
  compareChoice(choices, userChoice);
}


// Function to compare user's choice to computer's choice and determine win, loss, or draw
const compareChoice = (choices, userData) => {
  const choiceIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[choiceIndex];
  const computerChoiceText = document.createElement("p");
  let compText = "";
  switch (computerChoice) {
    case "R":
      compText = "Rock";
      break;
    case "P":
      compText = "Paper";
      break;
    case "S":
      compText = "Scissors";
      break;
    case "Z":
      compText = "Lizard";
      break;
    case "K":
      compText = "Spock";
      break;
    default:
      compText = "Undefined. Please choose again."
  }
  computerChoiceText.textContent = `Computer chose ${compText}.`
  computerChoiceText.setAttribute("class", "computer choice col-12");
  computerChoiceText.setAttribute("id", "computerChoice");
  playerBtnsDiv.appendChild(computerChoiceText);
  const resultText = document.createElement("p");
  resultText.setAttribute("class", "results choice col-12");
  resultText.setAttribute("id", "resultsChoice");
  if (userData === computerChoice) {
    resultText.textContent = `It's a draw!`;
    draws++;
    setText(drawDiv, "Draws", draws);
  } else if (userChoice === "R" && computerChoice === "S" || userChoice === "R" && computerChoice === "Z" || userChoice === "P" && computerChoice === "R" || userChoice === "P" && computerChoice === "K" || userChoice === "S" && computerChoice === "P" || userChoice === "S" && computerChoice === "Z" || userChoice === "Z" && computerChoice === "P" || userChoice === "Z" && computerChoice === "K" || userChoice === "K" && computerChoice === "R" || userChoice === "K" && computerChoice === "S") {
    resultText.textContent = `You win!`;
    wins++;
    setText(winDiv, "Wins", wins);
  } else {
    resultText.textContent = `Computer wins!`;
    losses++;
    setText(lossDiv, "Losses", losses);
  }
  playerBtnsDiv.appendChild(resultText);
}


function setText(thisEl, title, text) {
  thisEl.textContent = `${title}: ${text}`;
}

// Renders initial wins, losses & draws to page
setText(drawDiv, "Draws", draws);
setText(winDiv, "Wins", wins);
setText(lossDiv, "Losses", losses);


// calls gameStart function on button click
const startButton = document.querySelector("#startBtn");
startButton.addEventListener("click", gameStart);
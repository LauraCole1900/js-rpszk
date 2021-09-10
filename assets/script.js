// Global variables
let wins = 0;
let losses = 0;
let draws = 0;
const choices = ["R", "P", "S", "Z", "K"];
let userConfirm;
let userChoice = "";
let computerChoice = "";


// Function to start the game
const gameStart = () => {
  userConfirm = confirm("Welcome! Play 'Rock, Paper, Scissors, Lizard, Spock'?")
  userChoose(userConfirm);
}

// Function that grabs the user's input. Takes in the boolean from the above function.
const userChoose = (input) => {
  if (input) {
    var userInput = prompt("R, P, S, Z, K?");
    userChoice = userInput.toUpperCase();
    if (choices.includes(userChoice)) {
      compareChoice(choices, userChoice);
    } else {
      alert("I'm sorry, I didn't catch that.");
      userChoose(userConfirm);
    }
  } else {
    alert("Thanks for visiting!")
  }
}

// Function to compare user's choice to computer's choice and determine win, loss, or draw
const compareChoice = (choices, userData) => {
  var choiceIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[choiceIndex];
  if (userData === computerChoice) {
    alert("Computer chose " + computerChoice + ". It's a draw!");
    draws++;
    alert("Wins: " + wins + "\nLosses: " + losses + "\nDraws: " + draws);
    playAgain();
  } else if (userChoice === "R" && computerChoice === "S" || userChoice === "R" && computerChoice === "Z" || userChoice === "P" && computerChoice === "R" || userChoice === "P" && computerChoice === "K" || userChoice === "S" && computerChoice === "P" || userChoice === "S" && computerChoice === "Z" || userChoice === "Z" && computerChoice === "P" || userChoice === "Z" && computerChoice === "K" || userChoice === "K" && computerChoice === "R" || userChoice === "K" && computerChoice === "S") {
    alert("Computer chose " + computerChoice + ". You win!");
    wins++;
    alert("Wins: " + wins + "\nLosses: " + losses + "\nDraws: " + draws);
    playAgain();
  } else {
    alert("Computer chose " + computerChoice + ". Computer wins!");
    losses++;
    alert("Wins: " + wins + "\nLosses: " + losses + "\nDraws: " + draws);
    playAgain();
  }
}

// Function to ask player whether they want to play again
function playAgain() {
  var again = confirm("Play again?");
  if (again) {
    userChoose(again);
  } else {
    alert("Thanks for playing! Wins: " + wins + "\nLosses: " + losses + "\nDraws: " + draws)
  }
}


// calls gameStart function
gameStart();
$(document).ready(function () {

  // Global variables
  let wins = 0;
  let losses = 0;
  let draws = 0;
  const choices = ["R", "P", "S", "Z", "K"];
  let userChoice = "";
  let computerChoice = "";
  const winDiv = $("#wins");
  const lossDiv = $("#losses");
  const drawDiv = $("#draws");
  const playerBtnsDiv = $("#playerBtns");
  const resultsDiv = $("#results");

  const playerButtons = [
    {
      label: "Rock",
      idVal: "R",
      classVal: "playerBtn"
    },
    {
      label: "Paper",
      idVal: "P",
      classVal: "playerBtn"
    },
    {
      label: "Scissors",
      idVal: "S",
      classVal: "playerBtn"
    },
    {
      label: "Lizard",
      idVal: "Z",
      classVal: "playerBtn"
    },
    {
      label: "Spock",
      idVal: "K",
      classVal: "playerBtn"
    }
  ]


  // Function to start the game
  const gameStart = () => {
    const checkForGame = $("#playText");
    if (checkForGame.length > 0) {
      return;
    } else {
      const textRowDiv = $("<div>").attr("id", "playText").addClass("row col-12 textRow");
      const btnRowDiv = $("<div>").addClass("row buttonRow");

      const playNow = $("<p>").text("Please select a button to begin play.");
      $(textRowDiv).append(playNow);
      $(playerBtnsDiv).append(textRowDiv);

      $(playerButtons).each(function (i) {
        const buttonToPlay = $("<button>").text(playerButtons[i].label).attr("id", playerButtons[i].idVal).addClass(playerButtons[i].classVal);
        $(btnRowDiv).append(buttonToPlay);
      });

      $(playerBtnsDiv).append(btnRowDiv);
    }
  }


  // Function that grabs the user's choice from their button-click
  const userChoose = (e) => {
    if (e.target.id === "startBtn") {
      gameStart()
    } else {
      const userChoiceEl = $("#userChoice");
      if (userChoiceEl) {
        $(resultsDiv).empty();
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
      const userChoiceText = $("<p>").text(`You chose ${choiceText}.`).attr("id", "userChoice").attr("class", "user choice col-12");
      $(resultsDiv).append(userChoiceText);
      compareChoice(choices, userChoice);
    }
  }


  // Function to compare user's choice to computer's choice and determine win, loss, or draw
  const compareChoice = (choices, userData) => {
    const choiceIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[choiceIndex];
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
    const computerChoiceText = $("<p>").text(`Computer chose ${compText}.`).attr("id", "computerChoice").attr("class", "computer choice col-12");
    resultsDiv.append(computerChoiceText);
    const resultText = $("<p>").attr("id", "resultsChoice").attr("class", "results choice col-12");
    if (userData === computerChoice) {
      resultText.text(`It's a draw!`);
      draws++;
      setText(drawDiv, "Draws", draws);
    } else if (userChoice === "R" && computerChoice === "S" || userChoice === "R" && computerChoice === "Z" || userChoice === "P" && computerChoice === "R" || userChoice === "P" && computerChoice === "K" || userChoice === "S" && computerChoice === "P" || userChoice === "S" && computerChoice === "Z" || userChoice === "Z" && computerChoice === "P" || userChoice === "Z" && computerChoice === "K" || userChoice === "K" && computerChoice === "R" || userChoice === "K" && computerChoice === "S") {
      resultText.text(`You win!`);
      wins++;
      setText(winDiv, "Wins", wins);
    } else {
      resultText.text(`Computer wins!`);
      losses++;
      setText(lossDiv, "Losses", losses);
    }
    resultsDiv.append(resultText);
  }


  function setText(thisEl, title, text) {
    thisEl.text(`${title}: ${text}`);
  }

  
  // Renders initial wins, losses & draws to page
  setText(drawDiv, "Draws", draws);
  setText(winDiv, "Wins", wins);
  setText(lossDiv, "Losses", losses);


  // Listens for all button clicks
  $(document).on('click', 'button', userChoose);
});
// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages

// 3) Handle a player clicking a button

// 4) Handle generating random selections for the computer player
// 5) Compare the player choice to the computer choice, and check for a winner

// 6) Render a win/lose/tie message to the player
//    Include both player and computer selections in the message
//    Clearly indicate who won

/*-------------------------------- Constants --------------------------------*/
const choices = ["rock", "paper", "scissors"];
/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice;
let msg;
/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector("#result-display");
/*-------------------------------- Functions --------------------------------*/
const getPlayerChoice = (event) => {
  playerChoice = event.target.id;
};

const play = (event) => {
  getPlayerChoice(event);
  console.log(playerChoice);
};
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
};

/*----------------------------- Event Listeners -----------------------------*/
document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", play);
});

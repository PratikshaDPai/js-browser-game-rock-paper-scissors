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
const quotes = {
  rock: [
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Persistence and resilience only come from having been given the chance to work through difficult problems. – Gever Tulley",
    "A river cuts through rock, not because of its power, but because of its persistence. – James N. Watkins",
    "The strongest rocks are formed under the greatest pressure.",
    "Storms make trees take deeper roots.",
    "Be as solid as a rock, unshaken by the winds of change.",
    "Some are born strong, others are forged in the fires of adversity.",
    "It is not the mountain we conquer, but ourselves. – Sir Edmund Hillary",
    "Rocks do not move with the tide; they stand strong against the waves.",
    "Strength grows in the moments when you think you can't go on but keep going anyway.",
    "A diamond is just a rock that never gave up.",
    "The world breaks everyone, and afterward, some are strong at the broken places. – Ernest Hemingway",
    "The foundation of greatness is built on the stones of perseverance.",
    "To break a rock, you must strike it a thousand times—but on the thousand and first, it shatters.",
  ],
  paper: [
    "The pen is mightier than the sword. – Edward Bulwer-Lytton",
    "Knowledge will bring you the opportunity to make a difference. – Claire Fagin",
    "Words are, of course, the most powerful drug used by mankind. – Rudyard Kipling",
    "Paper holds the greatest weapon of all—ideas.",
    "A single sheet of paper can contain the wisdom of a thousand lifetimes.",
    "An idea, like a ghost, must be spoken to a little before it will explain itself. – Charles Dickens",
    "The pages of history are written by those who dare to dream and act.",
    "A single word can start a war, but a single page can end one.",
    "Knowledge is the most powerful tool in the universe—it never dulls, never breaks, and never runs out.",
    "The strongest warriors are not always the ones with swords, but the ones with pens.",
    "One book, one pen, one child, and one teacher can change the world. – Malala Yousafzai",
    "The best way to predict the future is to create it. – Peter Drucker",
    "A blank page is full of possibilities—what you write on it determines your destiny.",
    "Paper may be fragile, but what is written on it can last forever.",
    "Words can be sharper than swords, stronger than armies, and louder than explosions.",
    "The truth written down will outlast even the most unbreakable stone.",
    "Ink and paper are the tools of the wise, shaping the world without a single blow.",
    "Paper is the quietest and most powerful voice in the world.",
    "The scrolls of wisdom are mightier than the walls of fortresses.",
  ],
  scissors: [
    "If you want to achieve greatness, stop asking for permission and start cutting through the noise.",
    "A sword wields no strength unless the hand that holds it is courageous.",
    "A sharp mind cuts through ignorance like a blade through silk.",
    "It is not the size of the blade, but the precision of the cut that matters.",
    "To solve a problem, you sometimes need to slice right through it.",
  ],
  tie: [
    "Balance is not something you find, it’s something you create.",
    "Yin and Yang are not opposites; they complement and complete each other.",
    "The best way to resolve conflict is to realize there was no winner or loser—only understanding.",
    "A draw is not the end, but the beginning of a new strategy.",
    "Opposites exist to remind us that harmony is possible.",
    "The moon and the sun share the same sky, yet neither outshines the other.",
    "Equilibrium is achieved not by one side winning, but by both existing together.",
    "In the game of life, sometimes the wisest move is no move at all.",
    "A tie is a reminder that sometimes, we are evenly matched, not in battle, but in wisdom.",
    "Not every battle needs a winner—sometimes, peace is the greatest victory.",
  ],
};

/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice;
let msg;
let quote;
let isLost = false;
/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector("#result-display");
const quoteElement = document.querySelector("#quote");
const messageElement = document.querySelector("#message");
/*-------------------------------- Functions --------------------------------*/
const getPlayerChoice = (event) => {
  playerChoice = event.currentTarget.id; //make sure to log button id even if svg is clicked
};
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
};
const determineWinner = () => {
  if (playerChoice === computerChoice) {
    msg = "It's a Tie!";
    quote = getRandomQuote("tie");
    isLost = false;
  } else if (
    (playerChoice === choices[0] && computerChoice === choices[2]) ||
    (playerChoice === choices[1] && computerChoice === choices[0]) ||
    (playerChoice === choices[2] && computerChoice === choices[1])
  ) {
    quote = getRandomQuote(playerChoice);
    msg = "Congrats! You win!";
    isLost = false;
  } else {
    msg = "You lose! Try again?";
    quote = getRandomQuote(computerChoice);
    isLost = true;
  }
};

function getRandomQuote(winner) {
  const category = quotes[winner]; // Get the relevant category
  return category[Math.floor(Math.random() * category.length)]; // Pick a random quote
}
function toggleLossEffect(isLost) {
  if (isLost) {
    document.body.classList.add("lose"); // Apply pinkish-red background
    document.querySelectorAll("button").forEach(function (button) {
      button.classList.add("lose");
    });
  } else {
    document.body.classList.remove("lose"); // Revert to sage green
    document.querySelectorAll("button").forEach(function (button) {
      button.classList.remove("lose");
    });
  }
}

const render = () => {
  resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}`;
  quoteElement.textContent = `${quote}`;
  messageElement.textContent = msg;
  console.log(quote); // Displays a random  quote
};

const play = (event) => {
  getPlayerChoice(event);
  console.log(`getPlayerChoice.successful. Player choice: ${playerChoice}`);
  getComputerChoice(); // randomly selects computers choice, updates state
  console.log(
    `getComputerChoice.successful. Computer choice: ${computerChoice}`
  );
  determineWinner(); // determines winning result
  console.log(`determineWinner.successful. Computed message: ${msg}`);
  toggleLossEffect(isLost);
  render(); // renders result message back to the user
};

/*----------------------------- Event Listeners -----------------------------*/
document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", play);
});

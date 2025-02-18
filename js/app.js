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
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "A gem cannot be polished without friction, nor a man perfected without trials. – Seneca",
    "Stand firm as a rock, and the waves of life will crash around you, but never break you.",
    "Strength does not come from winning. Your struggles develop your strengths. – Arnold Schwarzenegger",
  ],
  paper: [
    "The pen is mightier than the sword. – Edward Bulwer-Lytton",
    "Knowledge will bring you the opportunity to make a difference. – Claire Fagin",
    "Words are, of course, the most powerful drug used by mankind. – Rudyard Kipling",
    "Paper holds the greatest weapon of all—ideas.",
    "A single sheet of paper can contain the wisdom of a thousand lifetimes.",
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
/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector("#result-display");
const quoteElement = document.querySelector("#quote");
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
  } else if (
    (playerChoice === choices[0] && computerChoice === choices[2]) ||
    (playerChoice === choices[1] && computerChoice === choices[0]) ||
    (playerChoice === choices[2] && computerChoice === choices[1])
  ) {
    quote = getRandomQuote(playerChoice);
    msg = "Congrats! You win!";
  } else {
    msg = "You lose! Try again?";
    quote = getRandomQuote(computerChoice);
  }
};

function getRandomQuote(winner) {
  const category = quotes[winner]; // Get the relevant category
  return category[Math.floor(Math.random() * category.length)]; // Pick a random quote
}

const render = () => {
  resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`;
  quoteElement.textContent = `${quote}`;
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
  render(); // renders result message back to the user
};

/*----------------------------- Event Listeners -----------------------------*/
document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", play);
});

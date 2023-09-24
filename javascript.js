Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

let playerScore = 0;

let computerScore = 0;

let totalGames = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  return prompt("Choose from Paper, Rock or Scissors only").toLowerCase();
}

function playRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();
  if (playerChoice === computerChoice) {
    totalGames += 1;
    return `It's a tie, you both chose ${computerChoice}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore += 1;
    totalGames += 1;
    return `${playerChoice} beats ${computerChoice}. Player wins this round.`.capitalize();
  } else if (
    (playerChoice === "scissors" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore += 1;
    totalGames += 1;
    return `${computerChoice} beats ${playerChoice}. Computer wins this round.`.capitalize();
  } else {
    return `Wrong input. Try again.`;
  }
}

function game() {
  for (; totalGames < 5; ) {
    console.log(playRound());
    console.log(playerScore);
    console.log(computerScore);
    console.log(totalGames);
  }
  if (playerScore > computerScore) {
    console.log("Player Wins the Game");
  } else if (computerScore > playerScore) {
    console.log("Computer Wins the Game");
  } else {
    console.log("It's a tie");
  }
  console.log(playerScore + " " + computerScore);
}

game();

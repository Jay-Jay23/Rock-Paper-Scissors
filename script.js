function getComputerChoice() {
  const words = ["rock", "paper", "scissors"];
  let randomPosition = Math.floor(Math.random() * words.length);
  let rndWord = words[randomPosition];

  return rndWord;
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player == "scissors" && computer == "paper") {
    return "You Win! " + player + " beats " + computer;
  } else if (player == "rock" && computer == "scissors") {
    return "You Win! " + player + " beats " + computer;
  } else if (player == "paper" && computer == "rock") {
    return "You Win! " + player + " beats " + computer;
  } else if (player == computer) {
    return "It's a draw";
  } else {
    return "You Lose! " + computer + " Beats " + player;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const userChoice = prompt(
      "Choose Between Rock, Paper, or Scissors" + " Round " + round
    );
    const results = playRound(userChoice, getComputerChoice());
    console.log(results);

    if (results.startsWith("You Win! ")) {
      playerScore++;
    } else if (results.startsWith("You Lose! ")) {
      computerScore++;
    }

    console.log("Scoreboard: " + playerScore + " VS " + computerScore);
  }

  if (playerScore > computerScore) {
    console.log(
      "Player Wins!!!" + " Final: " + playerScore + " VS " + computerScore
    );
  } else if (computerScore > playerScore) {
    console.log(
      "Computer Wins!!!" + " Final: " + playerScore + " VS " + computerScore
    );
  } else {
    console.log(
      "Game Tied!!!" + " Final: " + playerScore + " VS " + computerScore
    );
  }
}

game();

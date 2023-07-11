function getComputerChoice() {
  const words = ["rock", "paper", "scissors"];
  let randomPos = Math.floor(Math.random() * words.length);
  let rndWord = words[randomPos];

  console.log(rndWord);

  return rndWord;
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player == "scissors" && computer == "paper") {
    return "You Win! " + player + " beats " + computer;
  } else if (player == "rock" && computer == "scissors") {
    return "You Win! " + player + " beats " + computer;
  } else if (player === "paper" && computer === "rock") {
    return "You Win! " + player + " beats " + computer;
  } else if (player == computer) {
    return "It's a draw";
  } else {
    return "You Lose! " + computer + " Beats " + player;
  }
}

const userChoice = prompt("Choose Between Rock, Paper, or Scissors");
const results = playRound(userChoice, getComputerChoice());

console.log(results);

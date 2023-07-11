function getComputerChoice() {
  const words = ["Rock", "Paper", "Scissor"];
  let randomPos = Math.floor(Math.random() * words.length);
  let rndWord = words[randomPos];

  console.log(rndWord);
}

getComputerChoice();

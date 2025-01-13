const playerScoreEl = document.querySelector(".playerScore span");
const computerScoreEl = document.querySelector(".computerScore span");
const optionBtns = Array.from(document.querySelectorAll(".optionBtn"));
const playerImg = document.querySelector(".playerImg");
const computerImg = document.querySelector(".computerImg");
const roundEl = document.querySelector(".round");
const winnerEl = document.querySelector(".winner");
let playerScore = 0;
let computerScore = 0;
let round = 1;
const images = [
  "./assets/rock.png",
  "./assets/paper.png",
  "./assets/scissors.png",
];

const computerOptions = ["Rock", "Paper", "Scissor"];

initianGame();
function initianGame() {
  optionBtns.map((option) => option.addEventListener("click", clickOptions));
  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;
  roundEl.innerText = round;
}

let isChoosing = false;

function clickOptions() {
  if (
    [...optionBtns].some(
      (button) =>
        button.classList.contains("clickedOption") && isChoosing == true
    )
  ) {
    return;
  }
  if (round > 5) {
    return;
  }
  setTimeout(() => {
    round += 1;
    isChoosing = false;
  }, 2000);

  roundEl.innerText = round;

  isChoosing = true;
  this.classList.add("clickedOption");

  playerImg.classList.add("PlayeranimateImg");
  computerImg.classList.add("ComputeranimateImg");
  setTimeout(() => {
    playerImg.classList.remove("PlayeranimateImg");
    computerImg.classList.remove("ComputeranimateImg");
    switch (this.innerText) {
      case "Rock":
        playerImg.src = images[0];

        break;
      case "Paper":
        playerImg.src = images[1];
        break;

      case "Scissor":
        playerImg.src = images[2];
        break;
    }
    let computerImgIndex = Math.floor(Math.random() * images.length);
    computerImg.src = images[computerImgIndex];
    let computerOption = computerOptions[computerImgIndex];

    if (round <= 5) {
      if (this.innerText == "Rock" && computerOption == "Scissor") {
        winnerEl.innerText = `Round ${round} was won by the player.`;

        playerScore += 1;
      } else if (this.innerText == "Paper" && computerOption == "Rock") {
        winnerEl.innerText = `Round ${round} was won by the player.`;
        playerScore += 1;
      } else if (this.innerText == "Scissor" && computerOption == "Paper") {
        winnerEl.innerText = `Round ${round} was won by the player.`;
        playerScore += 1;
      } else if (this.innerText == "Rock" && computerOption == "Paper") {
        winnerEl.innerText = `Round ${round} was won by the computer.`;
        computerScore += 1;
      } else if (this.innerText == "Paper" && computerOption == "Scissor") {
        winnerEl.innerText = `Round ${round} was won by the computer.`;
        computerScore += 1;
      } else if (this.innerText == "Scissor" && computerOption == "Rock") {
        winnerEl.innerText = `Round ${round} was won by the computer.`;
        computerScore += 1;
      } else if (this.innerText == computerOption) {
        winnerEl.innerText = `Round ${round} was a draw.`;
      }

      playerScoreEl.innerText = playerScore;
      computerScoreEl.innerText = computerScore;
    }
    if (round === 5) {
      winnerFunction(round);
    }
  }, 1000);
}

function winnerFunction(round) {
  if (playerScore > computerScore) {
    winnerEl.innerText = `winner is Player`;
  } else if (computerScore > playerScore) {
    winnerEl.innerText = `winner is Computer`;
  } else {
    winnerEl.innerText = `draw`;
  }
}

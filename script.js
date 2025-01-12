const playerScoreEl = document.querySelector(".playerScore span");
const computerScoreEl = document.querySelector(".computerScore span");
const optionBtns = Array.from(document.querySelectorAll(".optionBtn"));
const playerImg = document.querySelector(".playerImg");
const computerImg = document.querySelector(".computerImg");
const winnerEl = document.querySelector(".winner");
let playerScore = 0;
let computerScore = 0;

const images = [
  "./assets/rock.png",
  "./assets/paper.png",
  "./assets/scissors.png",
];

initianGame();
function initianGame() {
  optionBtns.map((option) => option.addEventListener("click", clickOptions));
  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;
}

function clickOptions() {
  if (
    [...optionBtns].some((button) => button.classList.contains("clickedOption"))
  ) {
    return;
  }
  let clickedOption = this.classList.add("clickedOption");

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

  changePlayer(clickedOption);
}

function changePlayer(clickedOption) {}

function winnerFunction() {}

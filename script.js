const playerScoreEl = document.querySelector(".playerScore span");
const computerScoreEl = document.querySelector(".computerScore span");
const optionBtns = Array.from(document.querySelectorAll(".optionBtn"));
const playerImg = document.querySelector(".playerImg");
const computerImg = document.querySelector(".computerImg");
const winnerEl = document.querySelector(".winner");
let playerScore = 0;
let computerScore = 0;

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

  changePlayer(clickedOption);
}

function changePlayer(clickedOption) {}

function winnerFunction() {}

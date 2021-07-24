const player1 = {
  score: 0,
  button: document.querySelector("#p1B"),
  display: document.querySelector("#p1S"),
};
const player2 = {
  score: 0,
  button: document.querySelector("#p2B"),
  display: document.querySelector("#p2S"),
};

const buttonReset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;

function updateScores(player, oppent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("text-success");
      oppent.display.classList.add("text-danger");
      player.button.disabled = true;
      oppent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

player1.button.addEventListener("click", () => updateScores(player1, player2));

player2.button.addEventListener("click", () => updateScores(player2, player1));

buttonReset.addEventListener("click", reset);

winningScoreSelect.addEventListener("change", () => {
  winningScore = parseInt(winningScoreSelect.value);
  reset();
});

function reset() {
  isGameOver = false;
  for (let p of [player1, player2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("text-success", "text-danger");
    p.button.disabled = false;
  }
}

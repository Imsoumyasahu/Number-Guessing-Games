let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

submitBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);

function checkGuess() {
  const guess = Number(guessInput.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⛔ Please enter a number between 1 and 100!";
  } else if (guess === secretNumber) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low! Try a higher number.";
  } else {
    message.textContent = "📈 Too high! Try a lower number.";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = "";
  message.textContent = "Game reset! Try again!";
}

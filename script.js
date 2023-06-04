// getting Element from html document
const input = document.querySelector("input");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector("button");
const chances = document.querySelector(".chances");
const chance = document.querySelector(".chance");
const err = document.querySelector(".err");
const buttonIcon = document.getElementById("buttonIcon");

// Function to generate random number
function randomNumberFunc() {
  number = Math.ceil(Math.random() * 100);
  // console.log(number);
}

// number of chances to guess the number
let totalChances = 5;
let interval;

// Start the interval if totalChances is not 0
if (totalChances != 0) {
  interval = setInterval(randomNumberFunc, 5000);
}

// Function to check if the guess is correct or not
checkBtn.addEventListener("click", () => {
  totalChances--;

  // Check if totalChances is 0
  if (totalChances === 0) {
    clearInterval(interval); // Stop the interval
  }
  let inputValue = input.value;
  //conditions for the game
  if (totalChances === 0) {
    inputValue = ``;
    input.disabled = true;
    guess.textContent = "Better luck next time!";
    guess.style.color = "red";
    err.textContent = "The Right Number Was " + number;
    err.style.color = "green";
    // checkBtn.textContent = "Play Again!!!";
    buttonIcon.className = "fa-solid fa-rotate";
    chances.textContent = "All attempts have been used...";
  } else if (totalChances < 0) {
    window.location.reload();
  } else if (inputValue == number) {
    input.disabled = true;
    guess.textContent = "Hooray! You're the winner.";
    guess.style.color = "green";
    // checkBtn.textContent = "Play Again!!!";
    buttonIcon.className = "fa-solid fa-rotate";
    totalChances = 0;
  } else if (inputValue > number && inputValue <= 100) {
    guess.textContent = "Your guess is HIGH";
    chance.textContent = totalChances;
    guess.style.color = "#1446a0";
  } else if (inputValue < number && inputValue >= 1) {
    guess.textContent = "Your guess is LOW";
    chance.textContent = totalChances;
    guess.style.color = "#1446a0";
  } else {
    guess.textContent =
      "Oops! That's not a valid number guess only between 1 to 100 only. Try again...";
    chance.textContent = totalChances;
    guess.style.color = "red";
  }
});

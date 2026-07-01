let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

let answer = Math.floor(Math.random() * 100) + 1;
let no_of_guessess = 0;
let guessed_nums = [];

function play() {
  let user_guess = Number(document.getElementById("guess").value);
  if (isNaN(user_guess) || user_guess < 1 || user_guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  guessed_nums.push(user_guess);
  no_of_guessess += 1;
  msg2.textContent = "No. of Guesses: " + no_of_guessess;
  msg3.textContent = "Guessed Numbers are: " + guessed_nums.join(", ");

  if (user_guess < answer) {
    msg1.textContent = "Your guess is too low.";
  } else if (user_guess > answer) {
    msg1.textContent = "Your guess is too high.";
  } else {
    msg1.textContent = "Congratulations! You guessed the number " + answer + ".";
  }
}

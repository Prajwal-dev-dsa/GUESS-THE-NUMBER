let num = Math.floor(Math.random() * 100) + 1;
console.log("Kindly Guess The Number");
let guess;
let count = 0;
while (guess != num && count < 100) {
  guess = prompt("Enter Your Guess");
  if (guess === null) {
    console.log("Game exited.");
    break;
  }
  guess = Number.parseInt(guess);
  if (isNaN(guess)) {
    console.log("Invalid input. Please enter a valid number.");
    continue;
  }
  count++;
  if (guess < num) {
    console.log("Entered Guess Is Smaller Than The Correct Number");
  } else if (guess > num) {
    console.log("Entered Guess Is Greater Than The Correct Number");
  } else {
    if (count < 100) {
      console.log(
        "Congratulations You Guessed The Number\nYour Score is ",
        100 - count
      );
    } else {
      console.log(
        "Hard Luck You Couldn't Guess The Correct Number in 100 Attempts",
        100 - count
      );
    }
  }
}

let secret = 7;
let guess;

while (true) {
  guess = Number(prompt("Guess the number (1-10):"));

  if (guess === secret) {
    alert("Correct Guess 🎉");
    break;
  } else if (guess > secret) {
    alert("Too High");
  } else {
    alert("Too Low");
  }
}

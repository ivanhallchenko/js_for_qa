let name = prompt("Enter your name");
let game = confirm("Do you want play, " + name + "?");
if (game) {
  alert("Lets do it");
}
else {
  alert("Well...Maybe later?");
}
let words = [
  "elephant",
  "paris",
  "automobile",
  "parallelepiped"
];
let word = words[Math.floor(Math.random() * words.length)];
let rightWord = [];
for (let i = 0; i < word.length; i++) {
  rightWord[i] = "_";
}

let remainingLetters = word.length;
let numberOfAttempts = 20;

while (remainingLetters > 0 && numberOfAttempts > 0) {
  alert(rightWord.join(" "));
  let guess = prompt("Enter your letter");
  if (guess === null) {
    alert("Bye bye");
    break;
  } else if (guess.length !== 1) {
    alert("Please, enter one letter");
  } else {
    numberOfAttempts--;
    guess = guess.toLowerCase();
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess && rightWord[j] === "_") {
        rightWord[j] = guess;
        remainingLetters--;
      }
    }
  }
}
alert(rightWord.join(" "));
if (numberOfAttempts > 0) {
  alert("Surprise! The hidden word was: " + word);
} else if (remainingLetters === 0) {
  alert("Your attempts are over! The hidden word was: " + word);
}

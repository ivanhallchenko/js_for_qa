// task 1
let sumFunction = function (a ,b){
    return (a + b);
}
let multiFunction = function (b ,c){
    return (b * c);
}
sumFunction(multiFunction(36325,9824),777);


//task 2.1
let array1 = [{1:2},2,3];
let array2 = [1,2,1];
let array3 = [{1:2},2,3];

let ifArraysSame = function (a , b) {
    console.log(JSON.stringify(a)==JSON.stringify(b));
}
ifArraysSame(array1, array2);
ifArraysSame(array1, array3);
ifArraysSame(array2,array3);

let ifArraysSame = function (a , b) {
console.log(a.join() == b.join());
}
ifArraysSame(array1, array2);
ifArraysSame(array1, array3);
ifArraysSame(array2,array3);


//task 2.2
let ifArrasSameCycle = function(a, b){
    for(let i = 0; i < a.length; i++){
        if (a[i] != b[i]){
            return false;
        }

    }
    return true;
}
ifArrasSameCycle(array1, array2);
ifArrasSameCycle(array1, array3);
ifArrasSameCycle(array2,array3);

//task 3

let name = prompt("Enter your name");
console.log("Hello " + name);

let game = confirm("Do you want play, " + name + "?");
if (game){
    alert("Lets do it");
    console.log("Lets do it!");
} else {
    alert("Well...Maybe later?");
    console.log("Well...Maybe later?");
}

let pickWord = function () {
    // return random word
    let words = [
        "elephant",
        "paris",
        "automobile",
        "parallelepiped"
    ];
    let word = words[Math.floor(Math.random() * words.length)];
    return word;
}

let setupRightWord = function (word) {
    // return array with right word
    let rightWord = [];
    for (let i = 0; i < word.length; i++){
        rightWord[i] = "_"
    }
    return rightWord
}

let showPlayerProgress = function (rightWord) {
    // update rightWord array
    alert(rightWord.join(" "));
}
let getGuess = function () {
    // get user answer
    prompt("Enter your letter");
}

let updateGameState = function (guess, word, rightWord) {
    // update game status
    //return number of count letters in the word for update remainingLetters
    for (let j = 0; j < word.length; j++){
        if (word[j] === guess && rightWord[j] === "_"){
            rightWord[j] = guess;
            remainingLetters--;
        }
    }
    return remainingLetters;
}

let showAnswerAndCongratulatePlayer = function (rightWord) {
    if (numberOfAttempts === 0) {
        alert("Your attempts are over! The hidden word was: " + word);
    } else if(remainingLetters === 0){
        alert("Surprise! The hidden word was: " + word);
    } else {
        alert("gg");
    }
}

let word = pickWord();
let rightWord = setupRightWord(word);
let remainingLetters = word.length;
let numberOfAttempts = 20;
while (remainingLetters > 0 && numberOfAttempts > 0){
    showPlayerProgress(rightWord);
    let guess = getGuess();
    if (guess === null){
        alert("Bye bye");
        break;
    } else if (guess.length !==1){
        alert("Please, enter one letter");
    } else{
        numberOfAttempts--;
        guess = guess.toLowerCase();
        let correctGuesses = updateGameState(guess,word, rightWord);
            remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer();


let drawCats = function (howManyTimes) {
    for (let i = 1; i < howManyTimes+1; i++){
        console.log(i + "=>.<=");
    }
}

drawCats(10);

let drawAgain = function (howManyTimes, whatToDraw) {
    for (let i = 1; i < howManyTimes+1; i++){
        console.log(i + " " + whatToDraw);
    }
}

drawAgain(5,"<'>.<'>")

//131 page
let doubleResult;
console.log(doubleResult);
let double = function (number) {
    return number * 2;
}
doubleResult = double(2);
console.log(doubleResult);

//
console.log(double(double(double(2))));

// дразнилка
let pickRandomWord = function (randomWords) {
    return randomWords[Math.floor(Math.random() * randomWords.length)];
}

let generateRandomInsult = function () {
    let partsOfBody = ["ass" , "foot", "mouth", "fingers", "eyes", "face"]
    let uglyWords = ["ugly", "small", "big", "dirty", "fat"]
    let partsOfBodyAnimals = ["paw", "ass", "muzzle", "tail"]
    let uglyAnimals = ["snake", "horse", "elephant", "orangutan"]
    let teaser = ["Your", pickRandomWord(partsOfBody), "so", pickRandomWord(uglyWords), "as", pickRandomWord(partsOfBodyAnimals), "the same as a", pickRandomWord(uglyAnimals), ", bitch!"]
    return teaser.join(" ");
}
generateRandomInsult();

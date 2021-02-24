// 99 bottles of beer on the wall!!!

// let bottles = parseInt(prompt("How many bottles of beer on the wall?"))
// let falling = 1

// while (bottles > 0) {
// 	if (bottles === 1) {
// 		console.log("1 bottle of beer on the wall,")
// 		console.log("1 bottle of beer!")
// 		console.log("Take it down, pass it around,")
// 		console.log("We're all drunk as ****!")
// 	} else {
// 		console.log(`${bottles} bottles of beer on the wall,`)
// 		console.log(`${bottles} bottles of beer!`)
// 	}
// 	if (falling === 1 && bottles != 1) {
// 		console.log(`Take 1 down, pass it around,`)
// 	} else if (falling != 1 && bottles > falling) {
// 		console.log(`Take ${falling} down, pass them around,`)
// 	} else if (bottles <= falling && bottles != 1) {
// 		console.log("Take them down, pass them around,")
// 	}
// 	bottles -= falling
// 	falling += 1
// 	if (bottles > 1) {
// 		console.log(`${bottles} bottles of beer on the wall!`)
// 	} else if (bottles === 1) {
// 		console.log("1 bottle of beer on the wall!")
// 	} else if (bottles <= 0 && (bottles + falling - 1) != 1) {
// 		console.log("We're all drunk as ****!")
// 	}
// }


// Hangman

let word = prompt("Player 1, choose a word.");
let correctGuesses = [];
let incorrectGuesses = [];
let hidden = [];
let lives = 10;

function getAllIndexes(arr, val) {
	let indexes = [], i;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			indexes.push(i);
		}
	}
	return indexes;
}

function parseWord() {
	let array = word.split("");
	return array;
}

let arrayed = parseWord();
for (let letter in arrayed) {
	if (arrayed[letter] === " ") {
		hidden.push(" ")
	} else {
		hidden.push("*")
	}
}

console.log(hidden.join("") + " Lives: 10.");

while (lives > 0 && hidden.indexOf("*") >= 0) {
	let guess = prompt("Player 2, guess a letter.")
	if (correctGuesses.indexOf(guess) >= 0 || incorrectGuesses.indexOf(guess) >= 0) {
		console.log(`You have already guessed ${incorrectGuesses.join(", ")}, ${correctGuesses.join(", ")}. Please guess a new letter.`);
		console.log(hidden.join(""));
	} else if (arrayed.indexOf(guess) >= 0) {
		console.log(`Good guess, Player 2! ${guess} was correct!`);
		let multiple = getAllIndexes(arrayed, guess)
		for (let number of multiple) {
			hidden[number] = arrayed[number];
		}
		console.log(hidden.join(""));
		correctGuesses.push(guess);
	} else {
		lives -= 1;
		console.log(`I'm sorry, ${guess} was incorrect. Lives remaining: ${lives}.`);
		incorrectGuesses.push(guess);
		console.log("Incorrect guesses: " + incorrectGuesses.join(", "));
		console.log(hidden.join(""));
	}
}

if (lives === 0) {
	console.log(`Player 2 wins with ${lives} lives left! Player 1's word was ${arrayed.join("")}.`);
} else {
	console.log(`Player 1 wins! Player 2 ran out of lives at ${hidden.join("")}. Player 1's word was ${arrayed.join("")}.`);
}

// Did not finish


// DOM Manipulation

// let div = document.getElementsByTagName("div")[0];
// console.log(div);
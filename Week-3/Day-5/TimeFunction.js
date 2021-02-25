// let number = 10

// function banner() {
// 	let div = document.createElement("div");
// 	var text = document.createTextNode(`The store will close in ${number} seconds! Buy now!`);
// 	div.style.background = "rgba(169, 244, 155, 0.8)"
// 	div.style.border = "solid green 5px"
// 	div.style.padding = "5px"
// 	div.style.textAlign = "center"
// 	div.appendChild(text);
// 	document.body.appendChild(div);
// }

// setTimeout(banner, 500)

// function countdown() {
// 	number -= 1
// 	document.getElementsByTagName("div")[0].innerHTML = `The store will close in ${number} seconds! Buy now!`
// }

// setInterval(countdown, 1000)

// Exercise 1

// let box = document.getElementById("animate");
// let container = document.getElementById("container");
// container.style.display = "flex";
// container.style.flexDirection = "row" 

// function myMove() {
// 	if (container.style.flexDirection === "row") {
// 		container.style.flexDirection = "row-reverse"	
// 	} else {
// 		container.style.flexDirection = "row"
// 	}
// }

// Daily Challenge

let input = document.getElementsByTagName("input")[0];
let characters = [];

function charCheck() {
	inputValue = input.value;
	characters = inputValue.split("");
	for (let letter of characters) {
		if (parseInt(letter) != NaN) {
			characters.splice(characters.indexof(letter), 1);
		}
	}
	input.value = characters.join("")
}
// let email=prompt("Please enter a valid gmail address.");

// if (email.indexOf("@gmail.com")>0) {
// 	alert("Thank You!");
// } else {
// 	alert("Please input a valid email.");
// }

let color=prompt("Input the color of the light.")
let valid = false;

while (!valid) {
	if (color==="green" || color === "Green") {
		console.log("Go!");
		valid = true;
	} else if (color==="yellow" || color === "Yellow") {
		console.log("Slow down.");
		valid = true;
	} else if (color==="red" || color === "Red") {
		console.log("Stop.");
		valid = true;
	} else {
		alert("Please input a valid color.")
		color=prompt("Input the color of the light.")
	}
}

// switch(color) {
// 	case "green":
// 		console.log("Go!");
// 		break;
// 	case "yellow":
// 		console.log("Slow down.");
// 		break;
// 	case "red":
// 		console.log("Stop.");
// 		break;
// 	default:
// 		alert("Please input a valid color.")
// }

// let light=["green", "yellow", "red"];

// let thisLight=light[Math.floor(Math.random() * light.length)];

// console.log(thisLight);

// if (thisLight==="green") {
// 	alert("Go!");
// } else if (thisLight==="yellow") {
// 	alert("Slow down!");
// } else if (thisLight==="red") {
// 	alert("Stop!")
// }

// let age=parseInt(prompt("Please input your age."));

// if (age>=3 && age<=10) {
// 	console.log("Age is between 3 and 10.");
// } else if (age<3 || age>10) {
// 	console.log("else")
// }

// let person1={
// 	'name': 'derron',
// 	'password': 'password123',
// }

// let person2={
// 	'name': 'josh',
// 	'password': 'something else',
// }

// let info=[person1, person2];

// console.log(info[1]["name"]);

// let number=parseInt(prompt("Please enter a number"));

// if (number % 7 == 0 && number % 2 == 0) {
// 	console.log("fizzbuzz")
// } else if (number % 7 == 0) {
// 	console.log("buzz");
// } else if (number % 2 == 0) {
// 	console.log("fizz");
// } else {
// 	console.log(number);
// }

// let shopping = {
// 	"fruits": ["apple", "pear", "banana"],
// 	"vegetables": ["cucumber", "broccoli", "carrot"],
// }

// shopping["fruits"].splice(2, 0, "mango");

// shopping["dairy"]=["yoghurt", "ice cream"];

// delete(shopping["vegetables"]);

// console.log(shopping);

// for (let i=0; i<=50; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }

// let names = ['ben', 'albert', 'chaim', 'zack', 'adom', 'alex']

// for ( let name in names) {
// 	console.log(names[name]);      This is equivalent
// }

// for (let name of names) {       to this.
// 	console.log(name)
// }

// let a = [];

// for (let name of names) {
// 	let letter = name.charAt(0);
// 	if (letter === "a") {
// 		a.push(name);
// 	}
// }

// console.log(a);

// let watching = [];
// let still = true

// while (still) {
// 	let name = prompt("Enter the name of the person watching.");
// 	watching.push(name);
// 	let keepGoing = prompt("Add more people?")
// 	if (keepGoing ==="no") {
// 		still = false
// 	}
// }

// console.log(watching)



// Make this in the console: 
// *
// **
// ***
// ****
// *****
// ******
// *******




// let stars = "*"

// for (i = 0; i < 8; i++) {
// 	console.log(stars);
// 	stars += "*"
// }

// let stars = [];

// for (let i = 1; i <= 7; i++) {
// 	for (let x = 1; x <= i; x++) {
// 		stars.push("*");
// 	}
// 	console.log(stars.join(""));
// 	stars = [];
// }




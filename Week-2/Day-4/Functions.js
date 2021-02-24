// Practice

// function hello(name = "juan", name2 = "maria") {
// 	console.log(`Hello ${name} and ${name2}! How are you?`)
// }

// hello("derron", "josh")

// function addition(nums) {
// 	let sum = 0
// 	for (num of nums) {
// 		sum += num
// 	}
// 	console.log(sum)
// }


// Exercise 1

// function age(myAge) {
// 	myAge = parseInt(myAge)
// 	let mumAge = myAge*2
// 	let dadAge = mumAge*1.2
// 	console.log(`My mom's age is ${mumAge}, my dad's age is ${dadAge}, and together they are ${mumAge + dadAge}.`)
// }

// Setting code into storage: Exercise 2

// function age(myAge) {
// 	let mumAge = myAge * 2
// 	return(mumAge)
// }

// let variable = age(19);


// Signup page.

// function Name1() {
// 	let name = prompt("Please enter your first name.")
// 	return name
// };

// function Name2() {
// 	let name = prompt("Please enter your last name.")
// 	return name
// };

// function getName() {
// 	let firstName = Name1()
// 	let lastName = Name2()
// 	return(`Hello ${firstName} ${lastName}! Have a nice day.`)
// };

// console.log(getName());

// Exercise 1

// let age = parseInt(prompt("Please enter your age."));

// function checkDriverAge(age) {
// 	if (age < 16) {
// 		console.log("Sorry, you are too young to drive this car. Powering off");
// 	} else if (age === 18) {
// 		console.log("Congradulations on your first year of driving. Enjoy the ride!");
// 	} else if (age >= 16) {
// 		console.log("You are old enough to drive, Powering On. Enjoy the ride!");
// 	};
// };

// checkDriverAge(age)


// Exercise 2

// function changeEnough(change, due) {
// 	let quarters = change[0];
// 	let dimes = change[1];
// 	let nickels = change[2];
// 	let pennies = change[3];
// 	let money = (quarters*0.25)+(dimes*0.1)+(nickels*0.05)+(pennies*0.01);
// 	if (money >= due) {
// 		console.log("true");
// 	} else {
// 		console.log("false");
// 	}
// }


// Exercise 3

// function remainder() {
// 	let elements = []
// 	let sum = 0
// 	for (let i = 0; i < 500; i++) {
// 		if (i % 23 === 0) {
// 			elements.push(i);
// 			sum += i;
// 		}
// 	}
// 	console.log(`Elements: ${elements}`);
// 	console.log(`Sum: ${sum}`);
// }

// remainder();


//Exercise 5

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ['banana', 'orange', 'apple']
// let sum = 0;
// function myBill() {
//     for (let item of shoppingList) {       
//         if (stock[item] > 0) {
//             stock[item] -= 1;
//             sum += prices[item]
//         } else {
//         	console.log(`Sorry, we're all out of ${item}.`)
//         }
//     }
//     console.log(stock);
//     console.log(sum);
// }

// myBill()


// Exercise 6

// let bill = prompt("Enter your list of bills.")
// let billArray = parseInt(bill.split(","));
// let tipArray = []
// let total = []

// function tip() {
// 	for (let payment of billArray) {
// 		if (payment < 50) {
// 			tipArray.push(payment*0.2);
// 		} else if (payment >= 50 && payment <= 200) {
// 			tipArray.push(payment*0.15);
// 		} else {
// 			tipArray.push(payment*0.1);
// 		}
// 	}
// 	for (let i = 0; i <= bill.length(); i++) {
// 		total.push(tipArray[i]+billArray[i]);
// 	}
// 	console.log(tipArray);
// 	console.log(total);
// }


// Daily Challenge

// This is my sentence

let string = prompt("Enter your sentence.");
let array = string.split(" ")
let longest = 0
let caps = "****"

for (let word of array) {
	if (word.length > longest) {
		longest = word.length
	}
}

for (let i = 0; i < longest; i++) {
	caps += "*"
}

console.log(caps);

// Instructor's method
// for (let word of array) {
// 	var end = ""
// 	let spaces = longest-word.length
// 	for (i = 0; i < spaces; i++) {
// 		end += " ";
// 	}
// 	console.log(`* ${word}${end} *`)
// }

// My method
for (let i = 0; i < array.length; i++) {
	var end = ""
	for (j = 0; j <= longest-array[i].length; j++) {
		end += " "
	}
	console.log(`* ${array[i]}${end}*`)
}

console.log(caps);
// document.getElementsByClassName("className");
// document.getElementsById("IdName");
// document.getElementsByTagName("div");
// document.querySelector("tagName");


// document.getElementsByTagName("div")[0].innerHTML = "Goodbye";
// let div = document.createElement("div")
// let text = document.createTextNode("Here is your text")
// div.appendChild(text);
// document.body.appendChild(div);

// let newDiv = document.createElement("div")
// let newText = document.createTextNode("This is a new text node.")
// newDiv.appendChild(newText);
// document.getElementsByTagName("div")[1].appendChild(newDiv);

// document.getElementsById("navBar").setAttribute("Id" "socialNetworkNavigation");

// let div = document.getElementById("navBar");
// div.setAttribute("id", "socialNetworkNavigation");
// let newDiv = document.getElementById("socialNetworkNavigation");
// let ul = document.getElementsByTagName("ul")[0];

// let newItem = document.createElement("li");
// let newText = document.createTextNode("Logout");
// newItem.appendChild(newText);
// ul.appendChild(newItem);

// console.log(ul.firstElementChild().textContent());

// let names = document.getElementsByClassName("list")[0];
// names.lastElementChild.innerHTML = "Richard";

// let textNode = document.createTextNode("Hey Students!");
// let li = document.createElement("li");
// let textNode1 = document.createTextNode("Hey Students!");
// let li1 = document.createElement("li");

// li.appendChild(textNode);
// li1.appendChild(textNode1);

// let myName = document.getElementsByClassName("list");
// for (let list of myName) {
// 	list.firstElementChild.innerHTML = "Derron";
// }

// document.getElementsByClassName("list")[0].appendChild(li);
// document.getElementsByClassName("list")[1].appendChild(li1);

// let sarah = document.getElementsByClassName("list")[1].getElementsByTagName("li")[1];
// document.getElementsByClassName("list")[1].removeChild(sarah);
// 	

let planets = []
for (let i = 0; i < 9; i++) {
	var div = document.createElement("div");
	document.body.appendChild(div);
	
	planets.push(div);
}

console.log(planets);
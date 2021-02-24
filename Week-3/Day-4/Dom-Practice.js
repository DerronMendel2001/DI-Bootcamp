// Book Challenge

// let firstBook = {
// 	"title": "Percy Jackson",
// 	"author": "Rick Riordan",
// 	"image": "Snek",
// 	"alreadyRead": true
// }
// let secondBook = {
// 	"title": "Diary O A Wimpy Wean",
// 	"author": "Jeff Kinney",
// 	"image": "Cartoon",
// 	"alreadyRead": false
// }
// let allBooks = [firstBook, secondBook];
// let table = document.createElement("table");
// let row1 = document.createElement("tr");
// let row2 = document.createElement("tr");
// let area1 = document.createElement("td");
// let area2 = document.createElement("td");
// let area3 = document.createElement("td");
// let area4 = document.createElement("td");
// let div1 = document.createElement("div");
// let div2 = document.createElement("div");
// let div3 = document.createElement("div");
// let div4 = document.createElement("div");
// let text1 = document.createTextNode(`${firstBook["title"]} by ${firstBook["author"]}`);
// let text2 = document.createTextNode(`${secondBook["title"]} by ${secondBook["author"]}`);
// let text3 = document.createTextNode(firstBook["image"]);
// let text4 = document.createTextNode(secondBook["image"]);
// div1.setAttribute("id", "first");
// div2.setAttribute("id", "second");
// div3.setAttribute("id", "third");
// div4.setAttribute("id", "fourth");
// document.body.appendChild(table);
// table.appendChild(row1);
// table.appendChild(row2);
// row1.appendChild(area1);
// row1.appendChild(area2);
// row2.appendChild(area3);
// row2.appendChild(area4);
// area1.appendChild(div1);
// area2.appendChild(div2);
// area3.appendChild(div3);
// area4.appendChild(div4);
// div1.appendChild(text1);
// div2.appendChild(text2);
// div3.appendChild(text3);
// div4.appendChild(text4);

function changePos() {
	let div = document.getElementsByTagName("div")[0];
	let button = document.getElementsByTagName("button")[0];
	if (div.style.flexDirection === "row" && div.style.alignItems === "flex-start") {
		button.innerHTML = "Bottom Right"
		div.style.flexDirection = "row-reverse"
	} else if (div.style.flexDirection === "row-reverse" && div.style.alignItems === "flex-start") {
		button.innerHTML = "Bottom Left"
		div.style.alignItems = "flex-end"
	} else if (div.style.flexDirection === "row-reverse" && div.style.alignItems === "flex-end") {
		button.innerHTML = "Top Left"
		div.style.flexDirection = "row"
	} else if (div.style.flexDirection === "row" && div.style.alignItems === "flex-end") {
		button.innerHTML = "Top Right"
		div.style.alignItems = "flex-start"
	}
}
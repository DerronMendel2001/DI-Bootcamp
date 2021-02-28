// // Drag and Drop

// // function allowDrop(ev) {
// // 	ev.preventDefault();
// // }

// // function drag(ev) {
// // 	ev.dataTransfer.setData("text", ev.target.id);
// // }

// // function drop(ev) {
// // 	ev.preventDefault();
// // 	var data = ev.dataTransfer.getData("text");
// // 	ev.target.appendChild(document.getElementById(data));
// // }

// // Local Storage

// function intoStorage() {
// 	let firstName = document.getElementsByTagName("input")[0].value;
// 	localStorage.setItem("fname", JSON.stringify(firstName));
// 	let lastName = document.getElementsByTagName("input")[1].value;
// 	localStorage.setItem("lname", JSON.stringify(lastName));
// }

// let f_name = JSON.parse(localStorage.getItem("fname"));
// let l_name = JSON.parse(localStorage.getItem("lname"));

// if (f_name) {
// 	document.getElementsByTagName("input")[0].value = f_name;
// }

// if (l_name) {
// 	document.getElementsByTagName("input")[1].value = l_name;
// }

// function clearStorage() {
// 	localStorage.clear();
// 	window.location.reload();
// }
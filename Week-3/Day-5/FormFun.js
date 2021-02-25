// let form = document.getElementsByTagName("form")[0];
// console.log(form.elements.fname.value)
// console.log(form.elements.lname.value)

// Mad Libs

// let libButton = document.getElementById('lib-button');
//     let libIt = function() {
//         let storyDiv = document.getElementById("story");
//         storyDiv.innerHTML = `Once upon a time, there was a person named ${document.getElementById("person").value}. This person was very ${document.getElementById("adjective").value}, and loved to play with ${document.getElementById("noun").value}, which some people thought was funny.`;
//     };
//     libButton.addEventListener('click', libIt);

// Volume Of A Sphere

let form = document.getElementById("MyForm")
let button = document.getElementById("submit")

function calculate() {
	let radius = parseInt(form.elements.radius.value)
	let answer = (radius * radius * radius * Math.PI * (4/3))
	let volume = form.elements.volume
	volume.setAttribute("value", answer)
}
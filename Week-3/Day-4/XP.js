let article = document.getElementsByTagName("article")[0];
let paragraphs = article.getElementsByTagName("p");
for (let item of paragraphs) {
	item.setAttribute("class", "para_article");
}

article.removeChild(article.lastElementChild);

let x = document.getElementsByTagName("h2")[0];
x.addEventListener("click", removeX);

function removeX() {
	article.removeChild(x);
}

let h1 = document.getElementsByTagName("h1")[0];
let number = Math.floor(Math.random() * 100);
let size = number + "px"
h1.style.fontSize = size;

article.lastElementChild.addEventListener("click", remove);

function remove() {
	article.removeChild(article.lastElementChild);
}

let input = document.getElementsByTagName("form")[0].username.value
console.log(input)
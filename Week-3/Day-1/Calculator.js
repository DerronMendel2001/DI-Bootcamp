let firstNumber = [];
let equasion = [];

function logNum(keystroke) {
	integer = numPush(keystroke);
}

function numPush(keystroke) {
	firstNumber.push(keystroke);
	return(firstNumber.join(""));
}

function btnPsh(keystroke) {
	firstNumber = [];
	equasion.push(integer);
	equasion.push(keystroke);
	console.log(equasion.join(" "));
}

function equals() {
	equasion.push(integer);
	var answer = parseInt(equasion[0]);
	for (let element in equasion) {
		if (element % 2 === 1) {
			switch (equasion[element]) {
				case "+":
					answer += parseInt(equasion[parseInt(element) + 1]);
					break;
				case "-":
					answer -= parseInt(equasion[parseInt(element) + 1]);
					break;
				case "*":
					answer = parseInt(answer * equasion[parseInt(element) + 1]);
					break;
				case "/":
					answer = parseInt(answer / equasion[parseInt(element) + 1]);
					break;
			}
		}
	}
	console.log(equasion.join("") + " = " + answer);
	firstNumber = [];
	equasion = [];
}


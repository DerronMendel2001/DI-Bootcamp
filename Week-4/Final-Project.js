let recordingNumber = 0;
let dormant = true // checking if it is recording
let button = document.getElementById("record"); // finding the record button
button.addEventListener("click", startStop);
button.addEventListener("mouseover", function(){button.style.background = "rgb(240, 113, 113)"});
button.addEventListener("mouseout", mouseout)

function mouseout() { // aesthetics of the button mouseover shadow
	if (dormant === true) {
		button.style.background = "rgb(240, 0, 0)";
	} else {
		button.style.background = "rgb(120, 1, 1)";
	}
}

function startStop() { // alternate between starting a recording and doing nothing
	if (dormant === true) { // so we don't start a recording that's already going
		record();
		dormant = false;
		button.style.background = "rgb(120, 1, 1)";
		recordingNumber += 1;
	} else {
		button.style.background = "rgb(240, 0, 0)";
	};
};

function record() { // getting audio

navigator.mediaDevices.getUserMedia({ audio: true })
	.then(stream => {
		let mediaRecorder = new MediaRecorder(stream);
		mediaRecorder.start();

		// saving the audio

		let audioChunks = [];

		mediaRecorder.addEventListener("dataavailable", event => {
			audioChunks.push(event.data);
		});
		
		// stop recording audio

		button.addEventListener("click", function(){
			if (dormant === false) {
				mediaRecorder.stop();
			}
		});

		// turning the audio into one chunk of data

		mediaRecorder.addEventListener("stop", () => {
		let audioBlob = new Blob(audioChunks)
		let audioUrl = URL.createObjectURL(audioBlob);
		let audio = new Audio(audioUrl);
		createNewDiv(audio);
		dormant = true;
		});
	});
};

function createNewDiv(audiofile) { // creating the section that shows your recordings
	
	let newSection = document.createElement("div"); // create the div
	newSection.classList.add("recording"); // giving it a class for CSS
	let nameContainer = document.createElement("div");
	let name = document.createTextNode(`Recording #${recordingNumber}`); // Displaying the name
	nameContainer.classList.add("name"); // giving it a class for CSS

	// creating buttons

	let playPause = document.createElement("button");
	let playPauseText = document.createTextNode("Play");
	let stopButton = document.createElement("button");
	let stopButtonText = document.createTextNode("Stop");

	// making those buttons functional

	playPause.addEventListener("click", function(){
		if (audiofile.paused === true) {
			audiofile.play();
		} else if (audiofile.paused === false) {
			audiofile.pause();
		}
	});
	stopButton.addEventListener("click", function(){
		audiofile.load();
		playPause.innerHTML = "Play";
	});
	audiofile.addEventListener("play", function(){playPause .innerHTML = "Pause"});
	audiofile.addEventListener("pause", function(){playPause.innerHTML = "Play"});
	audiofile.addEventListener("ended", function(){playPause.innerHTML = "Play"});

	// adding the progress bar

	let progress = document.createElement("div");
	progress.classList.add("progressBarDiv");
	let slider = document.createElement("input");
	slider.setAttribute("type", "range");
	slider.setAttribute("disabled", "disabled");
	slider.setAttribute("min", 0);
	slider.setAttribute("max", 200);
	slider.setAttribute("value", 0);
	slider.classList.add("progressSlider");
	audiofile.addEventListener("timeupdate", function(){slider.setAttribute("value", (audiofile.currentTime * 200 / audiofile.duration))});
	audiofile.addEventListener("ended", function(){slider.setAttribute("value", 0)});
	audiofile.addEventListener("canplay", function(){slider.setAttribute("value", 0)});

	// adding the rename button

	let renameBox = document.createElement("div");
	renameBox.classList.add("renameContainer");
	let newName = document.createElement("input");
	newName.setAttribute("type", "text");
	newName.classList.add("textField");
	let renameButton = document.createElement("button");
	renameButton.setAttribute("class", "renameButton");
	let renameInstructions = document.createTextNode("Rename");

	// making the rename button work

	renameButton.addEventListener("click", function() {
		nameContainer.innerHTML = newName.value;
		newName.value = "";
	});
	newName.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			nameContainer.innerHTML = newName.value;
			newName.value = "";
		};
	});

	// adding the delete button

	let deleteButton = document.createElement("button");
	deleteButton.setAttribute("class", "deleteButton");
	let deleteText = document.createTextNode("Delete");
	deleteButton.addEventListener("click", function(){document.getElementById("container").removeChild(newSection)});

	// appending everything to the document

	document.getElementById("container").appendChild(newSection);
	newSection.appendChild(nameContainer);
	nameContainer.appendChild(name);
	newSection.appendChild(progress);
	progress.appendChild(slider);
	newSection.appendChild(playPause);
	playPause.appendChild(playPauseText);
	newSection.appendChild(stopButton);
	stopButton.appendChild(stopButtonText);
	newSection.appendChild(renameBox);
	renameBox.appendChild(newName);
	renameBox.appendChild(renameButton);
	renameButton.appendChild(renameInstructions);
	newSection.appendChild(deleteButton);
	deleteButton.appendChild(deleteText);
}
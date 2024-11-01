

const song = document.getElementById("mySong");
const toggleButton1 = document.getElementById("toggleButton2");


function togglePlayPause1() {
    if (song.paused) {
        song.play();
        toggleButton1.textContent = "Pause song ⏸️";
    } else {
        song.pause();
        toggleButton1.textContent = "Play song ▶️";
    }
}

toggleButton1.addEventListener("click", togglePlayPause1);



// Get references to the video element and the button
const video = document.getElementById("myVideo");
const toggleButton = document.getElementById("toggleButton");

// Function to toggle play/pause
function togglePlayPause() {
    if (video.paused) {
        video.play();
        toggleButton.textContent = "Pause Video ⏸️";
    } else {
        video.pause();
        toggleButton.textContent = "Play Video ▶️";
    }
}

// Event listener for the button
toggleButton.addEventListener("click", togglePlayPause);

const loveNotes = [
    "You make my day brighter",
    "I can't stop thinking of you",
    "I'm so lucky to have you",
];

function openNote() {
    let randomIndex = Math.floor(Math.random() * loveNotes.length);
    document.getElementById("loveNote").innerText = loveNotes[randomIndex];
    document.getElementById("noteContainer").classList.add("show");
}

function closeNote() {
    document.getElementById("noteContainer").classList.remove("show");
}

let lastX = null, lastY = null, lastZ = null;
const SHAKE_THRESHOLD = 15; 

window.addEventListener("devicemotion", function(event) {
    let acc = event.accelerationIncludingGravity;
    
    if (!lastX) {
        lastX = acc.x;
        lastY = acc.y;
        lastZ = acc.z;
        return;
    }

    let deltaX = Math.abs(acc.x - lastX);
    let deltaY = Math.abs(acc.y - lastY);
    let deltaZ = Math.abs(acc.z - lastZ);

    if (deltaX + deltaY + deltaZ > SHAKE_THRESHOLD) {
        openNote(); 
    }

    lastX = acc.x;
    lastY = acc.y;
    lastZ = acc.z;
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker Registered"));
}

const video = document.getElementById("myVideo");
const overlay = document.getElementById("overlay");

video.addEventListener("play", function() {
    overlay.style.display = "block";
});

video.addEventListener("ended", function() {
    overlay.style.display = "none";
});
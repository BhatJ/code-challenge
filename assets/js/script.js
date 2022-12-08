window.onload = function() { 
    setInterval(checkTime, 1000);
}

var timeEl = document.querySelector("#time");
var startQuizBtn = document.querySelector("#start-button");
var answersEl = document.querySelector("#answers");
var titleTextEl = document.querySelector("#title-text");

var count = 75;

function checkTime() {
    timeEl.textContent = count;
    count--;
}

startQuizBtn.addEventListener("click", function() {
    
    console.log("start button pressed");
});
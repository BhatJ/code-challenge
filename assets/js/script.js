window.onload = function() { 
    setInterval(checkTime, 1000);
}

var timeEl = document.querySelector("#time");

var count = 75;

function checkTime() {
    timeEl.textContent = count;
    count--;
}
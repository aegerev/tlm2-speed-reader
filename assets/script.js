let timerEl = document.getElementById("timer");
let mainEl = document.getElementById('main');

let message =
  "Ariel: There's no more stormy weather  Melody: Now we can sing together   Ariel and Melody: In perfect harmony   Ariel, Melody and Sebastian: We're feeling better now  We sing together now Here on the land and sea";
let words = message.split(' ');

function timeDown(){
    let timeLeft = 3;

    const timeInterval = setInterval(function() {

        timerEl.textContent = timeLeft;
        timeLeft--;

        if(timeLeft < 0) {
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000)
}

function displayMessage() {
    let wordCount = 0;
    
    const msgInterval = setInterval(function() {
        if(words[wordCount] === undefined) {
            clearInterval(msgInterval);
        } else {
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 1000)
}

timeDown();


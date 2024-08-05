let bubbles = "";
let randomNumbers = "";
let timer = 60;
let score = 0
let randomNumbersArrays = []

function ScoreInc() {
    score += 10
    document.querySelector('.score').innerHTML = score
}
function scoreDec() {
    score -= 10
    document.querySelector('.score').innerHTML = score
}
function hitRandom() {
    arrIndex = Math.floor(Math.random() * randomNumbersArrays.length)
    randomNumbers = randomNumbersArrays[arrIndex];

    document.querySelector('.hit').innerHTML = randomNumbers
}
function timerReverse() {
    const interval = setInterval(function () {
        if (timer > 0) {
            timer--
            document.querySelector('.timer').innerHTML = timer
        } else {
            clearInterval(interval)
            document.querySelector('.bbpr').innerHTML = `<h1>Game Over -- </h1>
            <h3 class="totalscore">Total: ${score}</h3>
            `
            document.querySelector('button').classList.add('active')
            document.querySelector('.bbpr').classList.add('inactive') // Disable further clicks
        }
    }, 1000)
}

function makeBubbles() {
    bubbles = "";
    randomNumbersArrays = []; // Reset the array to avoid accumulation
    let numBubbles;
    if (window.innerWidth <= 480) {
        numBubbles = 40;
    } else if (window.innerWidth <= 768) {
        numBubbles = 50;
    } else if (window.innerWidth <= 1024) {
        numBubbles = 67;
    } else if (window.innerWidth <= 1280) {
        numBubbles = 99;
    } else if (window.innerWidth <= 1440) {
        numBubbles = 112
    } else if (window.innerWidth <= 1920) {
        numBubbles = 136;
    } else {
        numBubbles = 136;
    }

    // Generate a random target number
    randomNumbers = Math.floor(Math.random() * 10);

    // Create bubbles and ensure target number exists
    for (let i = 0; i < numBubbles; i++) {
        let randomNumber;
        if (i === Math.floor(Math.random() * numBubbles)) {
            randomNumber = randomNumbers;
        } else {
            randomNumber = Math.floor(Math.random() * 10);
        }
        randomNumbersArrays.push(randomNumber);
        bubbles += `<div class="bubble">${randomNumber}</div>`;
    }

    document.querySelector('.bbpr').innerHTML = bubbles;
}


document.querySelector('.bbpr').addEventListener('click', (dets) => {
    if (!dets.target.classList.contains('bubble') || document.querySelector('.bbpr').classList.contains('inactive')) {
        return; // Ignore clicks not on bubbles or after the game is over
    }
    
    var clickednum = Number(dets.target.textContent)
    if (clickednum === randomNumbers) {
        ScoreInc();
        makeBubbles()
        hitRandom();
    } else {
        scoreDec()
    }
})

function again() {
    window.location.reload()
}

makeBubbles()
hitRandom()
timerReverse()

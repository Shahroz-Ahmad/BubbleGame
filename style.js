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
    // console.log(randomNumbers, 'numbers');
    // console.log(randomNumbersArrays.length, 'numbers');

    document.querySelector('.hit').innerHTML = randomNumbers
}
function timerReverse() {
    setInterval(function () {
        if (timer > 0) {
            timer--
            document.querySelector('.timer').innerHTML = timer
        } else {
            clearInterval(timer)
            document.querySelector('.bbpr').innerHTML = `<h1>Game Over -- </h1>
        <h3 class="totalscore">Total: ${score}</h3>
        `
            document.querySelector('button').classList.add('active')
        }
    }, 1000)
}

function makeBubbles() {
    bubbles = "";
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
        numBubbles = 113
    } else if (window.innerWidth <= 1920) {
        numBubbles = 137;
    } else {
        numBubbles = 137;
    }

    for (let i = 1; i < numBubbles; i++) {
        randomNumbers = Math.floor(Math.random() * 10);
        randomNumbersArrays.push(randomNumbers)
        bubbles += `<div class="bubble">${randomNumbers}</div>`
    }
    document.querySelector('.bbpr').innerHTML = bubbles
}

document.querySelector('.bbpr').addEventListener('click', (dets) => {
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
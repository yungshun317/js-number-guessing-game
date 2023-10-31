'use strict';

console.log(document.querySelector('.message').textContent);
// Start Guessing...
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 16;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 36;
console.log(document.querySelector('.guess').value);
// 36

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // 36 number
});


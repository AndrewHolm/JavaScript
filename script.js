// Andy Holm
// 10-2022
//
// Basic guessing game from Udemy course.
//---------------------------------------------------------------------------------------------------------------------
'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 1;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number((document.querySelector('.guess').value));
    //Number changes 'guess' from a string to a number
    console.log(guess, typeof guess);

    // When there is no input
    if(!guess) {
        displayMessage('⛔ No number!!');

    // When player wins
    } else if(guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = String(secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is wrong
    }else if(guess !== secretNumber) {
        if (score > 0) {
            displayMessage(guess > secretNumber ? '👆 Too high!' : '👇 Too low!');
            score--;
            document.querySelector('.score').textContent = String(score);
        } else {
            displayMessage('🙉 You lost!');
        }
    }

});

// Adds functionality to the again button, resets everything to play again
document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = String(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


});
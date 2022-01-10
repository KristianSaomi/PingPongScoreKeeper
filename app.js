//Selcted ids
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playTo');

//Setting up default behaviour, all is let doe its suppost to change
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGamerOver = false;

p1Button.addEventListener('click', function () {
    if(!isGamerOver) {
        p1Score += 1;
        if( p1Score === winningScore) {
            isGamerOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            //Calling "function"  to disable the buttons.
            disableButtons();
        }
        p1Display.textContent = p1Score;     
    }
    
})

//On click p2 button, if the game is not over
//Add +1 to the display to player 2.
//If that logic is passed, and if the game score is equal to game score selected
//Gmae is over, style from html with class is called in = green and red color 
p2Button.addEventListener('click', function () {
    if(!isGamerOver) {
        p2Score += 1;
        if( p2Score === winningScore) {
            isGamerOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            //Calling "function"  to disable the buttons.
            disableButtons();
        }
        p2Display.textContent = p2Score;     
    }
    
})
//On some change with "dropdown select html" -> parse the String to Int
// Pass over selected value -> this.value 
//And for game logic, once changed call the reset function.
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();

})
//On click, calls reset function
resetButton.addEventListener('click', reset)

//Reset function to be called, resets the game and score display
function reset() {
    isGamerOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','loser')
    p2Display.classList.remove('winner','loser')
    //Enabling buttons once reset is called
    p1Button.disabled = false;
    p2Button.disabled = false;
}

//If wanted we can delete the "style in html"
/*
And simply use Bulma colors, replace: 
"winner" with: has-text-sucess'
"loser" with: has-text-danger
*/

//Instead of replicating code, im creating a function to disable buttons
function disableButtons() {
    p1Button.disabled = true;
    p2Button.disabled = true;
}

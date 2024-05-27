// No te olvides que estas son las variables basicas!
var count = 0;
var timer;


var button = document.getElementById('clickButton');
var scoreDisplay = document.getElementById('score');
var messageDisplay = document.getElementById('message');


function handleClick() {
    count++;
    scoreDisplay.textContent = 'Clics: ' + count;
}


function endGame() {
    clearTimeout(timer);
    button.removeEventListener('click', handleClick);
    messageDisplay.textContent = '¡Tiempo terminado! Hiciste ' + count + ' clics.';
}


function startGame() {
    count = 0;
    scoreDisplay.textContent = 'Clics: 0';
    messageDisplay.textContent = '';
    button.addEventListener('click', handleClick);
    timer = setTimeout(endGame, 10000); // 10 segundos
}


button.addEventListener('click', function() {
    if (!timer) {
        startGame();
    }
});





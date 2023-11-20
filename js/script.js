const randomNumber = parseInt(Math.random() * 10) + 1;
let guesses = 0;

document.getElementById('submit').onclick = function() {
    
    let resultado = document.getElementById('result');

    let tentativas = document.getElementById('tries');
    
    let guess = document.getElementById('guess').value;
    guesses = guesses + 1;

    if(guess == randomNumber) {
        resultado.innerHTML = 'Parabéns! O número era ' + randomNumber;
        tentativas.innerHTML = 'Você acertou em ' + guesses + ' Tentavivas';
        document.getElementById('submit').disabled = true;
    }
    else if(guess < randomNumber) {
        resultado.innerHTML = 'Tente um número mais alto!';
    }
    else if(guess > randomNumber) {
        resultado.innerHTML = 'Tente um número mais baixo!';
    }
}
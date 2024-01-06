const randomNumber = parseInt(Math.random() * 10) + 1;
console.log(randomNumber);
let guesses = 0;
let numberOfGuesses = guesses > 1 ? 'tentativas' : 'tentativa';

document.getElementById('submit').onclick = function() {
    
    let resultado = document.getElementById('result');

    let tentativas = document.getElementById('tries');
    
    let guess = document.getElementById('guess').value;
    guesses = guesses + 1;

    let numberOfGuesses = guesses > 1 ? 'tentativas' : 'tentativa';

    if(guess == randomNumber) {
        resultado.innerHTML = 'Parabéns! O número era ' + randomNumber;
        tentativas.innerHTML = `Você acertou em ${guesses} ${numberOfGuesses}.`;
        document.getElementById('submit').disabled = true;
    }
    else if(guess < randomNumber) {
        resultado.innerHTML = 'Tente um número mais alto!';
    }
    else if(guess > randomNumber) {
        resultado.innerHTML = 'Tente um número mais baixo!';
    }

    document.getElementById('guess').value = '';
}
document.addEventListener('DOMContentLoaded', () => {
    const guessButton = document.getElementById('guessButton');
    const guessInput = document.getElementById('guessInput');
    const result = document.getElementById('result');
    const attemptsDisplay = document.getElementById('attempts');

    const min = 1;
    const max = 100;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let attempts = 0;

    guessButton.addEventListener('click', () => {
        const userGuess = Number(guessInput.value);
        attempts++;

        if (userGuess < min || userGuess > max || isNaN(userGuess)) {
            result.textContent = `Please enter a number between ${min} and ${max}.`;
            return;
        }

        if (userGuess > randomNumber) {
            result.textContent = 'Too high! Try again.';
        } else if (userGuess < randomNumber) {
            result.textContent = 'Too low! Try again.';
        } else {
            result.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // New number
            attempts = 0; // Reset attempts
        }

        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        guessInput.value = '';
    });
});
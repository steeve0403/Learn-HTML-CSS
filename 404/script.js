// Selectors
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const hangmanDisplay = document.getElementById('hangman-display');
const letterInput = document.getElementById('letter-input');
const guessButton = document.getElementById('guess-button');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-button');

// Array of words for the Hangman game
const words = ['HELLO', 'WORLD', 'JAVASCRIPT', 'DEVELOPER', 'HANGMAN'];

// Global variables
let currentWord = '';
let guessedLetters = [];
let remainingAttempts = 6;

// Initialize the game
startGame();

// Event listener for the "Guess" button
guessButton.addEventListener('click', guessLetter);

// Event listener for the "Restart" button
restartButton.addEventListener('click', restartGame);

// Function to start the game
function startGame() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  remainingAttempts = 6;
  updateDisplay();
}

// Function to update the display
function updateDisplay() {
  hangmanDisplay.textContent = currentWord
    .split('')
    .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  resultMessage.textContent = `Remaining attempts: ${remainingAttempts}`;
}

// Function to handle letter guessing
function guessLetter() {
  const guessedLetter = letterInput.value.toUpperCase();
  if (!guessedLetters.includes(guessedLetter)) {
    guessedLetters.push(guessedLetter);
    if (!currentWord.includes(guessedLetter)) {
      remainingAttempts--;
    }
  }
  letterInput.value = '';
  updateDisplay();

  // Check for game over
  if (remainingAttempts === 0) {
    resultMessage.textContent = `Game over! The word was "${currentWord}"`;
    resultMessage.style.color = '#e74c3c';
    guessButton.disabled = true;
  }

  // Check for victory
  if (!hangmanDisplay.textContent.includes('_')) {
    resultMessage.textContent = `Congratulations! You guessed the word "${currentWord}"`;
    resultMessage.style.color = '#27ae60';
    guessButton.disabled = true;
  }
}

// Event listener for the "Enter" key
letterInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    guessLetter();
  }
});

// Function to restart the game
function restartGame() {
  startGame(); // function to start the game
  guessButton.disabled = false; // Reactivate the "Guess" button
}

  



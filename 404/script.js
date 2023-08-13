const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('active');
});


const startButton = document.querySelector('.start-button');
const restartButton = document.querySelector('.restart-button');
const memoryButtons = document.querySelectorAll('.memory-button');
const resultMessage = document.getElementById('result-message');
const sequence = [1, 2, 3, 4];
let shuffledSequence = [];
let playerSequence = [];
let currentIndex = 0;

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

memoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (playerSequence.length < sequence.length) {
      const number = parseInt(button.dataset.number);
      playerSequence.push(number);
      checkSequence();
    }
  });
});

function startGame() {
  shuffledSequence = shuffleArray(sequence.slice());
  hideNumbers();
  resultMessage.textContent = '';
  playerSequence = [];
  currentIndex = 0;
  startButton.disabled = true;
  restartButton.disabled = true;
  setTimeout(() => {
    revealNumbers();
  }, 1000);
}

function restartGame() {
  startButton.disabled = false;
  restartButton.disabled = true;
  hideNumbers();
  resultMessage.textContent = '';
  playerSequence = [];
  currentIndex = 0;
}

function checkSequence() {
  if (playerSequence[currentIndex] === shuffledSequence[currentIndex]) {
    currentIndex++;
    if (currentIndex === sequence.length) {
      resultMessage.textContent = 'Congratulations! You won the Memory Game!';
      resultMessage.style.color = '#27ae60';
      restartButton.disabled = false;
    }
  } else {
    resultMessage.textContent = 'Oops, wrong sequence! Try again.';
    resultMessage.style.color = '#e74c3c';
    restartButton.disabled = false;
  }
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function hideNumbers() {
  memoryButtons.forEach(button => {
    button.textContent = '?';
  });
}

function revealNumbers() {
  memoryButtons.forEach((button, index) => {
    button.textContent = shuffledSequence[index];
  });
}

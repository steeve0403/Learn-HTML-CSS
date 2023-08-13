// Variable to indicate if the game is over or not
let gameOver = false;

/**
 * Function to reveal the content of a hidden cell when clicked.
 * @param {Event} event - The click event.
 */
function revealCell(event) {
    if (gameOver) {
        return; // Exit the function if the game is over
    }

    const cell = event.target;
    const content = cell.getAttribute("data-content");

    cell.innerText = content;
    cell.classList.remove("cell-hidden");
    cell.classList.add("cell-revealed");

    if (content === "bomb") {
        cell.innerHTML = `<img src="bomb.gif" alt="Bomb">`;
        cell.classList.remove("cell-hidden");
        cell.classList.add("cell-revealed", "cell-bomb");
        showGameOver();
    } else if (content === "1") {
        cell.classList.add("cell-one");
    } else if (content === "2") {
        cell.classList.add("cell-two");
    } else if (content === "3") {
        cell.classList.add("cell-three");
    }
}

/**
 * Function to initialize the game by attaching click event listeners to hidden cells.
 */
function initializeGame() {
    const cells = document.querySelectorAll(".cell-hidden");
    cells.forEach(cell => {
        cell.addEventListener("click", revealCell);
    });
}

/**
 * Function to show the "Game Over" message and restart button.
 */
function showGameOver() {
    gameOver = true; // Indicate that the game is over

    const gameOverElement = document.querySelector(".game-over");
    gameOverElement.style.display = "block";

    const restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", restartGame);
}

/**
 * Function to restart the game by reloading the page.
 */
function restartGame() {
    gameOver = false; // Reset the variable to indicate that the game is not over
    location.reload();
}

// Call the initializeGame function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeGame);

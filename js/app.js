// Event listener for the start game button to hide the start screen overlay
let game;
const startButton = document.querySelector("#btn__reset");
startButton.addEventListener("click", (e) => {
  game = new Game();
  game.resetGame(e);
  game.startGame();
});

// Event listener for the onscreen keyboard to call the handleInteraction() method
const button = document.querySelector("#qwerty");
button.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    game.handleInteraction(e.target);
  }
});

// Event listener for the physical keyboard to call the handleInteraction() method
document.addEventListener("keydown", (event) => {
  let keyPress = event.key;
  const LETTERS = document.getElementsByClassName("key");
  if (/\w/.test(keyPress)) {
    for (let i = 0; i < LETTERS.length; i++) {
      if (
        keyPress === LETTERS[i].textContent &&
        LETTERS[i].disabled === false
      ) {
        game.handleInteraction(LETTERS[i]);
      }
    }
  }
});

let game;
const startButton = document.querySelector("#btn__reset");
startButton.addEventListener("click", (e) => {
  game = new Game();
  game.resetGame();
  game.startGame();
});

const button = document.querySelector("#qwerty");

button.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    game.handleInteraction(e.target);
  }
});
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

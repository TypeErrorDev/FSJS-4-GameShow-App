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

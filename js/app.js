//app.js to create a new instance of the `Game` class and add event listeners for the start button and onscreen keyboard buttons.
const game = new Game();

const startButton = document.querySelector(`#btn__reset`);
startButton.addEventListener(`click`, () => {
  game.startGame();
});
const qwerty = document.querySelector(`#qwerty`);
qwerty.addEventListener(`click`, (e) => {
  if (e.target.tagName === `BUTTON`) {
    game.handleInteraction(e.target);
  }
});

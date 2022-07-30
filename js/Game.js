// Game.js to create a Game class methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.

class Game {
  constructor() {
    this.missed = 0;
  }
  startGame() {
    const overlay = document.querySelector(`#overlay`);
    overlay.style.display = `none`;
  }
  getRandomPhrase() {
    const randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
  }
  handleInteraction() {
    const qwerty = document.querySelector(`#qwerty`);
    qwerty.addEventListener(`click`, (e) => {
      if (e.target.tagName === `BUTTON`) {
        e.target.disabled = true;
      }
    });
  }
  removeLife() {
    const tries = document.querySelectorAll(`.tries img`);
    tries[this.missed].src = `images/lostHeart.png`;
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver();
    }
  }
  checkForWin() {
    const letters = document.querySelectorAll(`.letter`);
    const show = document.querySelectorAll(`.show`);
    if (letters.length === show.length) {
      return true;
    } else {
      return false;
    }
  }
  gameOver() {
    const overlay = document.querySelector(`#overlay`);
    const title = document.querySelector(`#game-over-message`);
    if (this.checkForWin()) {
      overlay.className = `win`;
      title.textContent = `You won!`;
    } else {
      overlay.className = `lose`;
      title.textContent = `You lost!`;
    }
    overlay.style.display = `flex`;
  }
}

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Life is like a box of chocolates"),
      new Phrase("There is no trying"),
      new Phrase("May the force be with you"),
      new Phrase("You talking to me"),
      new Phrase("I see dead people"),
    ];
    this.activePhrase = null;
  }
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomNumber];
    return randomPhrase;
  }
  removeLife() {
    const TRIES = document.querySelectorAll(".tries img");
    TRIES[this.missed].src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }
  gameOver(gameWon) {
    const OVERLAY = document.querySelector("#overlay");
    const GAMEOVERMESSAGE = document.querySelector("#game-over-message");
    OVERLAY.style.display = "";
    if (gameWon) {
      OVERLAY.className = "win";
      GAMEOVERMESSAGE.textContent = "You Lost!";
    }
  }
  handleInteraction(e) {
    if (this.activePhrase.checkLetter(e.textContent) === false) {
      e.classList.add("wrong");
      this.removeLife();
    } else if (this.activePhrase.checkLetter(e.textContent)) {
      e.classList.add("chosen");
      this.activePhrase.showMatchedLetter(e.textContent);
      this.checkForWin();
      if (this.checkForWin() === true) {
        this.gameOver(true);
      }
      if (this.missed > 4) {
        this.gameOver(false);
      }
    }
    e.disabled = true;
  }
  resetGame(e) {
    this.missed = 0;
    let hearts = document.getElementsByClassName("tries");
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].firstElementChild.src = "../images/liveHeart.png";
    }
    let buttons = document.getElementsByClassName("key");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("wrong");
      buttons[i].classList.remove("chosen");
      buttons[i].disabled = false;
    }
  }
}

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

  // This method randomly retrieves one of the phrases stored in the phrases array and returns it.
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomNumber];
    return randomPhrase;
  }

  // this method hides the start screen overlay, calls the getRandomPhrase() method, and adds that phrase to the board by calling the addPhraseToDisplay() method on the Phrase class.
  startGame() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  // This method checks to see if the player has revealed all of the letters in the active phrase.
  checkForWin() {
    const letter = document.querySelector(".hide");
    letter.length === 0 ? true : false;
  }

  // this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
  removeLife() {
    const TRIES = document.querySelectorAll(".tries img");
    TRIES[this.missed].src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  // this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
  gameOver(gameWon) {
    const OVERLAY = document.querySelector("#overlay");
    const GAMEOVERMESSAGE = document.querySelector("#game-over-message");
    OVERLAY.style.display = "";
    if (gameWon) {
      OVERLAY.className = "win";
      GAMEOVERMESSAGE.textContent = "You Lost!";
    }
  }

  // this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess.

  handleInteraction(e) {
    if (this.activePhrase.checkLetter(e.textContent) === false) {
      e.classList.add("wrong");
      this.removeLife();
      console.log("wrong");
    } else if (this.activePhrase.checkLetter(e.textContent)) {
      e.classList.add("chosen");
      console.log("right");
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

  // this method resets the game board, the missed guesses, and the heart images (i.e. the player's lives) at the start of each game.
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
    let phrase = document.querySelector("#phrase ul");
    phrase.innerHTML = "";
  }
}

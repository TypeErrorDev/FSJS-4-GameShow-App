class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // this method loops over the letters in the phrase and adds each letter to the display when the game starts.
  addPhraseToDisplay() {
    const phraseDiv = document.querySelector("#phrase ul");
    const phraseArray = this.phrase.split("");
    phraseArray.forEach((letter) => {
      const li = document.createElement("li");
      li.textContent = letter;
      if (letter !== " ") {
        li.className = `hide letter ${letter}`;
      } else {
        li.className = "space";
      }
      phraseDiv.appendChild(li);
    });
  }

  // this method checks to see if the letter selected by the player matches a letter in the phrase.
  checkLetter(letter) {
    const phraseArray = this.phrase.split("");
    if (phraseArray.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  // this method checks to see if the player has revealed all of the letters in the active phrase.
  showMatchedLetter(letter) {
    const selectedPhrase = document.getElementById("phrase");
    const childOfPhrase = selectedPhrase.firstElementChild;
    const liLetters = childOfPhrase.getElementsByTagName("li");
    for (let i = 0; i < liLetters.length; i++) {
      if (liLetters[i].textContent === letter) {
        liLetters[i].classList.replace("hide", "show");
      }
    }
  }
}

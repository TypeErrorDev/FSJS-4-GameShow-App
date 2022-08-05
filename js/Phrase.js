class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

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
  checkLetter() {
    const phraseArray = this.phrase.split("");
    const letter = document.querySelector("#qwerty button");
    if (phraseArray.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  showMatchedLetter(letter) {
    const selectedPhrase = document.getElementById("phrase");
    const phraseDiv = selectedPhrase.firstElementChild;
    const letterList = phraseDiv.getElementsByTagName("li");

    for (let i = 0; i < letterList.length; i++) {
      if (letterList[i].textContent === letter) {
        letterList[i].className = `show letter ${letter}`;
      }
    }
  }
}

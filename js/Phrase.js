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
}

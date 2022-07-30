// Phrase.js to create a Phrase class to handle the creation of phrases.

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay() {
    this.phrase = new Phrase(this.phrase);
    this.phrases = [
      `Top flight security of the world`,
      `To infinity and beyond`,
      `You cant handle the truth`,
      `You can do it`,
      `Bumblebee Tuna`,
    ];
  }

  checkLetter() {
    const letters = document.querySelectorAll(`.letter`);
    const letter = document.querySelectorAll(`.show`);
    if (letters.length === letter.length) {
      return true;
    } else {
      return false;
    }
  }
  showMatchedLetter() {
    const letter = document.querySelectorAll(`.letter`);
    const show = document.querySelectorAll(`.show`);
    if (letter.length === show.length) {
      return true;
    } else {
      return false;
    }
  }
}

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
  checkLetter() {}
  showMatchedLetter() {}
}

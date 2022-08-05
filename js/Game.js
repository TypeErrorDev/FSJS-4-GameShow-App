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
}

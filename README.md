# FSJS-4-GameShow-App

## Description

This application is called the "Phrase Hunter". It is a game where the user tries to guess a phrase by selecting letters from an onscreen keyboard. The user has 5 chances to guess the phrase. If the user guesses the phrase before the 5 chances are up, the user wins. If the user does not guess the phrase before the 5 chances are up, the user loses. The user can also use the "Start Game" button to start a new game.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Style Updates](#style-updates)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

In this project, I've create a browser-based, word guessing game: "Phrase Hunter." I use JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

The game will choose a random phrase, split the phrase into letters, and put those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, the game will disable that letter on the onscreen keyboard.

### Screenshot

![Testing Screenshot Caption](./screenshot.png)

### Links

- Live Site URL: [Phrase Hunter hosted by Netlify](https://your-live-site-url.com)

## My process

### Built with

- [Javascript](https://262.ecma-international.org/13.0/#sec-intro) - ES6

### Style Updates

- I added some simple hover effects to the start button
- I have added some simple customizations to the gameboard such as
  - Added double borders to the letters
  - Added text shadows to the header
  - Hover animations for the qwerty keys

### What I learned

I learned a lot about OOP (Object-Oriented Programming) and how to use it to create a game. I also learned how to use the DOM to manipulate the HTML and CSS. I learned that by utilizing classes, I can create objects that can be used to create multiple instances of the same object.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Portfolio - [www.MatthewPantel.com](https://www.matthewpantel.com)
- LinkedIn - [@MatthewPantel](https://www.linkedin.com/in/MatthewPantel)
- Twitter - [@TypeErrorDev](https://www.twitter.com/TypeErrorDev)

## Acknowledgments

I'd like to give thanks to the Student Success Mentors with Team Treehouse, the other students in their Slack channel and my friends on Discord that helped me along the way. Without everyone's support, I'd still be figuring out how to use center a Div in CSS.

# Hangman Game in React

## Goal

The goal is to create hangman game with concepts related to programming.

### `npm start`

I created react app with name hangmanGame and started my project with npm start.

I created App.js where I created word basic on programming. 
After that I created Header where I created title with name hangman game.
I created Figure file for the rod, head, body, arms and legs line. We will use that when the person chose the wrong letter to drew the corresponding figure. That file I added in App file.
After that I created Word file, for that I created state for coorectWord, and selectedWord using Math.floor in App file and pass down to the Word. Here I did some map statement and split for the letter. Also I created WrongLetter file where I did map statement for the letter which are not correct.
I created helper file where I setTimeout, and that function I used in Notification file, which will display if we are entered the same letter. In App file I created useEffect with function whcih checkes if slected word includes letter and if correct letters includes letter or wrong letter includes letter. Depending on that, the appropriate notification is displayed.
After that I created in helper file function for checkWin where I did if statement to check for win and check for lost. That function I import in Popup file which I created. That file must show the result of the game if player is won or lost. That file was import in App file, also in this file I created another function to start game again, with some random words.
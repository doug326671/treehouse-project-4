/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase('life IS Like great'.toLowerCase());
// console.log(`Phrase - phrase: ${phrase.phrase}`);


 //const game = new Game();

 //const randomPhrase = game.startGame();
 //console.log(randomPhrase);
// const phrase = new Phrase(randomPhrase);
// console.log(phrase);
// console.log(phrase.phraseSaying);
// phrase.phraseSaying;
// game.startGame();


// call the start game method and put it in the active pharse that is in the constructor
//game.startGame();
//console.log(`Active Phrase - phrase: ${game.activePhrase}`);































var game;
var keyboard = document.querySelectorAll(".key");
var phrase;
var buttonReset = document.getElementById("btn__reset");
var letterToBeDisplayed;


buttonReset.addEventListener('click',function(){
    document.getElementById("overlay").style.display='none';
    game = new Game();
    game.startGame();
    var activePhrase = game.activePhrase;
    console.log(`Active Phrase - phrase: ${activePhrase}`);
    phrase = new Phrase(activePhrase);
    phrase.checkLetter();
    console.log(phrase);
});



for (var i = 0; i < keyboard.length; i++){
    keyboard[i].onclick= function (){
        var attribute = this.innerHTML;
        letter=attribute;
        letterToBeDisplayed = phrase.showMatchedLetter(letter);
        console.log(letterToBeDisplayed);
        numberOfCorrectGuesses = game.checkForWin(letterToBeDisplayed);
        //console.log(numberOfCorrectGuesses);
    };
      
}


// if(numberOfCorrectGuesses == true){
//     keepTrackOfCorrectGuesses++;
//     console.log(keepTrackOfCorrectGuesses);
// }




//var rewriteThePhrase = [];




//console.log(letterToBeDisplayed);
        //rewriteThePhrase= phrase.showMatchedLetter(letterToBeDisplayed);
        //console.log(rewriteThePhrase);

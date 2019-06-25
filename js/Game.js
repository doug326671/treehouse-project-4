class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
        
    }

  
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
    createPhrases(){
    const newPhrases = [
        'may the force be with you', 
        'just do it',
        'just keep coding',
        'there is no trying',
        'practice makes perfect',
    ];
    
    

    return newPhrases;
   }

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
   getRandomPhrase(){
         
    const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];  
    return randomPhrase;
    }

/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
       
        var thePhrase = this.activePhrase;
        const phrase = new Phrase(thePhrase);
        phrase.addPhraseToDisplay();
    }



    handleInteraction() {
        const phrase = new Phrase();
        //phrase.checkLetter('a');
        var keyboard = document.querySelectorAll(".key");
        for (var i = 0; i < keyboard.length; i++){
           keyboard[i].onclick= function (){
               var attribute = this.innerHTML;
               var letter=attribute;
               var letterToBeDisplayed = phrase.checkLetter(letter);
               console.log("letterToBeDisplayed is " + letterToBeDisplayed);
               console.log(letter);
               if(letterToBeDisplayed){
                   phrase.showMatchedLetter(letter);
                   
               }
               
               
               var typedDivval = document.getElementById('typedDiv').innerHTML;
               typedDivval = typedDivval + letter;
               document.getElementById('typedDiv').innerHTML = typedDivval;
               
               game.checkForWin();
               
               // console.log("what is the letter" + letterToBeDisplayed);
               //var numberOfCorrectGuesses = game.checkForWin(letterToBeDisplayed);
               //console.log(numberOfCorrectGuesses);
            //    if(letterToBeDisplayed == undefined){
            //        numberOfMisses = game.removeLife();
            //        //console.log(numberOfMisses);
            //    }
               
               //console.log(numberOfCorrectGuesses);
               
           }
            
        };
        
    }



    checkForWin(){        
        var thePhrase = this.activePhrase.split("");
        var youWin = document.getElementById("overlay");
        var element = document.getElementById("game-over-message");
        var para = document.createElement("p");
        var node = document.createTextNode("You win");
        
        console.log(thePhrase);
        var theNumberOfChars = thePhrase.length//get the number of chars
        console.log(theNumberOfChars);
        var typedDivval = document.getElementById('typedDiv').innerHTML;
        var thePhrasetotest = thePhrase;
        thePhrasetotest = thePhrasetotest.toString().replace(/[\W_]+/g,"");
        var phrasearray = thePhrasetotest.split("");

        var didiwin = 1;

        for (var i = 0; i < phrasearray.length; i++){

            var doesit = typedDivval.includes(phrasearray[i]);
            console.log("comparing phrase letter " + phrasearray[i] + " with " + typedDivval);
            if (doesit == false) {

                didiwin = 0;
            
            
            // Decrement Hearts
            
            }

        }

        if (didiwin == 1) {

                 // Show that they won
                //  console.log("I Won. Yay!");
                //  document.getElementById('qwerty').innerHTML = "";
                //  document.getElementById('phrase').innerHTML = "";
                //  document.getElementById('banner').innerHTML = "<CENTER>Congratulations! You Won!</CENTER>";
                //  document.getElementById('scoreboard').innerHTML = "";
                //  //document.getElementById('overlay').replace(win);
                //  document.getElementById("overlay");
                para.appendChild(node);
                youWin.style.display='inline';
                youWin.classList.add('win');
                element.appendChild(para);
                //element.insertBefore(para, child);
                //youWin.innerHTML = "<CENTER>Congratulations! You Won!</CENTER>";
                //elements.style.display = 'red';

        }
     }
    
}

// var getTheNumberOfli = document.getElementById("phrase").getElementsByTagName("LI").length;
// var getli = document.getElementById("phrase").getElementsByTagName("LI")
// console.log('there are ' + getTheNumberOfSpacesInThePhrase + ' number of spaces in the phrase');
// //console.log(letter);
// console.log('there are  '+ getTheNumberOfli + ' number of li tags total');
// console.log(getli);
// var keepTrackOfShow = getTheNumberOfSpacesInThePhrase;
// for(var i = 0; i <getli.length; i++){
//     // console.log(getli[i].classList.contains('show'));
//     if(getli[i].classList.contains('show')){
//         keepTrackOfShow++;
//         // console.log(keepTrackOfShow);
//         if(keepTrackOfShow==getTheNumberOfli){
//             alert('you won');
//         }
//     }
// }
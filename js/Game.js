/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor(missed,phrase,activePhrase){
         this.missed = missed;
         this.phrase = phrase;
         this.activePhrase = activePhrase;
         
     }
     get createPhrases(){
         this.phrases = [
        'may the force be with you', 
        'just do it',
        'just keep coding',
        'there is no trying',
        'practice makes perfect'
        ]
         return this.phrases;
     }

     get phrases(){
         return this._phrases;
     }

     
     set phrases(phrases){
         this._phrases=phrases; // storing value here in _phrases
         //console.log(`setter called: ${phrases}`);//this shows that it has been called
     }

     // select random phrase from the phrase property
     getRandomPhrase(){
         
         var arrayLength =(Math.floor( Math.random() * (this.createPhrases.length)));
         //console.log(arrayLength);
         var randomPhrase = this.createPhrases[arrayLength];
         return randomPhrase;
    }

    startGame(){
        
        var phrase = this.getRandomPhrase();
        var selectedPhrase = new Phrase(phrase);
        selectedPhrase.addPhraseToDisplay();
        this.activePhrase = phrase;
        return this.activePhrase;
    }

 checkForWin(letter){
    var getTheNumberOfSpacesInThePhrase = document.getElementsByClassName('space').length//getElementById('phrase').getElementsByTagName('LI');
    var getTheNumberOfli = document.getElementById("phrase").getElementsByTagName("LI").length;
    var getli = document.getElementById("phrase").getElementsByTagName("LI")
    // console.log('there are ' + getTheNumberOfSpacesInThePhrase + ' number of spaces in the phrase');
    // console.log(letter);
    // console.log('there are  '+ getTheNumberOfli + ' number of li tags total');
    // console.log(getli);
    var keepTrackOfShow = getTheNumberOfSpacesInThePhrase;
    for(var i = 0; i <getli.length; i++){
        // console.log(getli[i].classList.contains('show'));
        if(getli[i].classList.contains('show')){
            keepTrackOfShow++;
            // console.log(keepTrackOfShow);
            if(keepTrackOfShow==getTheNumberOfli){
                alert('you won');
            }
        }
    }
    return letter;
 }

 removeLife(){
    var missedSelections = 0;
    console.log('the letter was not in the phrase');
    var hearts = document.getElementsByClassName("tries").length;
    console.log("the number of hearts is " + hearts);
    for(var i = 0; i < hearts.length; i++){
        if(hearts[i]<=5){
            hearts[i].setAttribute('src','./images/lostHeart.png');
        }
    }
 }
    
}
















    // var whatIsThePhrase = getTheNumberOfSpacesInThePhrase;
    // console.log(whatIsThePhrase);






   // for(var i = 0; i < getTheNumberOfSpacesInThePhrase.length; i++){
    //     console.log(getTheNumberOfSpacesInThePhrase[i].classList.contains('show'));
    //     if(getTheNumberOfSpacesInThePhrase[i].classList.contains('show')){
    //         keepTrackOfShow++;
    //         console.log(keepTrackOfShow);
    //         if(keepTrackOfShow==whatIsThePhrase){
    //             alert('you won')
    //         }
    //     }
    // }
    


































 //const game = new Game();
 //console.log(game.getRandomPhrase());

//  this.phrase = function(){
//     const phrase = new Phrase(this.randomPhrase);
//     phrase.phraseSaying;
    
// }

// if(letterToBeDisplayed == undefined){
//     alert('no letter in phrase');
//     isLetterThere = false;
// }else{
//     alert('letter in phrase');
//     isLetterThere = true;
// }
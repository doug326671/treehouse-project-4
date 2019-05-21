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

    handleInteraction(){
        
      
    }
    
}

 //const game = new Game();
 //console.log(game.getRandomPhrase());

//  this.phrase = function(){
//     const phrase = new Phrase(this.randomPhrase);
//     phrase.phraseSaying;
    
// }
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



    handleInteraction(letter) {

        var keyboard = document.querySelectorAll(".key");
        var misses = 1;
        
        console.log("the letter selected " + letter);
        const phrase = new Phrase();
        var isLetterThere = phrase.checkLetter(letter);
        console.log("Is letter in phrase " + isLetterThere);

        if(isLetterThere){
            phrase.showMatchedLetter(letter);
            //console.log("the letter was there so disable the letter is " + letter);
            
            keyboard.forEach(function (keyboard, index) {
                if(letter == keyboard.innerHTML){
                         keyboard.disabled = true;
                        keyboard.classList.add('chosen');
                }
            });
          

        }else{
            game.removeLife(misses);
            var x = misses++
            game.checkForWin();
            keyboard.forEach(function (keyboard, index) {
                if(letter == keyboard.innerHTML){
                    keyboard.disabled = true;
                    keyboard.classList.add('wrong');
                    
                }
            });
            
        
        }
        
    }

    // for(var i = 0; i < keyboard.length;i++){
                
    
    // }



    checkForWin(){        
        var thePhrase = this.activePhrase.split("");
        var typedDivval = document.getElementById('typedDiv').innerHTML;
        var thePhrasetotest = thePhrase;
        thePhrasetotest = thePhrasetotest.toString().replace(/[\W_]+/g,"");
        var phrasearray = thePhrasetotest.split("");

        var didiwin = 1;

        for (var i = 0; i < phrasearray.length; i++){

            var doesit = typedDivval.includes(phrasearray[i]);
            if (doesit == false) {

                didiwin = 0;
            
            }

        }

        if (didiwin == 1) {
            
            game.gameOver();
        }else{
            
        }
     }

     gameOver(numOfMisses){

        var misses = numOfMisses;
        
        if(misses!=true){

        var youWin = document.getElementById("overlay");
        var element = document.getElementById("game-over-message");
        var para = document.createElement("p");
        var node = document.createTextNode("You Won!");
        para.appendChild(node);
        youWin.style.display='block';
        youWin.classList.add('win');
        element.appendChild(para);
        element.classList.add('win');

        document.getElementById("btn__reset").addEventListener("click", function(){
            location = location;
          });
        
       
                       
        }else if(misses==true){
        
        var youWin = document.getElementById("overlay");
        var element = document.getElementById("game-over-message");
        var para = document.createElement("p");
        var node = document.createTextNode("Better Luck Next Time!");
        para.appendChild(node);
        youWin.style.display='block';
        youWin.classList.add('lose');
        element.appendChild(para);
        element.classList.add('lose');
        game.startGame();
        this.missed = 0;
        
        console.log(this.missed);

        document.getElementById("btn__reset").addEventListener("click", function(){
            location = location;
          });
        }
    }

    removeLife(missed){
        const heartElements = document.querySelectorAll('.tries img');
        heartElements[this.missed].src = 'images/lostHeart.png';
         var misses = missed++;
        console.log("you missed:  " + this.missed++);
        if(this.missed == 5){
            game.gameOver(true);
        }
        return misses;
        
        }
        

}
    



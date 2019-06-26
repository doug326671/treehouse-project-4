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
        var misses = 1;
        //phrase.checkLetter('a');
        var keyboard = document.querySelectorAll(".key");
        for (var i = 0; i < keyboard.length; i++){
           keyboard[i].onclick= function (){
               var attribute = this.innerHTML;
               var letter=attribute;
               var letterToBeDisplayed = phrase.checkLetter(letter);
               //console.log("letterToBeDisplayed is " + letterToBeDisplayed);
               //console.log(letter);
               if(letterToBeDisplayed){
                   phrase.showMatchedLetter(letter);
                   
               }else{
                game.removeLife(misses);
                var x = misses++
                //console.log(misses++);
               }
               
               
               var typedDivval = document.getElementById('typedDiv').innerHTML;
               typedDivval = typedDivval + letter;
               document.getElementById('typedDiv').innerHTML = typedDivval;
               
               game.checkForWin();
               
           }
            
        };
        
    }



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
        console.log("remove life "+ numOfMisses);

        if(numOfMisses!=true){

        var youWin = document.getElementById("overlay");
        var element = document.getElementById("game-over-message");
        var para = document.createElement("p");
        var node = document.createTextNode("You Won!");
        para.appendChild(node);
        youWin.style.display='block';
        youWin.classList.add('win');
        element.appendChild(para);
        element.classList.add('win');
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
        }
     }

     removeLife(missed){
        //var hearts = document.getElementsByClassName("tries");
        
        var misses = missed++;
        
        this.missed = misses;
        console.log("you missed:  " + this.missed);
        if(this.missed == 5){
            game.gameOver(true);
        }
        return misses
        
        }
        

}
    


//for(var i = 0; i < hearts.length; i++){
    //     //console.log(hearts[i]);
    //     if(missed<5){
    //         misses+1;
    //         console.log(misses);
    //     }
    //     }
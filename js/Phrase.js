class Phrase{
    constructor(phrase){
        this.phrase = phrase;
    }
/**
* Display phrase on game board
*/
    addPhraseToDisplay(){
        var selectedPhrase = this.phrase.split("");
        //console.log(selectedPhrase);
        let liArr ="";
        var putLiInCorrectDiv = document.getElementById("phrase");//.firstElementChild;
        var createLi = document.createElement("LI");
        putLiInCorrectDiv.appendChild(createLi);
        

        for(var i = 0; i < selectedPhrase.length; i++){
            if(selectedPhrase[i]=== " "){
                liArr += '<li class = "space"> </li>';
            }else{

                liArr += '<li class = "hide letter ' +selectedPhrase[i]+'">' +selectedPhrase[i]+'</li> ';

            }
        }   
    
        document.getElementById("phrase").innerHTML = liArr;        


    return selectedPhrase;
    }
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(char) {
        
        const selectedPhrase = game.activePhrase.split('');
        //console.log(selectedPhrase);
        var isLetterThere = selectedPhrase.includes(char);
        //console.log(isLetterThere);
        
        if(isLetterThere){
            
            return true;
            
        }else{
            return false;
        }
    }

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
   showMatchedLetter(letterFromGameJs){
    var theLetterToBeShown= letterFromGameJs;
    console.log(theLetterToBeShown);
    var selectedPhrase = game.activePhrase; //this.addPhraseToDisplay(); 
    
    if(selectedPhrase.includes(theLetterToBeShown)){
       if (theLetterToBeShown) {
           if (theLetterToBeShown == "a") {
               var listofthisletter = document.querySelectorAll('.letter.a')
                   for (var i = 0; i < listofthisletter.length; i++) {
                       listofthisletter[i].classList.replace('letter','show');
                       //listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "b") {
                   var listofthisletter = document.querySelectorAll('.letter.b')
                       for (var i = 0; i < listofthisletter.length; i++) {
                           listofthisletter[i].classList.remove('letter');
                           listofthisletter[i].classList.add('show');
                           
                       }
                   }
               if (theLetterToBeShown == "c") {
                   var listofthisletter = document.querySelectorAll('.letter.c')
                   for (var i = 0; i < listofthisletter.length; i++) {
                       listofthisletter[i].classList.remove('letter');
                       listofthisletter[i].classList.add('show');
                       }
                   }
               if (theLetterToBeShown == "d") {
                   var listofthisletter = document.querySelectorAll('.letter.d')
                   for (var i = 0; i < listofthisletter.length; i++) {
                       listofthisletter[i].classList.remove('letter');
                       listofthisletter[i].classList.add('show');
                       }
                   }

               if (theLetterToBeShown == "e") {
                   var listofthisletter = document.querySelectorAll('.letter.e')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.replace('letter','show');
                   //listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "f") {
                   var listofthisletter = document.querySelectorAll('.letter.f')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "g") {
                   var listofthisletter = document.querySelectorAll('.letter.g')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "h") {
                   var listofthisletter = document.querySelectorAll('.letter.h')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "i") {
                   var listofthisletter = document.querySelectorAll('.letter.i')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "j") {
                   var listofthisletter = document.querySelectorAll('.letter.j')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "k") {
                   var listofthisletter = document.querySelectorAll('.letter.k')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "l") {
                   var listofthisletter = document.querySelectorAll('.letter.l')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "m") {
                   var listofthisletter = document.querySelectorAll('.letter.m')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "n") {
                   var listofthisletter = document.querySelectorAll('.letter.n')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "o") {
                   var listofthisletter = document.querySelectorAll('.letter.o')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "p") {
                   var listofthisletter = document.querySelectorAll('.letter.p')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "q") {
                   var listofthisletter = document.querySelectorAll('.letter.q')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "r") {
                   var listofthisletter = document.querySelectorAll('.letter.r')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "s") {
                   var listofthisletter = document.querySelectorAll('.letter.s')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "t") {
                   var listofthisletter = document.querySelectorAll('.letter.t')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "u") {
                   var listofthisletter = document.querySelectorAll('.letter.u')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "v") {
                   var listofthisletter = document.querySelectorAll('.letter.v')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "w") {
                   var listofthisletter = document.querySelectorAll('.letter.w')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "x") {
                   var listofthisletter = document.querySelectorAll('.letter.x')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "y") {
                   var listofthisletter = document.querySelectorAll('.letter.y')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
               if (theLetterToBeShown == "z") {
                   var listofthisletter = document.querySelectorAll('.letter.z')
                   for (var i = 0; i < listofthisletter.length; i++) {
                   listofthisletter[i].classList.remove('letter');
                   listofthisletter[i].classList.add('show');
                   }
               }
       }
       
    }
    return listofthisletter;
  }
  
}


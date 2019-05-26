/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
       this.phrase = phrase;
    }

    get phraseSaying(){
        
        return this.addPhraseToDisplay();
    }

    addPhraseToDisplay(){
       var selectedPhrase = this.phrase.split("");
       let liArr ="";
       var putLiInCorrectDiv = document.getElementById("phrase");//.firstElementChild;
       var createLi = document.createElement("LI");
       putLiInCorrectDiv.appendChild(createLi);
       

        for(var i = 0; i < selectedPhrase.length; i++){
            if(selectedPhrase[i]=== " "){
                liArr += '<li class = "space"> </li>';
            }else{

                liArr += '<li class = "letter ' +selectedPhrase[i]+'">' +selectedPhrase[i]+'</li> ';

            }
        }   
      
       document.getElementById("phrase").innerHTML = liArr;        

 
              return selectedPhrase;
   }

   checkLetter(char){
    var selectedPhrase = this.addPhraseToDisplay(); 
    console.log('the phrase is ' + selectedPhrase);
    var isLetterInPhrase = selectedPhrase.includes(char)
    console.log('the letter chosen is ' + char);
    var theLetterToBeShown = "";
    if(isLetterInPhrase){
        console.log(char + ' is in the phrase ');
        theLetterToBeShown = char;
    }else{
        console.log(char + ' is not in the phrase ');
        theLetterToBeShown = "";
    }
   return theLetterToBeShown;
}

   
        
    
   showMatchedLetter(letterFromAppJs){
     var theLetterToBeShown= this.checkLetter(letterFromAppJs);
     console.log(theLetterToBeShown);
     var selectedPhrase = this.addPhraseToDisplay(); 
     if(selectedPhrase.includes(theLetterToBeShown)){

        if (theLetterToBeShown) {
            if (theLetterToBeShown == "a") {
                var listofthisletter = document.querySelectorAll('.letter.a')
                    for (var i = 0; i < listofthisletter.length; i++) {
                        listofthisletter[i].classList.remove('letter');
                        listofthisletter[i].classList.add('show');
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
                    listofthisletter[i].classList.remove('letter');
                    listofthisletter[i].classList.add('show');
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
     
   }
   
}







        // console.log('show the letter '+ theLetterToBeShown);
        // var theLetters = theLetterToBeShown;

// for(var i = 0; i<theLetters; i++){
//     if(theLetters[i] == theLetterToBeShown){
//      console.log(theLetters[i]);
//     }
// }












































































































//  var selectTheSpot = document.getElementById('phrase');
//  var createLi = document.createElement('LI');
//  phraseLength = phrase.length;

//  for(let i = 0; i < phraseLength.length; i++){
//      createLi += 1 ;
//  }



// selectedPhrase.forEach(element => {
//     liArr += '<li class = "hide letter">' + element + '</li>';
// });



// var letter = new Game().handleInteraction();






// addPhraseToDisplay(){
//   
    
//      //var phraseLi = document.getElementById("phrase").firstElementChild;
//      //var createLi = document.createElement("LI");
//      //phrase.appendChild(createLi);
     
//      return selectedPhrase;
  
//  }


// for(var i = 0; i< this.phrase.length; i++){
//     //var selectedPhrase = this.phrase.length;
//      var phraseLi = document.getElementById("phrase").firstElementChild;
//      var createLi = document.createElement("LI");
//      var liInDoc = phraseLi.appendChild(createLi);
//      liInDoc += i;
//      return phraseSaying;






// var selectedPhrase = this.phrase;





   



// selectedPhrase.forEach(function(element){
//     if(selectedLetter == element){
//         alert('try again');
//     }
// });






 
// var selectedPhrase = this.phrase.split();
// var game = new Game();
// var selectedLetter = game.handleInteraction();
// console.log(selectedPhrase);
// console.log(selectedLetter);
//  function checkAvail(selectedPhrase, val){
//     return selectedPhrase.some(function(arrVal){
//         return val === arrVal;
//     });
// }

// checkAvail(selectedPhrase,selectedLetter);
// return checkAvail;
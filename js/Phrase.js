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
           liArr += '<li class = "letter ' + selectedPhrase[i] + '">' +selectedPhrase[i]+'</li> ';

            }
        }   
      
       document.getElementById("phrase").innerHTML = liArr;        
       return liArr;
   }

   checkLetter(char){
    var selectedPhrase = this.addPhraseToDisplay(); 
    var x = selectedPhrase.includes(char)
    console.log('the phrase is ' + selectedPhrase);
    console.log('the letter chosen is ' + char);
    if(x){
        console.log(char + ' is in the phrase ');
    }else{
        console.log(char + ' is not in the phrase ');

    }
   
}

   
        
    
//    showMatchedLetter(){
//      var x = this.checkLetter();
//      console.log(x);
//    }
   
}






















































































































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
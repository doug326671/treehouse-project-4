
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase}`);

var newusertypedDiv = document.createElement('div');
newusertypedDiv.className = "usertype";
newusertypedDiv.id = 'typedDiv';
document.body.appendChild(newusertypedDiv);


var game = new Game();
var phrase = new Phrase();
var buttonReset = document.getElementById("btn__reset");

buttonReset.addEventListener('click',function(){
    document.getElementById("overlay").style.display='none';
        // this.activePhrase = this.getRandomPhrase().toLowerCase();
         //game = new Game();
         game.startGame();
         
      
});
//game.handleInteraction();
//console.log(game.handleInteraction());
// game.checkForWin();


var keyboard = document.querySelectorAll(".key");
for (var i = 0; i < keyboard.length; i++){
    keyboard[i].onclick= function (){

        var attribute = this.innerHTML;
        var letter=attribute;
        //console.log("the letter selected is " + letter);
         game.handleInteraction(letter);
        //console.log("the letter to be displayed is " + letterToBeDisplayed);
        // if(letterToBeDisplayed){
        //     game.handleInteraction(letterToBeDisplayed);
        // }else{
        //     game.handleInteraction(letterToBeDisplayed);
        // }
        
        
        var typedDivval = document.getElementById('typedDiv').innerHTML;
        typedDivval = typedDivval + letter;
        document.getElementById('typedDiv').innerHTML = typedDivval;
        
        game.checkForWin();
        
    }
     
 };



//  for (var i = 0; i < keyboard.length; i++){
//     keyboard[i].onclick= function (){
//         var attribute = this.innerHTML;
//         var letter=attribute;
//     }
// }

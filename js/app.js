
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
game.handleInteraction();
//console.log(game.handleInteraction());
// game.checkForWin();



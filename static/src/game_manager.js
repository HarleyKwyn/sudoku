function GameManager(Sudoku, startingBoard){
  this.engine = new Sudoku(startingBoard);
  this.registerEvents();
};

GameManager.prototype.registerEvents = function(){
  var self = this;
  var engine = this.engine;
  //handle user input on game field
  $('.editable').on('keyup', function(event){
    var target = event.target;
    var boardIndex = target.data;
    var userInput = target.valueAsNumber;
    if(userInput){
      $(this).removeClass('invalid');
    }else{
      $(this).addClass('invalid');
    }
    engine.updateBoard(boardIndex, userInput);
    self.highlightConflicts();

    if( engine.getBoardState().isValid ){
      self.gameWin();
    };
    console.log('this',this)
  });
};

GameManager.prototype.highlightConflicts = function(){

};

GameManager.prototype.clearHighlighting = function(){
  $('.invalid').removeClass('.invalid');
};

GameManager.prototype.gameWin = function(){
  console.log('You win! :D');
};

GameManager.prototype.resetBoard = function(){
  this.game.resetBoard();
  this.storage.clearGameBoard();
  $('input').clear();
};
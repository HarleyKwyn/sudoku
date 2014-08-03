function GameManager(Sudoku, startingBoard){
  this.engine = new Sudoku(startingBoard);
  this.registerEvents();
};

GameManager.prototype.registerEvents = function(){
  var self = this;
  var engine = this.engine;
  //handle user input on game field
  $('.editable').on('keyup', function(event){
    var integerValue = $(this).children()[0].valueAsNumber
    var boardIndex = event.target.data;
    console.log( integerValue , this.value);

    //Not working due to type="number" can't differentiate between
    //empty field and string that is not a number
    // if(  integerValue > 1 || integerValue < 9 ){
    //   $(this).removeClass('invalid');
    // }else{
    //   $(this).addClass('invalid');
    // }
    
    engine.updateBoard(boardIndex, integerValue);
    
    self.clearHighlighting();

    if( engine.getBoardState().isValid ){
      self.gameWin();
    };

  });
  //handle board reset
  $('#clear').on('click', function(){
    console.log('clear', self);
    self.resetBoard();
  });
  //handle highlight check event
  $('#check').on('click', function(){                                                     
    var action = $(this).html()
    if(action === 'Check'){
      var boardstate = engine.getBoardState();
      self.highlightAllConflicts(boardstate.conflicts);
      $(this).html('Clear Highlighting');
    }else{
      self.clearHighlighting();
      $(this).html('Check');
    }
  });
  //TODO: Add tooltip hover for .invalid
};
GameManager.prototype.highlightSingleConflict = function(setType, index){
  var queryString =  '.' +setType + index;
  console.log(queryString);
  $(queryString).addClass('conflict');
}

GameManager.prototype.highlightAllConflicts = function(conflicts){
  for(conflictType in conflicts){
    if(conflictType !== 'length' && conflictType !== 'quad'){
      var listOfConflicts = conflicts[conflictType];
      for(var i = 0; i < listOfConflicts.length; i++){
        this.highlightSingleConflict(conflictType, listOfConflicts[i]);
      }
    }
  }
};

GameManager.prototype.newBoard = function(){
  //TODO: Make AJAX request to server for new board
  //replace rendered html in #gameboard and creating a new GameManager object
};

GameManager.prototype.clearHighlighting = function(){
  $('.conflict').removeClass('conflict');
};

GameManager.prototype.gameWin = function(){
  console.log('You win! :D');
};

GameManager.prototype.resetBoard = function(){
  this.engine.resetBoard();
  $('.invalid').removeClass('.invalid');
  $('input').val('');
};
function GameManager(Sudoku, startingBoard){
  this.engine = new Sudoku(startingBoard);
  this.registerEvents();
};

GameManager.prototype.registerEvents = function(){
  var self = this;
  var engine = this.engine;
  //handle user input on game field
  $('.editable > input').on('keyup', function(event){
    var integerValue = $(this).val()
    integerValue = integerValue ? parseInt(integerValue) : 0;
    var boardIndex = parseInt($(this).data('index'));

    engine.updateBoard(boardIndex, integerValue);
    
    self.clearHighlighting();
    $('#check').html('Check');

    if( engine.getBoardState().isValid ){
      self.gameWin();
    };

  });
  //handle board reset
  $('#clear').on('click', function(){
    self.resetBoard();
  });
  //handle highlight check event
  $('#check').on('click', function(){                                                     
    var action = $(this).html()
    if(action === 'Show Errors'){
      var boardstate = engine.getBoardState();
      self.highlightAllConflicts(boardstate.conflicts);
      $(this).html('Hide Errors');
    }else{
      self.clearHighlighting();
      $(this).html('Show Errors');
    }
  });
  //TODO: Add tooltip hover for .invalid
};
GameManager.prototype.highlightSingleConflict = function(setType, index){
  var queryString =  '.' +setType + index;
  $(queryString).addClass('conflict');
}

GameManager.prototype.highlightAllConflicts = function(conflicts){
  for(conflictType in conflicts){
    if(conflictType !== 'length'){
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
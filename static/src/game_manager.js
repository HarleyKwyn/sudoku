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
    
    self.clearHighlighting();

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
    console.log(action)
    if(action === 'Check'){
      var boardstate = engine.getBoardState();
      self.highlightConflicts(boardstate.conflicts);
      $(this).html('Clear Highlighting');
    }else{
      self.clearHighlighting();
      $(this).html('Check');
    }
    console.log($(this))
  });
  //TODO: Add tooltip hover for .invalid
};

GameManager.prototype.highlightConflicts = function(conflicts){
  console.log('conflicts', conflicts)
};

GameManager.prototype.newBoard = function(){
  //TODO: Make AJAX request to server for new board
  //replace rendered html in #gameboard and creating a new GameManager object
};

GameManager.prototype.clearHighlighting = function(){
  $('.conflict').removeClass('.conflict');
};

GameManager.prototype.gameWin = function(){
  console.log('You win! :D');
};

GameManager.prototype.resetBoard = function(){
  this.engine.resetBoard();
  $('.invalid').removeClass('.invalid');
  $('input').clear();
};
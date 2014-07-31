var Sudoku = function(board){
  this._board = board;
  this._origonalBoard = board;
};

Sudoku.prototype.isValidBoard = function(){
  var currentBoard = this._board;
  var quadrentSets = currentBoard.createQuadrentSets();
  var rowSets = currentBoard.createRowSets();
  var columnSets = currentBoard.createColumnSets();
  

  return false;
};

Sudoku.prototype.resetBoard = function(){
  return false;
};

Sudoku.prototype.updateBoard=function(index, value){
  return false;
};

Sudoku.prototype.createQuadrentSets = function(board){
  var sets = [];
  return set;
};

Sudoku.prototype.createRowSets = function(board){
  var sets = [];
  return set;
};

Sudoku.prototype.createColumnSets = function(board){
  var sets = [];
  return sets;
};

Sudoku.prototype.isValidSet = function(set){
  if( _.unique(set) && ! _.contains(set, 0) ){
    return true;
  }
  return false;
};

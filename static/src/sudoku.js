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
  var setCount = {};
  for (var i = 0; i < set.length; i++) {
    var item = set[i];
    if(item < 0 || item > 10){
      return false;
    }else if(setCount[item]){
      return false;
    }else{
      setCount[item] = true;
    }
  };
  return true;
};

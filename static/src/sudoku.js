var Sudoku = function(board){
  this._board = board;
  this._origonalBoard = board;
};

Sudoku.prototype.isValidBoard = function(){
  var currentBoard = this._board;
  var quadrentSets = currentBoard.getQuadrantSets();
  var rowSets = currentBoard.getRowSets();
  var columnSets = currentBoard.getColumnSets();
  

  return false;
};

Sudoku.prototype.resetBoard = function(){
 d 
  return false;
};

Sudoku.prototype.updateBoard=function(index, value){

  return false;
};

Sudoku.prototype.getQuadrantSets = function(){

  return sets;
};

Sudoku.prototype.getRowSets = function(){
  var sets = [];
  var currentBoard = this._board;
  var rowStart, rowEnd;
  for(var i = 0; i < 9 ; i++){
    rowStart= i*9 ;
    rowEnd = rowStart+9
    sets.push(currentBoard.slice(rowStart, rowEnd))
  }
  return sets;
};

Sudoku.prototype.getColumnSets = function(){
  var sets = [];
  var currentBoard = this._board;
  for(var i = 0; i < 9; i ++){
    sets.push([]);
    for(var j = 0; j < 9; j++){
      var boardIndex = (j*9) + i;
      sets[i].push(currentBoard[boardIndex]);
    }  
  }
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

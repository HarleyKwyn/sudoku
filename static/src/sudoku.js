var Sudoku = function(board){
  this._board = board;
  this._origonalBoard = board;
};

Sudoku.prototype.getBoardState = function(){
  var conflicts = { quad: [] , row: [], column: [], length: 0};
  var boardState = { isValid:false, conflicts: conflicts};
  
  var allSets = {
    quad: this.getQuadrantSets(),
    row : this.getRowSets(),
    column: this.getColumnSets()
  };
  
  var checkConflicts = function(collectionOfSets){
    _.forEach( collectionOfSets ,function(sets, setName){
      _.forEach(sets, function(set, index){
        if( ! this.isValidSet(set) ){
          conflicts[setName].push(index);
          conflicts.length++;
        }   
      }, this)
    },this);
  };

  checkConflicts.call(this, allSets);

  if (conflicts.length === 0 ){
    boardState.isValid = true;
  }
  console.log(boardState);
  return boardState;
};

Sudoku.prototype.setBoard = function(newBoard){
  this._board = newBoard;
  return true;
};

Sudoku.prototype.resetBoard = function(){
  this._board = this._origonalBoard;
  return false;
};

Sudoku.prototype.updateBoard=function(index, value){
  this._board[index] = value;
  return true;
};

Sudoku.prototype.getQuadrantSets = function(){
  var sets = [];
  var currentBoard = this._board;
  var rowStart, rowEnd, quadrantRow, quadrantColumn;
  for(var i = 0; i < 9 ; i++){
    sets.push([]);
    quadrantRow = 0;
    for(var j = 0; j < 3 ; j++){

      quadrantColumn = (i%3);
      quadrantRow = Math.floor( (i*9) / (9*3) );

      rowStart = quadrantColumn * 3 + quadrantRow * (9*3) + j*9;
      rowEnd = rowStart + 3;
      sets[i] = sets[i].concat( currentBoard.slice(rowStart, rowEnd) );

    }
  }

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

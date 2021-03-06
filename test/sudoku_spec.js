var expect = chai.expect;

describe('Sudoku', function(){
  var validSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var invalidSet = [1, 2, 3, 5, 6, 7, 8, 13, 9];
  var origonalBoard, validBoard, testSudoku, solvedSudoku;
  var origonalRowSets = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ] ;
  var origonalColumnSets = [
    [5, 6, 0, 8, 4, 7, 0, 0, 0],
    [3, 0, 9, 0, 0, 0, 6, 0, 0],
    [0, 0, 8, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 8, 0, 0, 4, 0],
    [7, 9, 0, 6, 0, 2, 0, 1, 8],
    [0, 5, 0, 0, 3, 0, 0, 9, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 7],
    [0, 0, 0, 3, 1, 6, 0, 5, 9]
  ];
  var origonalQuadrantSets = [
    [5, 3, 0, 6, 0, 0, 0, 9, 8],
    [0, 7, 0, 1, 9, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 4, 0, 0, 7, 0, 0],
    [0, 6, 0, 8, 0, 3, 0, 2, 0],
    [0, 0, 3, 0, 0, 1, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 1, 9, 0, 8, 0],
    [2, 8, 0, 0, 0, 5, 0, 7, 9] 
  ]

  beforeEach(function(done){
    origonalBoard = [ 5, 3, 0, 0, 7, 0, 0, 0, 0, 6, 0, 0, 1, 9, 5, 0, 0, 0, 0, 9, 8, 0, 0, 0, 0, 6, 0, 8, 0, 0, 0, 6, 0, 0, 0, 3, 4, 0, 0, 8, 0, 3, 0, 0, 1, 7, 0, 0, 0, 2, 0, 0, 0, 6, 0, 6, 0, 0, 0, 0, 2, 8, 0, 0, 0, 0, 4, 1, 9, 0, 0, 5, 0, 0, 0, 0, 8, 0, 0, 7, 9 ];
    validBoard = [ 5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4, 8, 1, 9, 8, 3, 4, 2, 5, 6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3, 9, 2, 4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5, 3, 4, 5, 2, 8, 6, 1, 7, 9];
    testSudoku = new Sudoku(origonalBoard);
    solvedSudoku = new Sudoku(validBoard);
    done();
  });

  describe('isValidSet', function(){
    it('should return false for invalid set', function(){
      expect( testSudoku.isValidSet(invalidSet) ).to.equal(false);
    });

    it('should return true for valid set', function(){
      expect( testSudoku.isValidSet(validSet) ).to.equal(true);
    });
  });

  describe('getBoardState', function(){
    it('should return state object with isValid property of false for invalid board', function(){
      expect( testSudoku.getBoardState().isValid ).to.equal(false);
    });
    it('should return state object with isValid property of true for valid board', function(){
      expect( solvedSudoku.getBoardState().isValid ).to.equal(true);
    });
  });

  describe('getRowSets', function(){
    it('should return an array of row sets', function(){
      expect( testSudoku.getRowSets() ).to.deep.equal( origonalRowSets );    
    })
  });

  describe('getColumnSets', function(){
    it('should return an array of column sets', function(){
      expect( testSudoku.getColumnSets() ).to.deep.equal( origonalColumnSets );    
    })
  })

  describe('getQuadrantSets', function(){
    it('should return array of quadrant sets', function(){
      console.log(origonalQuadrantSets);
      console.log(testSudoku.getQuadrantSets());
      expect( testSudoku.getQuadrantSets() ).to.deep.equal( origonalQuadrantSets);
    });
  });

  describe('resetBoard', function(){
    it('should reset board to original state', function(){
      testSudoku.resetBoard()
      expect( testSudoku._board ).to.equal(origonalBoard);
    });
  });

});  

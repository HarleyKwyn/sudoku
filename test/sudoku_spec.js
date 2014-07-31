var expect = chai.expect;

describe('Sudoku', function(){
  var validSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var invalidSet = [1, 1, 13, 1, 1, 1, 1, 1, 0];
  var origonalBoard, testboard, validBoard;

  beforeEach(function(done){
    origonalBoard = [ 5, 3, 0, 0, 7, 0, 0, 0, 0, 6, 0, 0, 1, 9, 5, 0, 0, 0, 0, 9, 8, 0, 0, 0, 0, 6, 0, 8, 0, 0, 0, 6, 0, 0, 0, 3, 4, 0, 0, 8, 0, 3, 0, 0, 1, 7, 0, 0, 0, 2, 0, 0, 0, 6, 0, 6, 0, 0, 0, 0, 2, 8, 0, 0, 0, 0, 4, 1, 9, 0, 0, 5, 0, 0, 0, 0, 8, 0, 0, 7, 9 ];
    validBoard = [ 5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4, 8, 1, 9, 8, 3, 4, 2, 5, 6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3, 9, 2, 4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5, 3, 4, 5, 2, 8, 6, 1, 7, 9];
    testboard = new Sudoku(origonalBoard);
    done();
  });

  describe('isValidSet', function(){
    it('should return false for invalid set', function(){
      expect( testboard.isValidSet(invalidSet) ).to.equal(false);
    });

    it('should return true for valid set', function(){
      expect( testboard.isValidSet(validSet) ).to.equal(true);
    });
  });

  describe('resetBoard', function(){
    it('should reset board to original state', function(){
      testboard.resetBoard()
      expect( testboard._board ).to.equal(origonalBoard);
    });
  });

  describe('resetBoard', function(){
    it('should reset board to original state', function(){
      testboard.resetBoard()
      expect( testboard._board ).to.equal(origonalBoard);
    });
  });


});  

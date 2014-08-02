var createFakeStorage = function(){
  //using different function syntax pattern so that this code
  //is not run if it is not needed
  window.fakeStorage = {
    _data: {},

    setItem: function (id, val) {
      return this._data[id] = String(val);
    },

    getItem: function (id) {
      return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
    },

    removeItem: function (id) {
      return delete this._data[id];
    },

    clear: function () {
      return this._data = {};
    }
  };
}

function StorageManager() {
  this.gameBoardKey     = "gameBoard";

  var supported = this.localStorageSupported();
  if(supported){
    this.storage = window.localStorage;
  }else{
    createFakeStorage();
    this.storage = window.fakeStorage;
  }
}

StorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

StorageManager.prototype.getGameBoard = function () {
  var gameBoard = this.storage.getItem(this.gameBoardKey);
  return gameBoard ? JSON.parse(gameBoard) : null;
};

StorageManager.prototype.setGameBoard = function (gameBoard) {
  this.storage.setItem(this.gameBoardKey, JSON.stringify(gameBoard));
};

StorageManager.prototype.clearGameBoard = function () {
  this.storage.removeItem(this.gameBoardKey);
};


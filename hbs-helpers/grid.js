module.exports = function(board){
  var htmlTable = "<table id='gameboard' data-board="+board+"> \n ";
  var htmlTableClose = '</table> \n';
  for (var column = 0; column < 3; column++) {
    htmlTable += "<tr>";
    for(var row = 0; row < 3; row++){
        htmlTable += "<td>" + quadrent([row,column], board) + "</td>";
    }
    htmlTable +="</tr>";
  }
  htmlTable += htmlTableClose;
  return htmlTable;
};

function quadrent(coords, board){
  var columnMin = coords[0]*3;
  var columnMax = columnMin + 3;
  var rowMin = coords[1]*3;
  var rowMax = rowMin + 3;

  var quadrentHtml = "<table data-quad='"+coords+"'>"
  
  for(var i = rowMin; i < rowMax; i++){
    quadrentHtml += '<tr>'
    for(var j = columnMin; j < columnMax; j++){
      var value = board[i*9+j];
      if(value === 0){
        quadrentHtml += '<td> <input type="number"></input> </td>'
      }else{
        quadrentHtml += '<td class="static">' + value + '</td>' ;  
      }
    }
    quadrentHtml += '</tr>'
  }

  quadrentHtml += '</table>'
  
  return quadrentHtml;
}
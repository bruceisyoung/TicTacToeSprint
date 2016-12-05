// build an board function, which is used to generate an empty board;

var Board = function(n) {
  n = n || 3;
  var gridArr = [];

  for (var i = 0; i < n; i++) {
  	for (var j = 0; j < n; j++) {
      gridArr[i][j] = 0;
  	}
  }
  
  return gridArr;
}
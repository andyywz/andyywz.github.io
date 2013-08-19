$(document).ready(function () {
  var board = new Board();
  
  $('td').mouseenter( function () {
    $(this).fadeTo('slow',0.8);
  });
  
  $('td').mouseleave( function () {
    $(this).fadeTo('slow',0.5);
  });
  
  $('em').html(board.symbol[0] + "'s Turn");
  
  $('td').click(function () {
    board.update($(this).attr('id'));
    board.render($("td"));
        
    if (board.winner()) {
      $('em').html("Game Over!");
      alert("\"" + board.winner() + "\" won!");
    } else if (board.isTie()) {
      $('em').html("Game Over!");
      alert("It's a tie!");
    } else {
      $('em').html(board.symbol[0] + "'s Turn");
    };
  });
  
  $('button').click(function () {
    board = new Board
    $('td').html("");
    $('em').html("X's Turn");
  });
});


function Board() {
  this.board = [[null,null,null],[null,null,null],[null,null,null]];
  this.symbol = ["X","O"];
  
  this.update = function(rc){
    var rowAndCol = rc.split("");
    var row = parseInt(rowAndCol[1]);
    var col = parseInt(rowAndCol[2]);
    if (this.isValidMove(row,col)) {
      this.board[row][col] = this.symbol[0];
      this.symbol.push(this.symbol.shift());
    };
  };

  this.render = function () {
    var that = this;
    this.board.forEach(function (row, i) {
      row.forEach(function (col, j) {
        $('#r' + i + "" + j).html(col);
      });
    });
  };
  
  this.isValidMove = function(row, col){
    if((row < 3 && row >= 0) && (col < 3 && col >= 0)){
      if(!this.board[row][col]){
        return true;
      };
    };
    return false;
  };

  this.winner = function(){
    var that = this;
    var winningCombos = ["OOO", "XXX"];
    var winner = null;

    // check horizontal
    that.board.forEach(function(row){
      if(winningCombos.indexOf(row.join("")) != -1){ winner = row[0]; }
    });

    // check vertical
    that.board.forEach(function(row, i){
      var newRow = [];
      row.forEach(function(col, j){
        newRow.push(that.board[j][i]);
      });
      if(winningCombos.indexOf(newRow.join("")) != -1){ winner = newRow[0]; }
    });

    // check diagonal
    var diagonals = [[ [0,0],[1,1],[2,2] ], [ [0,2],[1,1],[2,0] ]];
    diagonals.forEach(function(diagonal){
      var newRow = [];
      diagonal.forEach(function(point){
        newRow.push(that.board[point[0]][point[1]]);
      });
      if(winningCombos.indexOf(newRow.join("")) != -1){ winner = newRow[0]; }
    });

    return winner;
  };

  this.isTie = function () {
    return _.compact(_.flatten(this.board)).length === 9;
  };
}
var app = angular.module('ticTacApp', []);


app.controller('ticTacCtrl', function($scope){

  $scope.board = [
  ["", "", ""], 
  ["", "", ""],
  ["", "", ""]

  ];
  
// function to check if win conditions are met, will run after every turn. When winner is chosen p1/p2 win function is called.
function checkWin() {
  for(i = 0; i < 3; i++)
  // checks if horizontal rows are equal to each other and not equal to an empty string.
  if($scope.board[i][0] == $scope.board[i][1] && $scope.board[i][2] == $scope.board[i][0] && $scope.board[i][0] !== "" && $scope.board[i][0] == "X"){
    console.log("X win horizontal");
    p1Wins();
  }
  else if ($scope.board[i][0] == $scope.board[i][1] && $scope.board[i][2] == $scope.board[i][0] && $scope.board[i][0] !== "" && $scope.board[i][0] == "O"){
    console.log("O win horizontal");
    p2Wins();
  }
  // checks if vertical columns are equal to each other and not equal to an empty string.
  else if ($scope.board[0][i] == $scope.board[1][i] && $scope.board[2][i] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "X") {
    console.log("X win vertical");
    p1Wins();
  }
  else if ($scope.board[0][i] == $scope.board[1][i] && $scope.board[2][i] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "O") {
    console.log("O win vertical");
    p2Wins();
  // checks diagonal. only true when i = 0
  }
  else if ($scope.board[0][i] == $scope.board[1][i+1] && $scope.board[2][i +2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "X") {
    console.log("X win diagonal right");
    p1Wins();
  }
  else if ($scope.board[0][i] == $scope.board[1][i+1] && $scope.board[2][i +2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "O") {
    console.log("O win diagonal right");
    p2Wins();
  }
  //checks left diagonal. only true when i = 2
  else if ($scope.board[0][i] == $scope.board[1][i-1] && $scope.board[2][i-2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "X") {
    console.log("X win diagonal left");
    p1Wins();
  }
  else if ($scope.board[0][i] == $scope.board[1][i-1] && $scope.board[2][i-2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "O") {
    console.log("O win diagonal left");
    p2Wins();
  }
  // if turnNumber reaches 9 there's been no winner, tie condition is enforced.
  else if ($scope.turnNumber == 9) {
    alert("Tie Game!");
    console.log("TIE");
  }
}
  // creates turnNumber property, will get incremented after every turn.
  $scope.turnNumber = 0;

  // makeChoice function is attached to ng-click directive. Defines choice as X if turnNumber is even, O if odd. 
  // Populates $scope.board with X or O in row/column specified by div with unique ID generated by $index.
  // Increments turnNumber and runs checkWin function after every click.

  $scope.makeChoice = function(row, column) {
    if(($scope.board[row][column] == "") && ($scope.turnNumber >=0)) {
      var choice = ($scope.turnNumber % 2) == 0 ? "X" : "O";
      $scope.board[row][column] = choice;
      $scope.turnNumber++;
      checkWin(choice);
    }
    console.log($scope.board);

  };

  $scope.p1WinTotal = 0;
  $scope.p2WinTotal = 0;

  function p1Wins() {
    alert("X Wins!");
    $scope.turnNumber = 0;
    $scope.p1WinTotal++;
  }
  function p2Wins() {
    alert("O Wins!");
    $scope.turnNumber = 0;
    $scope.p2WinTotal++;
  }

  // function clearBoard() {
  //   for(i = 0; i<$scope.board.length; i++){
  //     $scope.board[i].innerHTML='',
  //   }
  //   turnNumber=0;
  //   winner=false;
  // };
  

});//end of controller
var app = angular.module('ticTacApp', []);

app.controller('ticTacCtrl', function($scope){

$scope.turn = 1;
$scope.xMoves = [];
$scope.oMoves = [];
$scope.winner = '';
$scope.gameOver = false;
$scope.tie = false;
$scope.boardSquares = document.getElementsByClassName('square'); //from HTML => ng-class={square: true}
$scope.numSquares = boardSquares.length //Is it necessary to have this iteration of boardSquares or can I delete this object?

$scope.winningCombos = [
  ['1','2','3'],['4','5','6'],
  ['7','8','9'],['1','4','7'],
  ['2','5','8'],['3','6','9'],
  ['1','5','9'],['3','5','7']
];

$scope.board = [

{val:'', img:''},{val:'', img:''},{val:'', img:''}
{val:'', img:''},{val:'', img:''},{val:'', img:''}
{val:'', img:''},{val:'', img:''},{val:'', img:''}

]

$scope.playerMove = function(idx){
  if(($scope.board[idx].val!=='x') && ($scope.board[idx].val!=='o'){ //We check to see if our div is not populated by class 'x' or 'o'
    if($scope.turn % 2!==0){ //The first player move is move '1' - so % 2 should not equal 0;
      $scope.board[idx].val = 'x';
      $scope.xMoves.push((idx).toString()); //What exactly does pushing our [idx] 'look like'; an 'x'?
      console.log($scope.xMoves);
    }
    
  else{
    $scope.board[idx].val='o';
    $scope.oMoves.push((idx).to_String()); // What are we converting to_String? - idx - which in this case is val 'o'?
    console.log($scope.oMoves);
    }
  
  if($scope.turnNumber >= 4){
    console.log("Checking win conditions starting turn 5");
    console.log($scope.winningCombos.length);
  }
  })
}
  
  //Can we place our tie game check in the loop above? Does it matter?

  if(turn == 8 && gameOver=false){
    document.getElementById('outcomeDiv').innerHTML="Tie game!";
  }

  //Add event handlers to every square for mouseover, mouseout, click
  //Can I use boardSquares here or do I need to use the numSquares object (which is boardSquares.length?)
  boardSquares[i].addEventListener('mouseover', eventHandlerMouseOver); // Is [i] a reserved index call?
  boardSquares[i].addEventListener('mouseout', eventHandlerMouseOut);
  boardSquares[i].addEventListener('click', eventHandlerMouseDown);


});
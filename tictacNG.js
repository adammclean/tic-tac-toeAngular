var app = angular.module('ticTacApp', []);

app.controller('ticTacCtrl', function($scope){

$scope.turn = 0;
$scope.xMoves = [];
$scope.yMoves = [];
$scope.winner = '';
$scope.gameOver = false;
$scope.tie = false;

$scope.winningCombos = [
  ['1','2','3'],['4','5','6'],
  ['7','8','9'],['1','4','7'],
  ['2','5','8'],['3','6','9'],
  ['1','5','9'],['3','5','7']
];

$scope.playerMove = function(idx){
  if(($scope.board[idx].val!=='x') && ($scope.board[idx].val!=='o'){ //We check to see if our div is not populated by class 'x' or 'o'
    if($scope.turn%2!==0){ //The first player move is move '1'
      $scope.board[idx].val = 'x';
      $scope.xMoves.push((idx).toString()); //What exactly does pushing our [idx] 'look like'; an 'x'?
      console.log($scope.xMoves);
    }
    
  else{
    $scope.board[idx].val='x';
    $scope.oMoves.push((idx).to_String());
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



});
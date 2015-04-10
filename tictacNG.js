var app = angular.module('ticTacApp', []);

app.controller('ticTacCtrl', function($scope){

$scope.turn = 1;
$scope.xMoves = [];
$scope.oMoves = [];
$scope.winner = '';
$scope.gameOver = false;
$scope.tie = false;

$scope.winningCombos = [
  ['1','2','3'],['4','5','6'],
  ['7','8','9'],['1','4','7'],
  ['2','5','8'],['3','6','9'],
  ['1','5','9'],['3','5','7']
];

$scope.board = [ // square in board track by $index

  {val:'', img:''},{val:'', img:''},{val:'', img:''},
  {val:'', img:''},{val:'', img:''},{val:'', img:''},
  {val:'', img:''},{val:'', img:''},{val:'', img:''}

];



// ******************** Check To See Square is Valid And Push Move to 'x' or 'o' Array **************** 

$scope.playerMove = function(idx){
  if(($scope.board[idx].val == 'x') || ($scope.board[idx].val == 'o'))
    return;

  if(($scope.turn % 2) !== 0){
    $scope.board[idx].val = 'x';
    $scope.xMoves.push(idx);
    console.log($scope.xMoves);
  }
    
  else{
    $scope.board[idx].val='o';
    $scope.oMoves.push(idx); // What and why are we converting to_String? - idx - which in this case is val 'o'?
    console.log($scope.oMoves);
  }


  // ******************** Check Win Conditions Starting First Winnable Turn (5) ****************  

  if($scope.turnNumber >= 5){
    console.log("Checking win conditions starting turn 5");
    console.log($scope.winningCombos.length);
    $scope.winner = '';

    if (($scope.turn % 2) !== 0){
      console.log("Checking win conditions for 'x'");
    
      
      // .indexOf() returns -1 if the value searched for is absent; so we are confirming the winningCombo 'ingredients' are present

      for(var i=0; i<$scope.winningCombos.length; i++){
        if(($scope.xMoves.indexOf($scope.winningCombos[i][0]) != -1) && ($scope.xMoves.indexOf($scope.winningCombos[i][1]) != -1) && ($scope.xMoves.indexOf($scope.winningCombos[i][2]) != -1)){
          console.log('x wins!');
          $scope.winner = true;
        }
      }
    }
    
    else{

      console.log("Checking win conditions for 'o'");
        
      for(var i=0; i<winningCombos.length; i++){
        if(($scope.oMoves.indexOf($scope.winningCombos[i][0]) != -1) && ($scope.oMoves.indexOf($scope.winningCombos[i][1]) != -1) && ($scope.oMoves.indexOf($scope.winningCombos[i][2]) != -1)){
          console.log('o wins!');
          $scope.winner = true;
        }
      }
    }
  


// ******************** Check For Tie Game Starting Turn 8 **************** 


    if(turn >= 8 && gameOver === false){
      document.getElementById('outcomeDiv').innerHTML="Tie game!";
    }
  }
  $scope.turn++; //Within playerMove function
}
)};
);

// ******************** Add Event Listeners and Event Handlers to board squares **************** 


  // //Can I use boardSquares here or do I need to use the numSquares object (which is boardSquares.length?)
  // boardSquares[i].addEventListener('mouseover', eventHandlerMouseOver); // Is [i] a reserved index call?
  // boardSquares[i].addEventListener('mouseout', eventHandlerMouseOut);
  // boardSquares[i].addEventListener('click', eventHandlerMouseDown);


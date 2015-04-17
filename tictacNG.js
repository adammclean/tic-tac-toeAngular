var app = angular.module('ticTacApp', ['firebase']);

app.controller('ticTacCtrl', function($scope, $firebase){

var ref = new Firebase('https:// .firebaseio.com/')
$scope.turn = 1;
$scope.xMoves = [];
$scope.oMoves = [];
$scope.winner = '';
$scope.gameOver = false;
$scope.tie = false;
$scope.winner = '';


$scope.winningCombos = [
  ['0','3','6'],
];

$scope.board = [

{val: '', choice: ''},{val: '', choice: ''},{val: '', choice: ''},
{val: '', choice: ''},{val: '', choice: ''},{val: '', choice: ''},
{val: '', choice: ''},{val: '', choice: ''},{val: '', choice: ''}

];

$scope.playerMove = function(idx){
	if(($scope.board[idx]=='x') || ($scope.board[idx]=='o')){
		return;
	}

if($scope.turn % 2 !== 0){
	// $scope.board[idx].choice = 'x';
	$scope.val = 'x';
	$scope.board[idx].choice = 'assets/mammoth.png';
	$scope.xMoves.push(idx);
	console.log($scope.xMoves);
}
 
 else{
  // $scope.board[idx].choice = 'o';
  $scope.val = 'o';
  $scope.board[idx].choice = 'assets/unicorn.png';
  $scope.oMoves.push(idx);
 	console.log($scope.oMoves);
}

// ***********************Check win conditions**************************


	if($scope.turnNumber>=5){
		$scope.winner='';
	
		if(($scope.turnNumber % 2) !== 0){
			console.log('checking win conditions for x');

			for(var i = 0; i<$scope.winningCombos.length;i++){
				if(($scope.xMoves.indexOf($scope.winningCombos[i][0])!==-1)&&($scope.xMoves.indexOf($scope.winningCombos[i][1])!==-1)&&($scope.xMoves.indexOf($scope.winningCombos[i][2])!==-1)){
					console.log('x wins');
					$scope.gameOver = true;
					$scope.winner = 'yeti';
				}
			}
		}
			else {
				console.log('checking win conditions for o');

				for(var i = 0; i<$scope.winningCombos.length;i++){
					if(($scope.oMoves.indexOf($scope.winningCombos[i][0])!==-1)&&($scope.oMoves.indexOf($scope.winningCombos[i][1])!==-1)&&($scope.oMoves.indexOf($scope.winningCombos[i][2])!==-1)){
					console.log('o wins');
					$scope.gameOver = true;
					$scope.winner = 'unicorn';
					} 
				} 
			}

			$scope.turn ++;

} // end $scope.makeMove=function(idx)
}); // end controller function
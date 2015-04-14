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
	};

	$scope.turn ++;

};




});
var app=angular.module("TicTacApp", []);

app.controller("TicTacCtrl", function($scope){
   $scope.board = ["","","","","","","","",""];

   $scope.turnNumber = 0;

   $scope.makeMove = function(idx){
         if($scope.board[idx] != ""){
         		return; //return followed by nothing does not return anything
         }
         	else {
         $scope.board[idx] = (($scope.turnNumber % 2) == 0 ? "PENIS" : "O");
         $scope.turnNumber++;
         console.log($scope.board)     
    	}
    };
});
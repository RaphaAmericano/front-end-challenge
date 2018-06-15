angular.module("mainApp", [])
    .controller("mainController", function($scope, $http){
        $scope.date = new Date();
        console.log($scope.date);
});
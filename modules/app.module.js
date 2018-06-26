angular.module("mainApp").config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '../views/main.html'
    })
    .when('/artista', {
        templateUrl: '../views/artista.html'
    })
}]);
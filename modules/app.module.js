angular.module("mainApp").config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
        templateUrl: '../views/main.html'
    })
    .when('/artista/:name', {
        templateUrl: '../views/artista_view.html'
    })
    .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);
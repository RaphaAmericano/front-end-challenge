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

angular.module("mainApp").filter('virgulaPonto', [function(){
    return function(input){
        var retorno = input.toString().trim().replace(/\,/g,'.');
        return retorno;
    }
}]);
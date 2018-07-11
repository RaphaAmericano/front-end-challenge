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

angular.module("mainApp").filter('trackRange', [function(){
    return function(input, page){
        var retorno = [];
        var range = 0;
        switch (page) {
            case 0:
                range = 0;
                break;
            case 1:
                range = 3;
                break;
            case 2:
                range = 6;
                break;
            default:
                break;
        }

        console.log(input);
        console.log(range);
        
        for( var i = range; retorno.length == 3; i++ ){
            retorno.push(input[i]);
        }
        return retorno;
    }
}]);
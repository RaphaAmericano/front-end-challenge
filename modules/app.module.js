//angular.module("mainApp", ["ngRoute"]);

// angular.module("mainApp").component("artista", {
//     template: '<h1>Artista: {{ $ctrl.user.name}}</h1>',
//     controller: function(){
//         this.user = {name: 'jurandir'}
//     }
// });

// angular.module('mainApp').component('appHeader', {
//     templateUrl: '../views/header.html',
//     controller: 'mainController'
// });

// angular.module('mainApp').component('topFiveArtists', {
//     templateUrl: '../views/top_five_artists.html',
//     controller: 'mainController'
// });

angular.module('mainApp').component('topFiveMusics', {
   templateUrl: '../views/top_five_musics.html',
   controller: 'mainController' 
});

angular.module('mainApp').component('appFooter', {
    templateUrl: '../views/footer.html',
    controller: 'mainController'
});

angular.module("mainApp").config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '../views/index.html',
        controller: 'mainController'
    })
    .when('/artista', {
        templateUrl: '../views/artista.html',
        controller: 'mainController'
    })
    .when('/teste', {
        template: "<h1>Teste</h1>",
        controller: 'mainController'
    })
    .otherwise({
        redirectTo: '/'
    })
}]);
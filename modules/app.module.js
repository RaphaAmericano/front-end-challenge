angular.module("mainApp", ["ngRoute"]);

// angular.module("mainApp").component("artista", {
//     template: '<h1>Artista: {{ $ctrl.user.name}}</h1>',
//     controller: function(){
//         this.user = {name: 'jurandir'}
//     }
// });

angular.module('mainApp').component('appHeader', {
    templateUrl: '../views/header.html',
    controller: 'mainController'
});

angular.module('mainApp').component('topFiveArtists', {
    templateUrl: '../views/top_five_artists.html',
    controller: 'mainController'
});
angular.module('mainApp').component('topFiveMusics', {
   templateUrl: '../views/top_five_musics.html',
   controller: 'mainController' 
});

angular.module('mainApp').component('appFooter', {
    templateUrl: '../views/footer.html',
    controller: 'mainController'
})
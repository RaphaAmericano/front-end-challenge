angular.module('mainApp').controller('artistaController',['$routeParams', 'callApi', artistaController]);

function artistaController($routeParams, callApi){
    var vm = this;
    vm.artistaUrl = $routeParams['name'];
    var stringArtista = vm.artistaUrl;
    stringArtista = stringArtista.replace(' ', '+');
    vm.parametro = 'artist.getinfo&artist='+stringArtista;
    vm.parametroMusicas = 'artist.gettoptracks&artist='+stringArtista;
    vm.parametroAlbums = 'artist.gettopalbums&artist='+stringArtista;
    vm.service = callApi;
    vm.artista = [];
    vm.musicas = [];
    vm.albums = [];

    vm.dados = function(){
        callApi.getApi(vm.parametro).then(function(response){
            vm.artista = response.data;
            console.log(vm.artista);
        }, function(err){
            console.log(err);
        })
    }
    vm.dados();

    vm.topTracks = function(){
        callApi.getApi(vm.parametroMusicas).then(function(response){
            vm.musicas = response.data;
            console.log(vm.musicas);
        }, function(err){
            console.log(err);
        })
    }
    vm.topTracks();

    vm.topAlbums = function(){
        callApi.getApi(vm.parametroAlbums).then(function(response){
            vm.albums = response.data;
            console.log(vm.musicas);
        }, function(err){
            console.log(err);
        })
    }
    vm.topAlbums();
}
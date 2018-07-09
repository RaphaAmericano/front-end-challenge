angular.module('mainApp').controller('artistaController',['$routeParams', 'callApi', artistaController]);

function artistaController($routeParams, callApi){
    var vm = this;
    vm.params = $routeParams;
    vm.artistaUrl = $routeParams['name'];
    var stringArtista = vm.artistaUrl;
    stringArtista = stringArtista.replace(' ', '+');
    vm.parametro = 'artist.getinfo&artist='+stringArtista;
    vm.service = callApi;
    vm.artista = [];
    
    vm.dados = function(){
        callApi.getApi(vm.parametro).then(function(response){
            vm.artista = response.data;
            console.log(vm.dados);
        }, function(err){
            console.log(err)
        })
    }
    vm.dados();
}
angular.module('mainApp').controller('topArtistasController',['callApi', topArtistasController]);

function topArtistasController(callApi){
    var vm = this;
    vm.parametro = 'chart.gettopartists&page=1&limit=5';
    vm.topbandas = [];
    vm.resultado = function(){
        callApi.getApi(vm.parametro)
        .then(function(response, status){
            vm.topbandas = response.data.artists.artist;
        }, function(err){
            console.log(err);
        });
    }
    vm.resultado();
}
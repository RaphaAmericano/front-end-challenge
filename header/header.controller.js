angular.module('mainApp').controller('headerController', ['callApi', headerController]);

function headerController(callApi){

    var vm = this;
    vm.resultado = [];
    
    vm.limparBusca = function(){
        vm.resultado = [];
    }

    vm.buscarArtista = function(valor){
        if(valor == undefined){
            return;
        }
        vm.parametro = 'artist.search&artist=';
        vm.parametro += valor;

        callApi.getApi(vm.parametro)
            .then(function(response, status){
            vm.resultado = response.data.results.artistmatches.artist;
            console.log(vm.resultado);
        }, function(err){
            console.log(err);
        });
    }
};
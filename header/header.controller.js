angular.module('mainApp').controller('headerController', ['callApi', headerController]);

function headerController(callApi){

    var vm = this;
    vm.resultado = [];
    vm.parametro = 'artist.search&artist=';
    vm.teste = [
        "jurandir",
        "Alcir",
        "Beto"
    ]
    vm.limparBusca = function(){
        vm.resultado = [];
    }

    vm.buscarArtista = function(valor){
        vm.parametro += valor;
        vm.resultado = callApi.getApi(vm.parametro)
            .then(function(response, status){
            console.log(response.data);
            console.log(vm.resultado);
            vm.resultado = response.data;
        }, function(err){
            console.log(err);
        });
    }
};
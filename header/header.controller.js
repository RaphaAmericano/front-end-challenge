angular.module('mainApp').controller('headerController', ['callApi', headerController]);

function headerController(callApi){

    var vm = this;
    vm.resultado = [];
    vm.teste = [
        "jurandir",
        "Alcir",
        "Beto"
    ]
    vm.limparBusca = function(){
        vm.resultado = [];
    }

    vm.buscarArtista = function(valor){
        
        dados = callApi.getApi(0, valor);
        console.log("Buscar Artista");
        
        vm.resultado = dados;
        console.log(dados);
        return vm.resultado;
        //vm.resultado = vm.resultado.results.artistmatches.artist;
        //console.log(vm.resultado.data.data.results);
    }
};
angular.module('mainApp').controller('topTracksController', ['callApi',topTracksController]);

function topTracksController(callApi){
    var vm = this;
    
    vm.dot = 0;
    vm.tracks = [];
    vm.resultado = function(valor = 3){ 
        
        var parametro =  'chart.gettoptracks&page='+valor+'&limit=3';

        callApi.getApi(parametro)
        .then(function(response, status){  
            vm.tracks = response.data.tracks.track;
        }, function(err){
            console.log(err);
        });
    }

    vm.selecionado = function(valor){
        vm.range = vm.dot * 3;
    }
    vm.resultado();

    vm.carrosselDot = function(valor){
        vm.dot = valor;
    };
};
angular.module('mainApp').controller('topTracksController', ['callApi',topTracksController]);

function topTracksController(callApi){
    var vm = this;
    
    vm.dot = 0;
    vm.limit = -9;
    vm.tracks = [];
    vm.resultado = function(){ 
        
        var parametro =  'chart.gettoptracks&page=3&limit=9';

        callApi.getApi(parametro)
        .then(function(response, status){  
            vm.tracks = response.data.tracks.track;
            console.log(vm.tracks);
        }, function(err){
            console.log(err);
        });
    }    

    vm.carrosselDot = function(valor){
        vm.dot = valor;
        switch (valor) {
            case 0:
                vm.limit = -9;
                break;
            case 1:
                vm.limit = -6;
                break;
            case 2: 
                vm.limit =  -3;
                break;
            default:
                vm.limit = -9;
                break;
        }
    };
    vm.resultado();
};
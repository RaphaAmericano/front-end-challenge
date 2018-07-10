angular.module('mainApp').controller('topTracksController', ['callApi',topTracksController]);

function topTracksController(callApi){
    var vm = this;
    
    vm.active ='active';


    vm.toptracks = [];
    vm.resultado = function(valor = 1){ 
        
        if(vm.toptracks.lenght > 0){ 
            vm.toptracks = []; 
        };
        var parametro =  'chart.gettoptracks&page='+valor+'&limit=3';
        callApi.getApi(parametro)
        .then(function(response, status){
            
            vm.toptracks = response.data.tracks.track;
            console.log(vm.toptracks.track);
        }, function(err){
            console.log(err);
        });
    }

    vm.selecionado = function(valor){
        console.log(valor);
    }
    vm.resultado();


};
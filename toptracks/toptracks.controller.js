angular.module('mainApp').controller('topTracksController', ['callApi',topTracksController]);

function topTracksController(callApi){
    var vm = this;
    
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
    vm.resultado();
};
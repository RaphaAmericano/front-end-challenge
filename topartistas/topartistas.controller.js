angular.module('mainApp').controller('topArtistasController', topArtistasController);

function topArtistasController(){
    var vm = this;

    vm.topbandas = [];

    vm.chamarFuncao = function(){

        vm.topbandas = data.data.artists.artist;
        // $http.get(apiUrl+"?method=chart.gettopartists&page=1&limit=5"+apiKey).then(function(data, status){
        //     vm.topbandas = data.data.artists.artist;
        // });
    }
    

}
angular.module('mainApp').service('callApi', ['$http', callApi]);

function callApi($http){
    console.log("Service Call Api");
    var vm = this;
    vm.metodos= [
        'artist.search&artist=', 
        'chart.gettopartists&page=1&limit=5',
        'chart.gettoptracks&page=1&limit=3',
        'chart.gettoptracks&page="+pagina+"&limit=3',
        'artist.getinfo&artist='
    ];
    
    vm.getApi = function(metodo, palavra = "", pagina = "", limit = ""){
    
        $http.get('http://ws.audioscrobbler.com/2.0/?method='+vm.metodos[metodo]+palavra+'&api_key=b80de9cb1cfe2782055d664a50ab903a&format=json')
            .then(function(response, status){
                //console.log(response.data.results.artistmatches.artist);
                return response.data.results.artistmatches.artist;
            }, function(err){
                return err;
        });
        
    }
}
angular.module("mainApp", []).service('buscaArtista', ['$http', function($http){      
    return {
        search: function(keywords){
            return $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+keywords+'&api_key=b80de9cb1cfe2782055d664a50ab903a&format=json')
            .then(function(data, status){
                //mudar para listar os artistas
                //$scope.topbandas = data.data.artists.artist;
                console.log(data);
            });
        }
    }
}]).controller("mainController", function($scope, $http){
        $scope.date = new Date();
        $scope.topbandas = [];
        $scope.topmusicas = [];
        $scope.dados = [];

        var apiKey = '&api_key=b80de9cb1cfe2782055d664a50ab903a&format=json';
        var apiUrl = 'http://ws.audioscrobbler.com/2.0/';

        var carregarApi = function(){
            $http.get(apiUrl+"?method=chart.gettopartists&page=1&limit=5"+apiKey).then(function(data, status){
                $scope.topbandas = data.data.artists.artist;
                console.log($scope.topbandas);
            });
            $http.get(apiUrl+"?method=chart.gettoptracks&page=1&limit=3"+apiKey).then(function(data, status){
                $scope.topmusicas = data.data.tracks.track;
                console.log($scope.topmusicas);
            });
        };

        var atualizarTopMusicas = function($scope, pagina){
            $scope.topmusicas = [];
            $http.get(apiUrl+"?method=chart.gettoptracks&page="+pagina+"&limit=3"+apiKey).then(function(data, status){
                $scope.topmusicas = data.data.tracks.track;
                console.log($scope.topmusicas);
            });
        };

        carregarApi();

});
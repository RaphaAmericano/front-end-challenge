

angular.module("mainApp").controller("mainController", function($scope, $http){
        $scope.date = new Date();
        $scope.topbandas = [];
        $scope.topmusicas = [];
        $scope.dados = [];
        $scope.busca = "";
        $scope.resultado = [];
        $scope.artista = [];

        var apiKey = '&api_key=b80de9cb1cfe2782055d664a50ab903a&format=json';
        var apiUrl = 'http://ws.audioscrobbler.com/2.0/';

        var carregarApi = function(){
            $http.get(apiUrl+"?method=chart.gettopartists&page=1&limit=5"+apiKey).then(function(data, status){
                $scope.topbandas = data.data.artists.artist;
            });
            $http.get(apiUrl+"?method=chart.gettoptracks&page=1&limit=3"+apiKey).then(function(data, status){
                $scope.topmusicas = data.data.tracks.track;
            });
        };

        var atualizarTopMusicas = function($scope, pagina){
            $scope.topmusicas = [];
            $http.get(apiUrl+"?method=chart.gettoptracks&page="+pagina+"&limit=3"+apiKey).then(function(data, status){
                $scope.topmusicas = data.data.tracks.track;
            });
        };

        $scope.buscarArtista = function(palavra){
            $http.get(apiUrl+"?method=artist.search&artist="+palavra+apiKey).then(function(data, status){
                $scope.resultado = data.data.results.artistmatches.artist;
            });
        };
        
        $scope.limparBusca = function(){
            $scope.resultado = [];
        }

        $scope.abrirPagina = function(nome){
            $http.get(apiUrl+"?method=artist.getinfo&artist="+nome+apiKey).then(function(data, status){
                $scope.artista = data;
            });
        }
        carregarApi();

});
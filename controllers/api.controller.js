angular.module("mainApp", []).controller("mainController", function($scope, $http){
        $scope.date = new Date();
        $scope.topbandas = []
        $scope.dados = [];

        var apiKey = '&api_key=b80de9cb1cfe2782055d664a50ab903a&format=json';
        var apiUrl = 'http://ws.audioscrobbler.com/2.0/';

        var carregarApi = function(parametro){
            $http.get(apiUrl+parametro+apiKey).then(function(data, status){
                
                $scope.topbandas = data;
                console.log($scope.topbandas);
            });
        };
        carregarApi("?method=chart.gettopartists&page=1&limit=5");
});
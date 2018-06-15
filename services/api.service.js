angular.module('mainApp', [])
    .controller('httpAPI', function($scope, $http){
    $http.get("/2.0/?method=tag.gettopartists&tag=disco&api_key=b80de9cb1cfe2782055d664a50ab903a")
        .then(function(response){
            $scope.infos = response.data;
            console.log($scope.infos);
        })
});
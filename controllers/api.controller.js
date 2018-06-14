app.controller('ControladorPrincipal', ['$scope', '$http', function($scope, $http){
    $scope.users;
    $scope.date = new Date();
    var baseUrl = 'http://ws.audioscrobbler.com/2.0/';

    $http.get(baseUrl).then(function(response){
        $scope.users = response.data;   
    }, function(err){
        console.log(err);
    });
}]);
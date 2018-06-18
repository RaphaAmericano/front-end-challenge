angular.module('mainApp', [])
    .service('buscaArtista', ['$http', function($http){      
        return {
            search: function(keywords){
                return $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+keywords+'&api_key=b80de9cb1cfe2782055d664a50ab903a&format=json')
            }
        }
    }]);
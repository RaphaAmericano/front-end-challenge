angular.module('mainApp').controller('headerController', headerController);

function headerController(){
    var vm = this;

    vm.resultado = [];

    vm.limparBusca = function(){
        vm.resultado = [];
    }
}
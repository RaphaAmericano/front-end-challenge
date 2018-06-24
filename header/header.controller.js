angular.module('mainApp').controller('headerController', headerController);

function headerController(){
    console.log("Header Controller");
    var vm = this;

    vm.resultado = [];

    vm.limparBusca = function(){
        vm.resultado = [];
    }
};
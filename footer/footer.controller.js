angular.module('mainApp').controller('footerController', footerController);

function footerController(){
    var vm = this;
    vm.date = new Date();
}
angular.module('mainApp').controller('heroController', heroController);

function heroController(){
    var vm = this;
    vm.heading = "Bem Vindo ao spot.fm";
    vm.paragraph = "Reunimos todos os seus serviços musicais preferidos e nos juntamos a eles, ouvindo, assistindo e compartilhando para conectar o seu mundo musical.";
}
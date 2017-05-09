console.log("test");

var ourApp = angular.module('ourApp', []);

ourApp.controller('Controlla', function(){
  console.log('drake');

  var vm = this;

  vm.moose = [];

  vm.addMoose = function(){
    console.log("in add moose function ng-click");

    var newMoose = {
      name: vm.nameIn,
      description: vm.descriptionIn,
      hobby: vm.hobbyIn
    };

    console.log('adding moose : ', newMoose);

    vm.moose.push(newMoose);
    console.log('mooses: ', vm.moose);

    vm.nameIn = "";
    vm.descriptionIn = "";
    vm.hobbyIn = "";

  };


});

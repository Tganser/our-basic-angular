console.log("test");

var ourApp = angular.module('ourApp', []);

ourApp.controller('Controlla', function($http){
  var vm = this;
  // vm.moose = []; /refactoring out to the server

  // GET THE MOOSES
  // connect to server and bring back all the mooses there
  vm.getMooses = function(){
    $http({
      method: 'GET',
      url: '/getmooses'
    }).then(function success(response) {
      console.log("we got this from the server: ", response.data);
      vm.drakesmooses = response.data;
      });
  };

  // vm.getMooses();

//function to add moose to the array (we will refactor this to the server) TODO
  vm.addMoose = function(){
    console.log("in add moose function ng-click");

    var newMoose = {
      name: vm.nameIn,
      description: vm.descriptionIn,
      hobby: vm.hobbyIn
    };
    console.log('adding moose : ', newMoose);

    // vm.moose.push(newMoose);
    // console.log('mooses: ', vm.moose);
    vm.nameIn = "";
    vm.descriptionIn = "";
    vm.hobbyIn = "";

    //tryign to send this moose to the database but he DOESNT WANT TO GO
    //he changed his mind.
    $http({
      method: 'POST',
      url: '/addmooses',
      data: newMoose,
      }).then(function success(response) {
      console.log("we got this from the server: ", response);
      vm.getMooses();
      });
  };//end addMoose

  });//end controlla

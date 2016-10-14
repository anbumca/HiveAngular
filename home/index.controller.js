(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);
/*$scope.View = function () {
        alert('Anbu testing');
        //$location.path('/feedbackDetails');
    };*/
    function Controller() {
        var vm = this;
	
	vm.names = [{
      "client_id" : "123",
      "client_name" : "Anbu",
      "status" : "Active"
   },
	
   {
      "client_id" : "124",
      "client_name" : "Anbu1",
      "status" : "Active"
   },
	
   {
      "client_id" : "125",
      "client_name" : "Anbu2",
      "status" : "Deactive"
   },
	
   {
      "client_id" : "126",
      "client_name" : "Anbu4",
      "status" : "Active"
   }];
vm.details = [{
      "user" : "Administrator",
      "Login_date" : "11/10/2016",
      "Login_time" : "06:30pm"
   }];
        initController();

        function initController() {
        }
		function anbu() {
		alert('Anbuu');
	}
    }
})();
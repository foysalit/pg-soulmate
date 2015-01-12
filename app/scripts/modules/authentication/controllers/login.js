'use strict';
angular.module('authentication').controller('LoginController', 
function($scope, $stateParams, $cordovaSocialSharing) {
	$scope.user = {};
	$scope.login = login;
	console.log('test');

	function login () {
		console.log($scope.user);	
	}
});

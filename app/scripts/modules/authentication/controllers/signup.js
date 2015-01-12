'use strict';
angular.module('authentication').controller('SignupController', 
function($scope, $stateParams, $cordovaSocialSharing) {
	$scope.user = {};
	$scope.signup = signup;

	function signup () {
		console.log($scope.user);	
	}
});

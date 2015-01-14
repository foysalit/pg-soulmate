'use strict';
angular.module('events').controller('EventsCreateController', 
function($rootScope, $scope, $stateParams, $state) {
	if ($rootScope.authentication) {
		$state.go('login');
	}
});

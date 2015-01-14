'use strict';
angular.module('events').controller('EventsController', 
function($rootScope, $scope, $stateParams, $state) {
	if ($rootScope.authentication) {
		$state.go('login');
	}

	var self = this;

	self.entries = getAll();

	function getAll () {
		var events = [
			{id: 1, title: 'one'},
			{id: 2, title: 'two'}
		];

		return events;
	}
});

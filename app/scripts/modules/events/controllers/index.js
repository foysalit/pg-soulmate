'use strict';
angular.module('events').controller('EventsController', 
function($rootScope, $scope, $stateParams, $state, EventsFactory) {
	if ($rootScope.authentication) {
		$state.go('login');
	}

	var self = this;

	self.entries = getAll();

	function getAll () {
		var events = EventsFactory.getAll();
		console.log(events);
		return events;
	}
});

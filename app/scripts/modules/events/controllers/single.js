'use strict';
angular.module('events').controller('EventController', 
function($rootScope, $scope, $stateParams, $state) {
	if ($rootScope.authentication) {
		$state.go('login');
	}

	var self = this;

	self.data = get();
	
	function get () {
		var event = {id: $stateParams.eventId, title: 'one'};

		return event;
	}
});

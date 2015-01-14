'use strict';
angular.module('events').controller('EventController', 
function($rootScope, $scope, $stateParams, $state) {
	if ($rootScope.authentication) {
		$state.go('authentication');
	}

	var self = this;

	self.data = get();
	console.log(self.data);

	function get () {
		var event = {id: $stateParams.eventId, title: 'one'};

		return event;
	}
});

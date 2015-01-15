'use strict';
angular.module('events').controller('EventController', 
function($rootScope, $scope, $stateParams, $state, EventsFactory) {
	if ($rootScope.authentication) {
		$state.go('login');
	}

	var self = this;

	get();
	
	function get () {
		var event = EventsFactory.get({id: $stateParams.eventId}).then(function (data) {
			self.data = data;
		}, function (err) {
			console.log('error', err);
		});

		return event;
	}
});

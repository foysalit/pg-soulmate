'use strict';
angular.module('events').controller('EventsController', 
function($rootScope, $scope, $stateParams, $state, EventsFactory) {
	if ($rootScope.authentication) {
		$state.go('login');
	}

	var self = this;

	getAll();

	function getAll () {
		EventsFactory.getAll().then(function (events) {
			self.entries = events;
			console.log(self.entries);
		}, function (err) {
			console.log("error getting events", err);
		});
	}
});

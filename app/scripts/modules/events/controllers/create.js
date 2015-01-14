'use strict';
angular.module('events').controller('EventsCreateController', 
function($rootScope, $scope, $stateParams, $state, localStorageService, EventsFactory) {
	if ($rootScope.authentication) {
		$state.go('login');
	}

	var self = this;

	self.create = create;
	self.data = {};

	function create () {
		EventsFactory.create(self.data).then(function (event) {
			console.log('done');
			$state.go('events.all');
		}, function(error) {
			console.log(error);
		});
	}
});

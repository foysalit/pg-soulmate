'use strict';
angular.module('events').controller('EventsController', 
function($rootScope, $scope, $stateParams, $state, EventsFactory, $cordovaToast) {
	if ($rootScope.authentication) {
		$state.go('login');
	}

	var self = this;

	getAll();

	function getAll () {
		EventsFactory.getAll().then(function (events) {
			self.entries = events;
		}, function (err) {
			console.log("error getting events", err);
			$cordovaToast.showShortBottom('Error Getting Events');
		});
	}
});

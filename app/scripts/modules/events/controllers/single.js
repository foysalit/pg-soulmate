'use strict';
angular.module('events').controller('EventController', 
function($rootScope, $scope, $stateParams, $state, EventsFactory, $cordovaToast) {
	if ($rootScope.authentication) {
		$state.go('login');
	}

	var self = this;

	self.data = {};
	self.remove = remove;
	self.get = get;
	
	function get () {
		EventsFactory.get($stateParams.eventId).then(function (data) {
			self.data = data;

		}, function (err) {
			console.log('error', err);
		});
	}

	function remove() {
		EventsFactory.remove(self.data.id).then(function (result) {
			if (result) {
				$cordovaToast.showShortBottom('Event Removed').then(function () {
					$state.go('events.all');
				});
			} else {
				$cordovaToast.showShortBottom('Error Removing Event');
			}
		}, function (err) {
			console.log('error removing event', err);
		});
	}
});

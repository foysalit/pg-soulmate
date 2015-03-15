'use strict';

(function () {
	angular.module('events').controller('EventsCreateController', EventsCreateController);

	function EventsCreateController ($rootScope, $scope, $stateParams, $state, localStorageService, EventsFactory) {
		if ($rootScope.authentication) {
			$state.go('login');
		}

		var self = this;

		self.create = create;

		self.datePickerOptions = {
			format: 'dd/mm/yy',
			selectYears: true
		};

		self.data = {};
		self.submitted = false;
		self.flowUploadConfig = {
			target: EventsFactory.apiEndpoint,
			testChunks: false
		};

		self.endDate = new Date("12 March, 2015");

		function create () {
			return console.log(self.data);
			self.submitted = true;

			EventsFactory.create(self.data).then(function (event) {
				console.log('done');
				$state.go('events.all');
			}, function(error) {
				console.log(error);
			});
		}
	}

})();
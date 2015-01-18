'use strict';

(function () {
	angular.module('events').controller('EventsCreateController', EventsCreateController);

	function EventsCreateController ($rootScope, $scope, $stateParams, $state, localStorageService, EventsFactory, $cordovaDatePicker) {
		if ($rootScope.authentication) {
			$state.go('login');
		}

		var self = this;

		self.create = create;
		self.showDatePicker = showDatePicker;

		self.data = {};
		self.submitted = false;
		self.hasErrors = false;
		self.flowUploadConfig = {
			target: EventsFactory.apiEndpoint,
			testChunks: false
		};

		function create () {
			//return console.log(self.data);
			self.submitted = true;
			
			EventsFactory.create(self.data).then(function (event) {
				console.log('done');
				$state.go('events.all');
			}, function(error) {
				console.log(error);
				self.hasErrors = true;
			});
		}

		function showDatePicker () {
			var options = {
				date: new Date(),
				mode: 'date', // or 'time'
				minDate: new Date() - 10000,
				allowOldDates: true,
				allowFutureDates: false,
				doneButtonLabel: 'DONE',
				doneButtonColor: '#F2F3F4',
				cancelButtonLabel: 'CANCEL',
				cancelButtonColor: '#000000'
			};

			$cordovaDatePicker.show(options).then(function(date){
			    alert(date);
			});
		}
	}

})();
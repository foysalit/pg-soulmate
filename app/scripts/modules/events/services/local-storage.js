'use strict';

angular.module('events').factory('EventsFactory', function ($q, localStorageService, EventsValidator) {
	return {
		getAll: function () {
			return JSON.parse(localStorageService.get('events'));
		},

		create: function (event) {
			var deferred = $q.defer();

			if (!EventsValidator.create(event)) {
				deferred.reject('Event Not valid');
			} else {

				var events = JSON.parse(localStorageService.get('events'));

				if (!angular.isArray(events)) 
					events = [];

				events.push(event);
				localStorageService.set('events', angular.toJson(event));
				deferred.resolve(event);
			}

			return deferred.promise;
		}
	};
});
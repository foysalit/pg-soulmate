'use strict';

angular.module('events').factory('EventsFactory', function ($q, ENV, localStorageService, EventsValidator, $http) {
	var apiEndpoint = ENV.apiEndpoint + 'events';

	return {
		getAll: function () {
			var lastSynced = localStorageService.get('events.synced'),
				events = localStorageService.get('events'),
				deferred = $q.defer(),
				now = new Date();

			if (lastSynced === null || events === null){
				$http.get(apiEndpoint +'.json').success(function (data) {
					localStorageService.set('events', angular.toJson(data));
					localStorageService.set('events.synced', new Date());
					deferred.resolve(data);
				}).error(function (err) {
					deferred.reject(err);
				});	
			} else if () {
				deferred.resolve(events);
			}

			return deferred.promise;
		},

		get: function (query) {
			var deferred = $q.defer();

			events.then(function(events) {
				var event = _.find(events, query);
				
				deferred.resolve(event);	
			}, function(){
				deferred.reject('Events Not Found');
			});

			return deferred.promise;
		},

		create: function (event) {
			var deferred = $q.defer();

			if (!EventsValidator.create(event)) {
				deferred.reject('Event Not valid');
			} else {

				var events = localStorageService.get('events');

				if (!events) 
					events = [];
				else
					events = JSON.parse(events);

				events.push(event);
				localStorageService.set('events', angular.toJson(events));
				deferred.resolve(event);
			}

			return deferred.promise;
		}
	};
});
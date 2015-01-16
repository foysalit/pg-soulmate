'use strict';

(function(){
	angular.module('events').factory('EventsFactory', EventsFactory);

	function EventsFactory ($q, ENV, localStorageService, EventsValidator, $http, StorageSync) {
		var apiEndpoint = ENV.apiEndpoint + 'events';

		return {
			getAll: function (forceReload) {
				var key = 'events',
					lastSynced = StorageSync.getLastSynced(key),
					events = localStorageService.get(key),
					deferred = $q.defer(),
					forceReload = forceReload || false;

				console.log(lastSynced, lastSynced > 5, events === null, forceReload);

				if (lastSynced > 5 || events === null || forceReload){
					$http.get(apiEndpoint +'.json').success(function (data) {
						localStorageService.set(key, angular.toJson(data));
						StorageSync.updateLastSynced(key);
						deferred.resolve(data);
					}).error(function (err) {
						deferred.reject(err);
					});	
				} else {
					deferred.resolve(events);
				}

				return deferred.promise;
			},

			get: function (id, forceReload) {
				var deferred = $q.defer(),
					key = 'events.'+ id,
					lastSynced = StorageSync.getLastSynced(key),
					localEvent = localStorageService.get(key);

				if (lastSynced > 1 || localEvent === null) {
					$http.get(apiEndpoint +'/'+ id +'.json').success(function (data) {
						localStorageService.set(key, data);
						StorageSync.updateLastSynced(key);
						deferred.resolve(data);
					});
				} else {
					deferred.resolve(localEvent);
				}

				return deferred.promise;
			},

			create: function (event) {
				var deferred = $q.defer();

				if (!EventsValidator.create(event)) {
					deferred.reject('Event Not valid');
				} else {
					$http.post(apiEndpoint +'.json', {event: event}).success(function (response) {
						deferred.resolve(response);
						StorageSync.deleteLastSynced('events');
					}).error(function (err) {
						deferred.reject(err);
					})
				}

				return deferred.promise;
			},

			remove: function (id) {
				var deferred = $q.defer(),
					key = 'events.'+ id,
					localEvent = localStorageService.get(key);

				$http.delete(apiEndpoint +'/'+ id +'.json').success(function () {
					deferred.resolve(true);

					if (localEvent) {
						localStorageService.remove(key);
						StorageSync.deleteLastSynced(key);
						StorageSync.deleteLastSynced('events');
					}
				}).error(function (err) {
					deferred.resolve(false);
				});

				return deferred.promise;
			}
		};
	}
})();
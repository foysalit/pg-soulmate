'use strict';

angular.module('core').factory('StorageSync', function ($q, localStorageService) {
	return {
		getLastSynced: function (key) {
			var now = moment(),
				last = localStorageService.get(key +'.synced');

			if (last === null) {
				return 1000*1000;
			}

			var difference = now.diff(moment.unix(last)),
				duration = moment.duration(difference),
				minutes = duration.minutes();

			return minutes;
		},

		updateLastSynced: function (key, minutes) {
			var time = null;

			if (_.isUndefined(minutes)) {
				time = moment().unix();
			} else {
				time = moment().add(minutes, 'm').unix();
			}

			localStorageService.set(key +'.synced', time);
		},

		deleteLastSynced: function (key) {
			localStorageService.remove(key +'.synced');
		}
	};
});
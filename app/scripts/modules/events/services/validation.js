'use strict';

angular.module('events').factory('EventsValidator', function () {
	return {
		create: function (data) {
			if (!angular.isObject(data))
				return false;

			if (angular.isUndefined(data.title))
				return false;

			return true;
		}
	};
});
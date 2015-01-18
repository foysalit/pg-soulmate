'use strict';

angular.module('events').factory('EventsValidator', function () {
	return {
		create: function (data) {
			if (!angular.isObject(data))
				return false;

			if (_.isUndefined(data.title) || _.isEmpty(data.title))
				return false;

			return true;
		}
	};
});
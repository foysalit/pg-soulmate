ApplicationConfiguration.registerModule('events');

angular.module('events').config(function($stateProvider) {
	$stateProvider.
		state('events.create', {
	      url: '/events/create',
	      templateUrl: 'templates/modules/events/create.html',
	      controller: 'EventsCreateController'
	    });
});
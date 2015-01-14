ApplicationConfiguration.registerModule('events');

angular.module('events').config(function($stateProvider) {
	$stateProvider.
		state('events', {
	      url: '/events',
	      templateUrl: 'templates/modules/events/index.html',
	      controller: 'EventsController as events'
	    }).
		state('events.single', {
	      url: '/events/:eventId',
	      templateUrl: 'templates/modules/events/single.html',
	      controller: 'EventController as event'
	    }).
		state('events.create', {
	      url: '/events/create',
	      templateUrl: 'templates/modules/events/create.html',
	      controller: 'EventsCreateController as eventsCreator'
	    });
});
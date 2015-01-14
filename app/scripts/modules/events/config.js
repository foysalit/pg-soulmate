ApplicationConfiguration.registerModule('events');

angular.module('events').config(function($stateProvider) {
	$stateProvider.
		state('events', {
			url: '/events',
			abstract: true,
			templateUrl: 'templates/menu.html'
	    }).
		state('events.all', {
			url: '/all',
			views: {
			    'content': {
			    	templateUrl: 'templates/modules/events/index.html',
			    	controller: 'EventsController as events'
				}
			}
	    }).
		state('events.create', {
			url: '/create',
			views: {
			    'content': {
			    	templateUrl: 'templates/modules/events/create.html',
			    	controller: 'EventsCreateController as eventsCreator'
				}
			}
	    }).
		state('events.single', {
			url: '/:eventId',
			views: {
			    'content': {
			    	templateUrl: 'templates/modules/events/single.html',
			    	controller: 'EventController as event'
				}
			}
	    });
});
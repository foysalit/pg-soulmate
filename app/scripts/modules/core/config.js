ApplicationConfiguration.registerModule('core');

angular.module('core').config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/events/all');
});
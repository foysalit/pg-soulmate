'use strict';

ApplicationConfiguration.registerModule('authentication');

angular.module('authentication').config(function($stateProvider) {
	$stateProvider.
		state('authentication', {
	      url: '/login',
	      templateUrl: 'templates/modules/authentication/login.html',
	      controller: 'LoginController',
	      controllerAs: 'login'
	    }).
		state('authentication.signup', {
	      url: '/signup',
	      templateUrl: 'templates/modules/authentication/signup.html',
	      controller: 'SignupController',
	      controllerAs: 'signup'
	    });
});
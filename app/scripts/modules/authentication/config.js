'use strict';

ApplicationConfiguration.registerModule('authentication');

angular.module('authentication').config(function($stateProvider) {
	$stateProvider.
		state('authentication.login', {
	      url: '/login',
	      templateUrl: 'templates/modules/authentication/login.html',
	      controller: 'LoginController'
	    }).
		state('authentication.signup', {
	      url: '/signup',
	      templateUrl: 'templates/modules/authentication/signup.html',
	      controller: 'SignupController'
	    });
});
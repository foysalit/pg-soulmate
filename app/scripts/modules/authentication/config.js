'use strict';

ApplicationConfiguration.registerModule('authentication');

angular.module('authentication').config(function($stateProvider) {
	$stateProvider.
		state('login', {
			url: '/login',
			templateUrl: 'templates/modules/authentication/login.html',
			controller: 'LoginController as login'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'templates/modules/authentication/signup.html',
			controller: 'SignupController as signup'
		});
});
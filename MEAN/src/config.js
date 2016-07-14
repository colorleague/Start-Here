import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Initalizing Angular App
const app = angular.module('app', [uiRouter]);

//UI Router ES6
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	// ES5 .config(function($provide, authProvider)

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('todos', {
		url: '/',
		template: require('todos/todos.html')
	})

	.state('about', {
		url: '/',
		template: require('about/about.html')
	})

	$locationProvider.html5Mode(true);

});

export default app;
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menuController from 'controller/menu';

// Initalizing Angular App
const app = angular.module('app', [uiRouter]);

app.directive("logo", function(){
  return {
    restrict: 'E',
    template: require('directives/logo.html')
  }
});

app.directive("menu", function(){
  return {
    restrict: 'E',
    controller: menuController,
    template: require('directives/menu.html')
  }
});

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

	.state('blog', {
		url: '/',
		template: require('blog/blog.html')
	})

	$locationProvider.html5Mode(true);

});

export default app;
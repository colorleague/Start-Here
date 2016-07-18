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

app.directive("light", function(){
	return {
    restrict: 'E',
    template: require('directives/light.html')
	}
})

app.directive("desk1", function(){
	return {
    restrict: 'E',
    template: require('directives/desk1.html')
	}
})

app.directive("desk2", function(){
	return {
    restrict: 'E',
    template: require('directives/desk2.html')
	}
})

app.directive("desk3", function(){
	return {
    restrict: 'E',
    template: require('directives/desk3.html')
	}
})

app.directive("desk4", function(){
	return {
    restrict: 'E',
    template: require('directives/desk4.html')
	}
})

app.directive("man", function(){
	return {
    restrict: 'E',
    template: require('directives/man.html')
	}
})

app.directive("face1", function(){
  return {
    restrict: 'E',
    template: require('directives/face1.html')
  }
})

app.directive("face2", function(){
  return {
    restrict: 'E',
    template: require('directives/face2.html')
  }
})

app.directive("face3", function(){
  return {
    restrict: 'E',
    template: require('directives/face3.html')
  }
})

app.directive("face4", function(){
  return {
    restrict: 'E',
    template: require('directives/face4.html')
  }
})

app.directive("face5", function(){
  return {
    restrict: 'E',
    template: require('directives/face5.html')
  }
})


app.directive("menu", function(){
  return {
    restrict: 'E',
    template: require('directives/menu.html')
  }
});

app.directive("menu2", function(){
  return {
    restrict: 'E',
    template: require('directives/menu2.html')
  }
});

app.directive("menu3", function(){
  return {
    restrict: 'E',
    template: require('directives/menu3.html')
  }
});

app.directive("bubble1", function(){
  return {
    restrict: 'E',
    template: require('directives/bubble1.html')
  }
});

app.directive("bubble2", function(){
  return {
    restrict: 'E',
    template: require('directives/bubble2.html')
  }
});

app.directive("bubble3", function(){
  return {
    restrict: 'E',
    template: require('directives/bubble3.html')
  }
});

//UI Router ES6
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	// ES5 .config(function($provide, authProvider)

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('animation', {
		url: '/',
		controller: menuController,
		template: require('animation/animation.html')
	})

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
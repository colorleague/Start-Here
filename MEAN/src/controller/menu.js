export default function($scope, $http, $state ) {

	$http.get('http://api.colorleague.com/wp-json/posts')
		.success(function(response){
			$scope.wordpress = response;
			console.log(response)
		});

}
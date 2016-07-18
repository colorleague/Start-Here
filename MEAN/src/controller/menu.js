export default function($scope, $http, $state ) {

	$http.get('http://api.colorleague.com/wp-json/posts')
	.success(function(response){
		$scope.wordpress = response;
		console.log(response)
	});

	$scope.pagination = {
		count: 3
	};

	$scope.paginationToggle = function (){
		$scope.pagination.count = $scope.pagination.count + 4
	};

}
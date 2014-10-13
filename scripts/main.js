
var app = angular.module('shPhoto', []);

app.controller('MenuController', function($scope, $http){
	$scope.categories = [
		{
			header: 'People'
		},
		{
			header: 'Nature'
		},
		{
			header: 'Buildings'
		},
		{
			header: 'Music'
		}
	];
	//$http.get('data/categories.json').success(function(data) {
	//    $scope.categories = data;
	//});
});
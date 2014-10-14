
var app = angular.module('shPhoto', []);

app.controller('MenuController', function($scope, $http){
	$scope.categories = [
		{
			header: 'Portfolio'
		},
		{
			header: 'About'
		},
		{
			header: 'Contact'
		}
	];
	//$http.get('data/categories.json').success(function(data) {
	//    $scope.categories = data;
	//});
});

app.controller('ImageController', function($scope){
	$scope.images = [
		{
			src: 'http://lorempixel.com/640/400/people/'
		},
		{
			src: 'http://lorempixel.com/640/400/people/'
		},
		{
			src: 'http://lorempixel.com/640/400/people/'
		}
	];

});
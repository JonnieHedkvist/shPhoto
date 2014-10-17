
var app = angular.module('shPhoto', []);

app.controller('MenuController', function($scope, $http){
	$scope.items = [];
	$http.get('data/categories.json').success(function(data) {
	   $scope.items = data;
	});
});

app.controller('PhotoController', function($scope, $http){
	$scope.selectedCategory = 'all';
	$scope.categories = [
		{
			header: 'Animals'
		},
		{
			header: 'City'
		},
		{
			header: 'Food'
		},
		{
			header: 'Fashion'
		},
		{
			header: 'People'
		}
	];

	$http.get('data/photos.json').success(function(data) {
	   $scope.photos = data;
	});

	$scope.byCategory = function(photos) {
	    return photos.categories.indexOf($scope.selectedCategory) > -1;
	};

	$scope.loadCategory = function(categoryName){
		$scope.selectedCategory = categoryName.toLowerCase();
	};
});

app.directive('photoContainer', function() {
	return {
		restrict: 'E',
		templateUrl: '/partials/photo-container.html'
	};
});

app.directive('topNav', function() {
	return {
		restrict: 'E',
		templateUrl: '/partials/top-nav.html'
	};
});
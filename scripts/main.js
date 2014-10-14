
var app = angular.module('shPhoto', []);

app.controller('MenuController', function($scope, $http){
	$scope.items = [
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
	$scope.images = [
		{
			src: 'http://lorempixel.com/640/400/abstract/'
		},
		{
			src: 'http://lorempixel.com/640/400/abstract/'
		},
		{
			src: 'http://lorempixel.com/640/400/abstract/'
		}
	];
	$scope.loadCategory = function(categoryName){
		categoryName = categoryName.toLowerCase();
		$scope.images = [
			{
				src: 'http://lorempixel.com/800/600/' + categoryName
			},
			{
				src: 'http://lorempixel.com/720/540/' + categoryName
			},
			{
				src: 'http://lorempixel.com/800/600/' + categoryName
			},
			{
				src: 'http://lorempixel.com/720/540/' + categoryName
			},
			{
				src: 'http://lorempixel.com/800/600/' + categoryName
			}
		];
	};

});

var app = angular.module('shPhoto', []);

app.controller('MenuController', function($scope, $http, $location, $anchorScroll){
	$scope.items = [];
	$http.get('data/categories.json').success(function(data) {
	   $scope.items = data;
	});
	//Scoll to div with id=x
	$scope.gotoAnchor = function(x) {
		var newHash = 'anchor' + x;
		if ($location.hash() !== newHash) {
		  $location.hash('anchor' + x);
		} else {
		  $anchorScroll();
		}
	};
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

app.directive('showOnHoverParent',
   function() {
      return {
         link : function(scope, element, attrs) {
            element.parent().bind('mouseenter', function() {
                element.show();
            });
            element.parent().bind('mouseleave', function() {
                 element.hide();
            });
       }
   };
});
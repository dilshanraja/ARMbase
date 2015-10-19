angular.module('testapp')
.controller('MainCtrl', ['$scope', 'apiServices', 'Pusher', function($scope, apiServices, Pusher){
	//Single Variable


	$scope.posts = apiServices.PostsService.GetAll();

	Pusher.subscribe('posts', 'new', function(post){
		$scope.posts.push(post);
	});

	//User input action
	$scope.addPost = function(){

		if(!$scope.title || $scope.title === ''){ return; }

		apiServices.PostsService.Create({
			title: $scope.title,
			link: $scope.link
		});

		//reset the form
		$scope.title = '';
		$scope.link = '';
	};

	$scope.upvote = function(post){
		//Post is passed by reference from the ng-repeat group to the specific $scope.posts object
		post.upvotes += 1;
	};
}]);
angular.module('testapp')
.factory('apiServices', ['$http', function($http){
		return {
			PostsService:{
				GetAll: function(){
					var posts = [];

					$http.get('/posts.json').success(function(data) {
						angular.copy(data, posts);
					});

					return posts;
				},
				Create: function(post){
					return $http.post('/posts.json', post);
				}
			}
		}
}]);
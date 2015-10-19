angular.module('testapp', ['ui.router', 'templates', 'doowb.angular-pusher', 'Devise'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    //this is where all the routing goes

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/_home.html',
            controller: 'MainCtrl'
            //resolve: {
            //  postPromise: ['posts', function(posts){
            //    return posts.getAll();
            //  }]
            //}
        })
        .state('posts', {
            url: '/posts/{id}',
            templateUrl: 'posts/_posts.html',
            controller: 'PostsCtrl'
        })
				.state('login', {
						url: '/login',
						templateUrl: 'auth/_login.html',
						controller: 'AuthCtrl',
						onEnter: ['$state', 'Auth', function($state, Auth){
							Auth.currentUser().then(function (){
								$state.go('home');
							});
						}]
				})
				.state('register', {
						url: '/register',
						templateUrl: 'auth/_register.html',
						controller: 'AuthCtrl',
						onEnter: ['$state', 'Auth', function($state, Auth){
							Auth.currentUser().then(function (){
								$state.go('home');
							});
						}]
				});


    $urlRouterProvider.otherwise('home');
}])
.config(['PusherServiceProvider', function(PusherServiceProvider){
	PusherServiceProvider.setToken('1a2e91ca0e21ca355cb0').setOptions({});
}]);
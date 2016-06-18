angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/book', {
			templateUrl: 'views/book.html',
			controller: 'BookController'
		})

		.when('/member', {
			templateUrl: 'views/member.html',
			controller: 'MemberController'	
		})

		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'MemberController'
		});

	$locationProvider.html5Mode(true);

}]);
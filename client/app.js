angular.module('AngularinClass', ['ngRoute', 'AngularinClass.controllers', 'AngularinClass.factories', 'AngularinClass.services'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html', 
        controller: 'WelcomeController'
    })
    .when('/people', {
        templateUrl: 'views/people_list.html',
        controller: 'PeopleListController'
    })
    .when('/people/:i', {
        templateUrl: 'views/single_person.html',
        controller: 'SinglePersonController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
angular.module('AngularinClass.controllers', [])
.controller('WelcomeController', ['$scope', function($scope) {
    $scope.welcomeMessage = "Hello World!";
    $scope.weather = 'sunny';

    $scope.sayHello = function () {
        alert('Hello World!');
    }   
}])
.controller('PeopleListController', ['$scope', 'PersonService', function($scope, PersonService) {
    $scope.people = PersonService.all();
}])
.controller('SinglePersonController', ['$scope', '$routeParams', 'PersonService', function($scope, $routeParams, PersonService) {    
   $scope.people = PersonService.read($routeParams.i);
}]);
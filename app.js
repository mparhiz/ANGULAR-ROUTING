var app = angular.module('myApp', []);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
  //$locationProvider.html5Mode(true);
  $routeProvider.
    when('/', {templateUrl: 'templates/list.html'}).
    when('/new', {templateUrl: 'templates/edit.html', controller: "newCtrl"}).
    when('/edit/:id', {templateUrl: 'templates/edit.html', controller: "editCtrl"}).
    otherwise({redirectTo: '/'});
}]);

app.controller("newCtrl", ['$scope', '$location', function($scope, $location){
  $scope.person = {name:"", family:""};
  $scope.save = function(){
    if ($scope.person.name != "" || $scope.person.family != ""){
      $scope.persons.push($scope.person);  
    };
    
    $location.path('/');
  };
}]);

app.controller("editCtrl", ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams){
  $scope.person = $scope.persons[$routeParams.id];
  $scope.save = function(){
    $location.path('/');
  };
}]);

app.controller("appCtrl",['$scope', function($scope){
  $scope.persons = [
                    {name:"Mohsen", family: "Parhiz"},
                    {name: "Radin", family: "Parhiz"}
                  ];

  $scope.delete = function(id){
    $scope.persons.splice(id, 1);
  }
}]);

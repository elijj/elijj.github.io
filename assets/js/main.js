/*
Written by: Eli Jackson
*/

var myApp = angular.module('myApp', ['ui.router','firebase'])
// Configure the app
.config(function($stateProvider) {
	$stateProvider
	.state('home', { // Landing page
	  url:'',
	  templateUrl: 'assets/html/home.html', // HTML fragment
	  controller: 'HomeController', // Which controller 
	})
	.state('projects', { // projects page
	  url:'/projects',
	  templateUrl: 'assets/html/projects.html', // HTML fragment
	  controller: 'ProjectController', // Which controller 
	})
	.state('contact', { // contact page
	  url:'/contact',
	  templateUrl: 'assets/html/contact.html', // HTML fragment
	  controller: 'ContactController', // Which controller 
	})
	.state('about', { // Interest page
	  url:'/about',
	  templateUrl: 'assets/html/about.html', // HTML fragment
	  controller: 'AboutController', // Which controller 
	});
})

//factory object for larger scope
myApp.factory('Data',[ '$firebaseObject',function ($firebaseObject) {
    var ref = new Firebase("https://ejportfolio.firebaseio.com/");
    var obj = $firebaseObject(ref);
    return obj;
}]);

// Home Controller
myApp.controller('HomeController', ['$scope','Data',function($scope,Data){
      Data.$loaded().then(function() {
        $scope.homeContent = Data.home;
      });
}]);

// Project Controller
myApp.controller('ProjectController',['$scope','Data',  function($scope,Data){
  Data.$loaded().then(function() {
        $scope.projectsContent = Data.projects;
  });
}]);

// Contact Controller
myApp.controller('ContactController', ['$scope','Data',  function($scope,Data){
  Data.$loaded().then(function() {
        $scope.contactContent = Data.contact;
  });
}]);

// Interest Controller
myApp.controller('AboutController', ['$scope','Data',  function($scope,Data) {
  Data.$loaded().then(function() {
        $scope.aboutContent = Data.about;
  });
}]);

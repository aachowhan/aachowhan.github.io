var app = angular.module('Assad', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    .when('/experience', {
        templateUrl : 'pages/experience.html',
        controller  : 'experienceController'
    })

    .when('/resume', {
        templateUrl : 'pages/resume.html',
        controller  : 'resumeController'
    });
});

app.controller('mainController', function($scope) {
    
});

app.controller('experienceController', function($scope) {
    
});

app.controller('resumeController', function($scope) {
    
});
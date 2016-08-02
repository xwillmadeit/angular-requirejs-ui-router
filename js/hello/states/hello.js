define([
    'common/states/main'
], function(states) {
    states.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('hello', {
            url: '/hello',
            templateUrl: 'js/hello/templates/hello.html',
            controller: 'helloCtrl'
        }).state('bye', {
            url: '/bye',
            templateUrl: 'js/hello/templates/bye.html',
            controller: 'byeCtrl'
        });

        $urlRouterProvider.otherwise("/hello");
    }]);
});

define([
    'common/controllers/main'
], function(controllers) {
	controllers.controller('helloCtrl', ['$scope', function($scope){
		$scope.greeting = 'hello';
	}]);
});

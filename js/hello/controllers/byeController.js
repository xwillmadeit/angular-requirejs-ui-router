define([
    'common/controllers/main'
], function(controllers) {
    controllers.controller('byeCtrl', ['$scope', function($scope) {
        $scope.greeting = 'bye';
    }]);
});

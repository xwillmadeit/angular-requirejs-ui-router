define([
    'common/directives/main'
], function(directives) {
    directives.directive('hello', [function() {
        return {
            restrict: 'EA',
            template: '<h2>shit!</h2>',
            link: function(scope, iElement, iAttrs) {

            }
        };
    }]);
});

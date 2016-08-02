define([
    'angular',
    'ui.router',
    'common/controllers/main',
    'common/services/main',
    'common/directives/main',
    'common/states/main',
    'hello/main'
], function(angular) {
    return angular.module('mch', ['controllers', 'services', 'directives', 'states']);
})

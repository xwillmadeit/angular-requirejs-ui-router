require.config({
    baseUrl: '/js',
    paths: {
        angular: '../node_modules/angular/angular.min',
        'ui.router': '../node_modules/angular-ui-router/release/angular-ui-router.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'ui.router': {
            deps: ['angular']
        }
    },
    deps: ['bootstrap']
})

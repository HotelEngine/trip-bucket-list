(function () {

    'use strict';

    angular.module('app', ['ngRedux'])
        .config(config);


    function config($ngReduxProvider) {

        const { store } = require('Redux');
        $ngReduxProvider.provideStore(store());

    }

})();
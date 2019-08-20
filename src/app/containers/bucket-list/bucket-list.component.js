(function () {

    'use strict';

    angular.module('app')
        .component('bucketList', {
            template: require('./bucket-list.html'),
            controller: BucketListController
        });

    function BucketListController() {

        const $ctrl = this;

        $ctrl.trips = require('../../data/trips').default;

        $ctrl.$onInit = $onInit;

        function $onInit() {

            console.log('trips', $ctrl.trips);

        }

    }

})();
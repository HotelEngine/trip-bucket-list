(function () {

    'use strict';

    angular.module('app')
        .component('bucketList', {
            template: require('./bucket-list.html'),
            controller: BucketListController
        });

    function BucketListController($ngRedux) {

        const $ctrl = this;
        const { Creators } = require('../../../../Redux/Actions/Trips');

        $ctrl.trips = $ngRedux.getState().Trips.trips;
        $ctrl.trip = {};

        $ctrl.$onInit = $onInit;

        $ctrl.addTrip = addTrip;
        $ctrl.updateTrip = updateTrip;

        function $onInit() {
            console.log('trips', $ctrl.trips);
        }

        function addTrip() {
            // do something
        }

        function updateTrip() {
            // do something
        }

    }

})();

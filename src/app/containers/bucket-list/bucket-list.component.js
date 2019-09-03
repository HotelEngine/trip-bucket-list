(function () {

    'use strict';

    angular.module('app')
        .component('bucketList', {
            template: require('./bucket-list.html'),
            controller: BucketListController
        });

    function BucketListController($ngRedux) {

        const $ctrl = this;

        $ctrl.trips = $ngRedux.getState().Trips.trips;
        $ctrl.trip = {};

        $ctrl.$onInit = $onInit;
        $ctrl.addTrip = addTrip;

        function $onInit() {
            console.log('trips', $ctrl.trips);
        }

        function addTrip() {
            const { Creators } = require('../../../../Redux/Trips/Trips');
            $ngRedux.dispatch(Creators.addTrip($ctrl.trip));
            $ctrl.trips = $ngRedux.getState().Trips.trips;
            $ctrl.trip = {};
        }

    }

})();

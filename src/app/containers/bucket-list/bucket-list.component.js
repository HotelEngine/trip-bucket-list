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
            console.log('angular trips', $ctrl.trips);
        }

        function addTrip() {
            $ngRedux.dispatch(Creators.addTrip($ctrl.trip));
            $ctrl.trips = $ngRedux.getState().Trips.trips;
            $ctrl.trip = {};
        }

        function updateTrip() {
            $ngRedux.dispatch(Creators.updateTrip($ctrl.trip));
            $ctrl.trips = $ngRedux.getState().Trips.trips;
            $ctrl.trip = {};
            console.log('angular trips', $ctrl.trips);
        }

    }

})();

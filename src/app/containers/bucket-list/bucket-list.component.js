import angular from 'angular';
import { react2angular } from 'react2angular';
import { BucketList } from 'react-components';

export default angular
    .module('app')
    .component('bucketList', react2angular(BucketList, []));

// (function () {

//     'use strict';

//     angular.module('app')
//         .component('bucketList', {
//             template: require('./bucket-list.html'),
//             controller: BucketListController
//         });

//     function BucketListController() {

//         const $ctrl = this;

//         $ctrl.$onInit = $onInit;

//         function $onInit() {

//             console.log('hey')
//         }

//     }

// })();
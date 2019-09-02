import { react2angular } from 'react2angular';
import { BucketList } from 'react-components';

export default angular
    .module('app')
    .component('reactBucketList', react2angular(BucketList, ['store']));

(function () {

    'use strict';

    angular.module('app')
        .component('reactBucketListWrapper', {
            template: `<react-bucket-list store="$ctrl.store"></react-bucket-list>`,
            controller: BucketListWrapperController
        });

    function BucketListWrapperController($ngRedux) {

        const $ctrl = this;

        $ctrl.store = $ngRedux;

    }
})();

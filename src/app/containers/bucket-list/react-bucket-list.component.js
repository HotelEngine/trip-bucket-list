import angular from 'angular';
import { react2angular } from 'react2angular';
import { BucketList } from 'react-components';

export default angular
    .module('app')
    .component('reactBucketList', react2angular(BucketList, []));
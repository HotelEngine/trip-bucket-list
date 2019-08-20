import React from 'react';
import { AddTripForm } from '../../index';

const BucketList = ({ store }) => {

    return (
        <div>
            BUCKET LIST REACT

            <AddTripForm store={store} />
        </div>
    );

}

export default BucketList;

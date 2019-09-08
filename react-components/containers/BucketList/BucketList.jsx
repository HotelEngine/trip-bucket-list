import React from 'react';
import { AddTripForm, TripList } from '../../index';
import './BucketList.scss';
import { Provider } from "react-redux";

const BucketList = ({ store }) => (
    <Provider store={store}>
        <div className="react-bucket-list">
            <h1>Trip Bucket List</h1>
            <AddTripForm />
            <TripList />
        </div>
    </Provider>
);

export default BucketList;

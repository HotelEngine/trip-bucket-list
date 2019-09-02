import React from 'react';
import { AddTripForm } from '../../index';
import './BucketList.scss';

const BucketList = ({ store }) => {

    const trips = store.getState().Trips.trips;

    const _TripList = trips.map(trip =>
        <div key={trip.id} className="trip">
            <div className="image-wrapper">
                <img src={trip.image} alt=""/>
            </div>
            <span>{trip.city}, {trip.country}</span>
            <div className="checkbox-wrapper">
                <input name="checked" type="checkbox"/>
                <label htmlFor="checked"></label>
            </div>
        </div>
    );

    return (
        <div className="react-bucket-list">
            <h1>Trip Bucket List</h1>
            <AddTripForm store={store} />
            <div className="trip-list">
                {_TripList}
            </div>
        </div>
    );

}

export default BucketList;

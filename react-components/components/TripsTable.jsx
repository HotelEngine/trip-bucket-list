import React from 'react';
import '../containers/BucketList/BucketList.scss';
import { connect, useDispatch, useSelector } from "react-redux";
import { Creators as TripActions } from '../../Redux/Actions/Trips';

const TripsTable = () => {

    const trips = useSelector(state => state.Trips.trips);
    const dispatch = useDispatch();

    const handleCheckbox = trip => {
        dispatch(TripActions.updateTrip({
            ...trip,
            completed: !trip.completed
        }));
    }

    return (
        <div className="trip-list">
            {trips.map(trip =>
                <div key={trip.id} className="trip">
                    <div className="image-wrapper">
                        <img src={trip.image} alt=""/>
                    </div>
                    <span>{trip.city}, {trip.country}</span>
                    <div className="checkbox-wrapper">
                        <input
                            name="checked"
                            type="checkbox"
                            checked={trip.completed}
                            onChange={() => handleCheckbox(trip)}
                        />
                        <label htmlFor="checked"></label>
                    </div>
                </div>
            )}
        </div>
    );

}

export default connect(null, null)(TripsTable);

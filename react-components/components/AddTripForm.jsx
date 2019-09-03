import React from 'react';
import { useDispatch } from 'react-redux';
import { Creators as TripActions } from '../../Redux/Actions/Trips';

const { useState } = React;

const AddTripForm = props => {
    const dispatch = useDispatch();

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const _handleAddTrip = () => {

        const trip = {
            id: Date.now(),
            city,
            country,
            image: '',
            completed: false
        };

        dispatch(TripActions.addTrip(trip));
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input placeholder="City" onChange={e => setCity(e.target.value)} />
            <input placeholder="Country" onChange={e => setCountry(e.target.value)} />
            <button onClick={_handleAddTrip}>Add Trip</button>
        </form>
    )
}

export default AddTripForm;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Creators as TripActions } from '../../Redux/Actions/Trips';

const { useState } = React;

const AddTripForm = () => {

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
        setCity('');
        setCountry('');

    }

    return (
        <form id="addTripForm" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
            <input type="text" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} />
            <button onClick={_handleAddTrip}>Add Trip</button>
        </form>
    )
}

export default AddTripForm;

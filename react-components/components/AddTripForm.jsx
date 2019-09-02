import React from 'react';
import { connect } from 'react-redux';
import { Creators as TripActions } from '../../Redux/Trips/Trips';

const { useState } = React;

const AddTripForm = props => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const _handleAddTrip = () => {

        const trip = {
            id: Date.now(),
            city,
            country,
            image: '',
            checked: false
        };

        props.addTrip(trip);
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input placeholder="City" onChange={e => setCity(e.target.value)} />
            <input placeholder="Country" onChange={e => setCountry(e.target.value)} />
            <button onClick={_handleAddTrip}>Add Trip</button>
        </form>
    )
}

export default connect(null, TripActions)(AddTripForm);

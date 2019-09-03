import { createActions, createReducer } from 'reduxsauce';
import trips from '../../src/app/data/trips';

export const initialState = {
    trips
};

export const addTrip = (state = initialState, { trip }) => ({
    ...state,
    trips: [
        ...state.trips,
        trip
    ]
});

export const updateTrip = (state = initialState, { trip }) => {
    const updatedTrips = state.trips.map(t => {
        if (t.id === trip.id) {
            return trip;
        }
        return t;
    });

    return {
        ...state,
        trips: updatedTrips
    }
};

export const { Types, Creators } = createActions({
    addTrip: ['trip'],
    updateTrip: ['trip']
});

export const HANDLERS = {
    [Types.ADD_TRIP]: addTrip,
    [Types.UPDATE_TRIP]: updateTrip
};

export default createReducer(initialState, HANDLERS);

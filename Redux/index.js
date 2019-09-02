import { compose, createStore } from 'redux';
import { combineReducers } from 'redux';
import Trips from './Trips/Trips';


const configureStore = rootReducer => {

    const devToolsExtension = window['__REDUX_DEVTOOLS_EXTENSION__']
        ? window['__REDUX_DEVTOOLS_EXTENSION__']()
        : f => f;
    const enhancers = [devToolsExtension];
    const store = createStore(rootReducer, compose(...enhancers));

    return store;

};

// Combine all reducers into one root reducer
const combinedReducers = combineReducers({
    Trips
});

const rootReducer = (state, action) => {

    return combinedReducers(state, action);

};

export const store = () => {

    return configureStore(rootReducer);

};

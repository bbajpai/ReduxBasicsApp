import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import reducers from './reducers';
//import actions from './actions'

import App from './App';
//moviesList();

// variable to set a store and attach it to middleware 
const createStoreWithMiddelware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddelware(reducers)}>
        <App />
    </Provider>  
    , document.getElementById('root'));


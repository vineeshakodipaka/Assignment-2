// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer'; // Assuming you have a reducer for data


const rootReducer = combineReducers({
  data: dataReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

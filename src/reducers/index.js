import { combineReducers } from 'redux';
import Countries from './reducer_countries';

const rootReducer = combineReducers({
  countries: Countries
});

export default rootReducer;
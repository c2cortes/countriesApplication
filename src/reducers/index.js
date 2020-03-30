import { combineReducers } from 'redux';
import Countries from './reducer_countries';
import Country from './reducer_countries';

const rootReducer = combineReducers({
  countries: Countries,
  country: Country
});

export default rootReducer;
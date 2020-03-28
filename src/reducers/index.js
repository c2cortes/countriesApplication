import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  authState: AuthReducer
});

export default rootReducer;
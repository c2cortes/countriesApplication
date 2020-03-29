import { FETCH_COUNTRIES } from '../actions/index';

export default function(state = null, action){
	switch (action.type) {
		case FETCH_COUNTRIES:
			return action.payload.data;
	}
	return state;
}
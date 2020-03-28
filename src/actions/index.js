import axios from 'axios';

export const AUTH = 'AUTH';

////////***  Auth Actions  ***/////////

export function authAction(params){
	return{
		type: AUTH,
		payload: params
	}
}
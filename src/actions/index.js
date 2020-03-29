import axios from 'axios';

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const API_URL = 'https://restcountries.eu/rest/v2/';

////////***  Countries Actions  ***/////////

export function fetchCountries(name = 'united'){
	const url = `${API_URL}name/${name}`;
	const request = axios.get(url);

	return{
		type: FETCH_COUNTRIES,
		payload: request
	}
}
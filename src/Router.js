import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import CountriesList from './containers/countriesList';
import CountryDetail from './containers/countryDetail';

const RouterComponent = () => {
	return(
		<Router>
			<Scene key="root">
				<Scene key="CountriesList" component={CountriesList} initial={true}/>
                <Scene key="CountryDetail" component={CountryDetail}/>
			</Scene>
		</Router>
	)
}

export default RouterComponent;
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CountriesSearch from './countriesSearch';
import CountryListItem from './countryListItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCountries } from '../actions/index';

class CountriesList extends Component {

    constructor(){
        super();
    }

    componentDidMount(){
        this.props.fetchCountries();
    }
  
    render() {
        return (
            <View>
                <CountriesSearch/>
                <View>
                    { this.props.countries.map((country, index) => { return <CountryListItem country={ country } index={ index } key={ index }/>; }) }
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countries ? state.countries : []
    }
}

const mapDispatchToProps = dispath => {
    return bindActionCreators({ fetchCountries }, dispath);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);

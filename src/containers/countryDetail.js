import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { styles } from './Styles'

import { SvgUri } from 'react-native-svg';
import MapView from 'react-native-maps';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCountry } from '../actions/index';

class CountryDetail extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const { countryInfo }                   = this.props,
          { name, capital, latlng, flag }   = countryInfo;
    
    return (
      <View>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <SvgUri width="40%" height="40%" uri={flag}  />
        </View>
        
        <View style={{ alignItems: 'center', marginTop: -50 }}>
          <Text style={ styles.title }>{name}</Text>
          <Text style={ styles.label }>Capital / {capital}</Text>
        </View>

        <View style={styles.mapContainer}>
          <MapView  
            style={styles.map}
            region={{
              latitude: latlng[0],
              longitude: latlng[1],
              latitudeDelta: 20,
              longitudeDelta: 20,
            }}
          >
          </MapView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    country: state.country
  }
}

const mapDispatchToProps = dispath => {
  return bindActionCreators({ fetchCountry }, dispath);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);
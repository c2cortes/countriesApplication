import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

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

        <View style={styles.container}>
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

const styles = StyleSheet.create({

  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 200,
    height: 530
  },
  
  title:{
    color: '#3a4149',
    fontFamily: 'Heiti SC',
    fontWeight: '600',
    fontSize: 20,
  },
  label:{
    color: '#3a4149',
    fontFamily: 'Heiti SC',
    fontWeight: '400',
    fontSize: 18,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);
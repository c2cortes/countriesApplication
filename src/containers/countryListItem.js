import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCountry } from '../actions/index';

class CountryListItem extends Component {

  constructor(props){
    super(props);
  }

  pressItem() {
    const countryInfo = this.props.country;
    Actions.CountryDetail({ countryInfo });
  }
  
  render() {
    const name = this.props.country.name;
    return (
        <View style={styles.sectionContainer}>
            <TouchableOpacity onPress={ () => this.pressItem() }>
                <Text style={styles.sectionTitle}>{ name }</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispath => {
  return bindActionCreators({ fetchCountry }, dispath);
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(CountryListItem);
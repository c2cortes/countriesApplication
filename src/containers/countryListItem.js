import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCountries } from '../actions/index';

class CountryListItem extends Component {

  constructor(){
    super();
  }

  pressItem() {

  }
  
  render() {
    return (
        <View style={styles.sectionContainer}>
            <TouchableOpacity onPress={ () => this.pressItem() }>
                <Text style={styles.sectionTitle}>{ this.props.country.name }</Text>
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
  return bindActionCreators({ fetchCountries }, dispath);
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
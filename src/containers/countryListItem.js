import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './Styles'

import { Actions } from 'react-native-router-flux';

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
        <View style={styles.countryItemList}>
            <TouchableOpacity onPress={ () => this.pressItem() }>
                <Text style={styles.label}>{ name }</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(CountryListItem);
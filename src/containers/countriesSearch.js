import React, { Component } from 'react';
import {
  TextInput,
  View,
  Image
} from 'react-native';

import { styles } from './Styles'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCountries } from '../actions/index';

class CountriesSearch extends Component {

    constructor(){
        super();
        this.state = {}
    }

    changeSearchFilter(value) {
        this.setState({ search: value }, () => {
            this.state.search.length >= 3 ? this.props.fetchCountries(this.state.search) : null
        });
    }
  
    render() {
        return (
            <View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Image
                        style={{ width: 100, height: 93 }}
                        source={ require('../assets/img/logo.png') }
                    />
                </View>
            
                <View style={styles.sectionContainer} key={this.props.index}>
                    <TextInput
                        style={styles.input}
                        value={this.state.search}
                        placeholder="Type the country where you want to go..."
                        onChangeText={ (value) => this.changeSearchFilter(value) }
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispath => {
  return bindActionCreators({ fetchCountries }, dispath);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesSearch);

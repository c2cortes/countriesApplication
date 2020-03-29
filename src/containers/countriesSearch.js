import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

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
            <View style={styles.sectionContainer} key={this.props.index}>
                <TextInput
                    style={styles.input}
                    value={this.state.search}
                    placeholder="Type the country"
                    onChangeText={ (value) => this.changeSearchFilter(value) }
                />
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

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    input: {
        borderRadius:5,
        backgroundColor:'white',
        height: 40,
        borderColor: '#edeef0',
        borderWidth: 1,
        fontSize: 14
      },
  });

export default connect(mapStateToProps, mapDispatchToProps)(CountriesSearch);

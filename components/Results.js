'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import {Actions} from 'react-native-router-flux';

class Results extends Component {
    render(){
        return (
            <View style={styles.container}>
               <TouchableHighlight onPress={()=>{}}>
                  <Text>{this.props.overAllRating}</Text>
               </TouchableHighlight>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});



module.exports = Results;

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

var Login = require('./components/Login')
var Register = require('./components/Register')
var Home = require('./components/Home')
class RateMyDay extends Component {
    render(){
        return (
            <View style={{flex:1}}>
            <Router>
            <Scene key="root">
              <Scene key="login" component={Login} title="Login"/>
              <Scene key="register" component={Register} title="Register"/>
              <Scene key="home" component={Home}/>
            </Scene>
          </Router>
            </View>
        );
    }
}

AppRegistry.registerComponent('RateMyDay', () => RateMyDay);

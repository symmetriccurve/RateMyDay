'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Home = require('./components/Home')

class RateMyDay extends Component {
    render(){
        return <Home/>
    }
}

AppRegistry.registerComponent('RateMyDay', () => RateMyDay);

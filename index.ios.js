'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Smile = require('./components/Smile')
var Fit = require('./components/Fit')
var Happy = require('./components/Happy')
var Help = require('./components/Help')
var Creative = require('./components/Creative')

var Home = require('./components/Home')

class RateMyDay extends Component {
    render(){
        return <Home/>
    }
}

AppRegistry.registerComponent('RateMyDay', () => RateMyDay);

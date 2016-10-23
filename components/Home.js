'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

var Smile = require('./Smile')
var Fit = require('./Fit')
var Happy = require('./Happy')
var Help = require('./Help')
var Creative = require('./Creative')
var LetsGo = require('./LetsGo')
var Results = require('./Results')

class Home extends Component {
    render(){
        return (
         <View style={{flex:1,backgroundColor:'tan'}}>
            <Router>
               <Scene key="root">
                 <Scene key="LetsGo" component={LetsGo} title="LetsGo"  navigationBarStyle={{backgroundColor:'#0576A7'}} titleStyle = {{color:'white',fontFamily:'AvenirNext-Bold'}}/>
                 <Scene key="Creative" component={Creative} title="Creative" backTitle = 'Start' navigationBarStyle={{backgroundColor:'#0576A7'}} backButtonTextStyle ={{color:'white'}} titleStyle = {{color:'white',fontFamily:'AvenirNext-Bold'}}/>
                 <Scene key="Happy" component={Happy} title="Happy" backTitle = 'Creative'  navigationBarStyle={{backgroundColor:'#0576A7'}} backButtonTextStyle ={{color:'white'}} titleStyle = {{color:'white',fontFamily:'AvenirNext-Bold'}}/>
                 <Scene key="Help" component={Help} title="Help"  backTitle = 'Happy' navigationBarStyle={{backgroundColor:'#0576A7'}} backButtonTextStyle ={{color:'white'}} titleStyle = {{color:'white',fontFamily:'AvenirNext-Bold'}}/>
                 <Scene key="Smile" component={Smile} title="Smile" backTitle = 'Help'  navigationBarStyle={{backgroundColor:'#0576A7'}} backButtonTextStyle ={{color:'white'}} titleStyle = {{color:'white',fontFamily:'AvenirNext-Bold'}}/>
                 <Scene key="Fit" component={Fit} title="Fit"  backTitle = 'Smile' navigationBarStyle={{backgroundColor:'#0576A7'}} backButtonTextStyle ={{color:'white'}} titleStyle = {{color:'white',fontFamily:'AvenirNext-Bold'}}/>
                  <Scene key="Results" component={Results} title="Results"  backTitle = 'Fit' navigationBarStyle={{backgroundColor:'#0576A7'}} backButtonTextStyle ={{color:'white'}} titleStyle = {{color:'white',fontFamily:'AvenirNext-Bold'}}/>
               </Scene>
           </Router>
         </View>
        );
    }
}

class NavBar extends Component{
   render(){
      return <View style={{height:200,width:100,backgroundColor:'yellow'}}/>
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



module.exports = Home;

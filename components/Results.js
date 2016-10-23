'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';
var {height,width} = Dimensions.get('window')
import {Actions} from 'react-native-router-flux';

class Results extends Component {
   results(){
      var r = this.props.overAllRating
      if(r >= 45){
         return 'You had an Extraordinory Day !'
      } else if( r >= 40 && r < 45 ) {
         return 'You had an Great Day !'
      } else if( r >= 30 && r < 40 ){
         return 'You had a Good Day !'
      } else if(r >= 20 && r < 30 ){
         return 'You had a Nice Day !'
      } else {
         return 'You had a Normal Day !'
      }

   }
    render(){
        return (
            <View style={styles.container}>
                  <Text style={{fontSize:height/18,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign:'center',color:'#72E686'}}>
                     {this.results()}
                  </Text>
               <View style={{height:height/10,backgroundColor:'lightgrey',alignItems:'center',justifyContent:'center',flexDirection:'row',shadowOffset:{width:1,height:1},shadowColor:'black',shadowRadius:3, shadowOpacity: 0.8}}>
                  <TouchableHighlight
                  onPress ={()=>{Actions.Creative({type: "reset"})}}
                  underlayColor = '#eeeeee'
                  style={{height:height/30,width:width,backgroundColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                     <View><Text style={{fontSize:height/30,fontFamily:'AvenirNext-Bold',fontWeight:'700',color:'white'}}>Start Over</Text></View>
                  </TouchableHighlight>
               </View>
            </View>
        );
    }
}
//{this.props.overAllRating * 2} %

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F8D8',
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

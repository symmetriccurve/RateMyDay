'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableHighlight
} from 'react-native';
var {height,width} = Dimensions.get('window')
import {Actions} from 'react-native-router-flux';

class Happy extends Component {
    render(){
        return (
            <View style={{height:height,marginTop:height/20}}>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#4CD964'}}>
                     <Text style={{fontSize:height/25,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign  :'center',color:'white'}}>
                           How Happy have you being today?
                     </Text>
               </View>
               <View style={{flex:0.2,backgroundColor:'#A4F3B2',alignItems:'center',justifyContent:'center',flexDirection:'row',shadowOffset:{width:1,height:1},shadowColor:'black',shadowRadius:3, shadowOpacity: 0.8}}>
                  <TextInput
                  keyboardType='numeric'
                  maxLength = {2}
                  textAlign='center'
                  style={{height:height/11,width:width/1.5,backgroundColor:'#A4F3B2',fontFamily:'AvenirNext-Bold',fontSize:height/30,color:'white'}}/>
                  <TouchableHighlight
                  onPress ={()=>{Actions.Help()}}
                  underlayColor = '#eeeeee'
                  style={{height:height/11,width:width/4,backgroundColor:'#04BF25',alignItems:'center',justifyContent:'center'}}>
                     <View><Text style={{fontSize:height/30,fontFamily:'AvenirNext-Bold',fontWeight:'700',color:'white'}}> Next </Text></View>
                  </TouchableHighlight>
               </View>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#4CD964'}}>
                  <Text style={{fontSize:height/18,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign:'center',color:'#72E686'}}>Creativity is intelligence having Fun</Text>
               </View>
            </View>
        );
    }
}

module.exports = Happy;

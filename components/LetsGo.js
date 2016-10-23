'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';
var {height,width} = Dimensions.get('window')
import {Actions} from 'react-native-router-flux';

class LetsGo extends Component {
    render(){
        return (
            <View style={{height:height,marginTop:height/20}}>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#34AADC'}}>
                     <Text style={{fontSize:height/25,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign  :'center',color:'white',margin:10}}>
                           A New Day, a New Blessing
                     </Text>
                     <View  style={{height:1,width:width/2,backgroundColor:'white',opacity:0.5,margin:10,alignItems:'center',justifyContent:'center'}}/>
                     <Text style={{fontSize:height/25,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign  :'center',color:'white',margin:10,alignItems:'center',justifyContent:'center'}}>
                           Every day may not be good, but there's something good in every day.
                     </Text>
                     <View  style={{height:1,width:width/2,backgroundColor:'white',opacity:0.5,marginTop:height/20}}/>
                     <Text style={{fontSize:height/25,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign  :'center',color:'white',margin:10}}>
                           Answer 5 Simple Questions to Rate your Day !
                     </Text>
               </View>
               <View style={{flex:0.2,backgroundColor:'#0576A7',alignItems:'center',justifyContent:'center',flexDirection:'row',shadowOffset:{width:1,height:1},shadowColor:'black',shadowRadius:3, shadowOpacity: 0.8}}>
                  <TouchableHighlight
                  onPress ={()=>{Actions.Creative()}}
                  underlayColor = '#eeeeee'
                  style={{height:height/11,width:width,backgroundColor:'#0576A7',alignItems:'center',justifyContent:'center'}}>
                     <View><Text style={{fontSize:height/30,fontFamily:'AvenirNext-Bold',fontWeight:'700',color:'white'}}>Rate My Day</Text></View>
                  </TouchableHighlight>
               </View>
               <View style={{flex:0.1,alignItems:'center',justifyContent:'center',backgroundColor:'#34AADC'}}>
                  <Text style={{fontSize:height/18,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign:'center',color:'#0576A7'}}></Text>
               </View>
            </View>
        );
    }
}



module.exports = LetsGo;

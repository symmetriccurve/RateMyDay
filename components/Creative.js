 'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableHighlight,
  Alert
} from 'react-native';
var {height,width} = Dimensions.get('window')
import {Actions} from 'react-native-router-flux';

class Creative extends Component {
   constructor(props){
      super(props)
      this.state ={
         creativeRating:''
      }
   }

   _ratingLogin(){
      if(/^(?:[1-9]|0[0]|10)$/.test(this.state.creativeRating)){
            Actions.Happy({overAllRating: Number(this.state.creativeRating)})
      }else {
         Alert.alert('Please Enter on a scale of 1 to 10')
      }
   }

    render(){
        return (
            <View style={{height:height,marginTop:height/20}}>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#34AADC'}}>
                     <Text style={{fontSize:height/25,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign  :'center',color:'white'}}>
                           How Creative have you being today?
                     </Text>
               </View>
               <View style={{flex:0.2,backgroundColor:'#87CFEE',alignItems:'center',justifyContent:'center',flexDirection:'row',shadowOffset:{width:1,height:1},shadowColor:'black',shadowRadius:3, shadowOpacity: 0.8}}>
                  <TextInput
                  value={this.state.creativeRating}
                  onChangeText = {(text)=>this.setState({creativeRating:text})}
                  keyboardType='numeric'
                  maxLength = {2}
                  textAlign='center'
                  style={{height:height/11,width:width/1.5,backgroundColor:'#87CFEE',fontFamily:'AvenirNext-Bold',fontSize:height/30,color:'white'}}/>
                  <TouchableHighlight
                  onPress ={()=>{this._ratingLogin()}}
                  underlayColor = '#eeeeee'
                  style={{height:height/11,width:width/4,backgroundColor:'#0576A7',alignItems:'center',justifyContent:'center'}}>
                     <View><Text style={{fontSize:height/30,fontFamily:'AvenirNext-Bold',fontWeight:'700',color:'white'}}> Next </Text></View>
                  </TouchableHighlight>
               </View>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#34AADC'}}>
                  <Text style={{fontSize:height/18,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign:'center',color:'#0576A7'}}>Creativity is intelligence having Fun</Text>
               </View>
            </View>
        );
    }
}

module.exports = Creative;

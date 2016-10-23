'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  Alert,
  TouchableHighlight
} from 'react-native';
var {height,width} = Dimensions.get('window')
import {Actions} from 'react-native-router-flux';

class Help extends Component {

   constructor(props){
      super(props)
      this.state ={
         helpRating:''
      }
   }

   _ratingLogin(){
      if(/^(?:[1-9]|0[0]|10)$/.test(this.state.helpRating)){
            Actions.Smile({overAllRating: Number(this.props.overAllRating )+ Number(this.state.helpRating)})
      }else {
         Alert.alert('Please Enter on a scale of 1 to 10')
         this.setState({helpRating:''})
      }
   }

    render(){
        return (
            <View style={{height:height,marginTop:height/20}}>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#5856D6'}}>
                     <Text style={{fontSize:height/25,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign  :'center',color:'white',margin:50}}>
                           How Helpful to someone are you being today?
                     </Text>
               </View>
               <View style={{flex:0.2,backgroundColor:'#A5A4F0',alignItems:'center',justifyContent:'center',flexDirection:'row',shadowOffset:{width:1,height:1},shadowColor:'black',shadowRadius:3, shadowOpacity: 0.8}}>
                  <TextInput
                  autoFocus ={true}
                  value={this.state.helpRating}
                  onChangeText = {(text)=>this.setState({helpRating:text})}
                  keyboardType='numeric'
                  maxLength = {2}
                  textAlign='center'
                  style={{height:height/11,width:width/1.5,backgroundColor:'#A5A4F0',fontFamily:'AvenirNext-Bold',fontSize:height/30,color:'white'}}/>
                  <TouchableHighlight
                  onPress ={()=>{this._ratingLogin()}}
                  underlayColor = '#eeeeee'
                  style={{height:height/11,width:width/4,backgroundColor:'#1A17B4',alignItems:'center',justifyContent:'center'}}>
                     <View><Text style={{fontSize:height/30,fontFamily:'AvenirNext-Bold',fontWeight:'700',color:'white'}}> Next </Text></View>
                  </TouchableHighlight>
               </View>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#5856D6'}}>
                  <Text style={{fontSize:height/18,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign:'center',color:'#7A78E3'}}>
                     You don't need a reason to help someone
                  </Text>
               </View>
            </View>
        );
    }
}

module.exports = Help;

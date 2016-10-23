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

class Happy extends Component {

   constructor(props){
      super(props)
      this.state ={
         happyRating:''
      }
   }

   _ratingLogin(){
      if(/^(?:[1-9]|0[0]|10)$/.test(this.state.happyRating)){
            Actions.Help({overAllRating: Number(this.props.overAllRating )+ Number(this.state.happyRating)})
      }else {
         Alert.alert('Please Enter on a scale of 1 to 10')
         this.setState({happyRating:''})
      }
   }

    render(){
        return (
            <View style={{height:height,marginTop:height/20}}>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#4CD964'}}>
                     <Text style={{fontSize:height/25,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign  :'center',color:'white'}}>
                           How Happy are you today?
                     </Text>
               </View>
               <View style={{flex:0.2,backgroundColor:'#A4F3B2',alignItems:'center',justifyContent:'center',flexDirection:'row',shadowOffset:{width:1,height:1},shadowColor:'black',shadowRadius:3, shadowOpacity: 0.8}}>
                  <TextInput
                  autoFocus ={true}
                  value={this.state.happyRating}
                  onChangeText = {(text)=>this.setState({happyRating:text})}
                  keyboardType='numeric'
                  maxLength = {2}
                  textAlign='center'
                  style={{height:height/11,width:width/1.5,backgroundColor:'#A4F3B2',fontFamily:'AvenirNext-Bold',fontSize:height/30,color:'white'}}/>
                  <TouchableHighlight
                  onPress ={()=>{this._ratingLogin()}}
                  underlayColor = '#eeeeee'
                  style={{height:height/11,width:width/4,backgroundColor:'#04BF25',alignItems:'center',justifyContent:'center'}}>
                     <View><Text style={{fontSize:height/30,fontFamily:'AvenirNext-Bold',fontWeight:'700',color:'white'}}> Next </Text></View>
                  </TouchableHighlight>
               </View>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#4CD964'}}>
                  <Text style={{fontSize:height/18,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign:'center',color:'#72E686'}}>
                     For every minute of anger you lose 60 seconds of happiness
                  </Text>
               </View>
            </View>
        );
    }
}

module.exports = Happy;

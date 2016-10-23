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

class Fit extends Component {
      constructor(props){
      super(props)
      this.state ={
         fitRating:''
      }
   }

   _ratingLogin(){
      if(/^(?:[1-9]|0[0]|10)$/.test(this.state.fitRating)){
            Actions.Results({overAllRating: Number(this.props.overAllRating )+ Number(this.state.fitRating)})
      }else {
         Alert.alert('Please Enter on a scale of 1 to 10')
         this.setState({fitRating:''})
      }
   }
    render(){
        return (
            <View style={{height:height,marginTop:height/20}}>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#FF5B37'}}>
                     <Text style={{fontSize:height/25,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign  :'center',color:'white'}}>
                           How fit are you today?
                     </Text>
               </View>
               <View style={{flex:0.2,backgroundColor:'#FF9B86',alignItems:'center',justifyContent:'center',flexDirection:'row',shadowOffset:{width:1,height:1},shadowColor:'black',shadowRadius:3, shadowOpacity: 0.8}}>
                  <TextInput
                  value={this.state.fitRating}
                  onChangeText = {(text)=>this.setState({fitRating:text})}
                  keyboardType='numeric'
                  maxLength = {2}
                  textAlign='center'
                  style={{height:height/11,width:width/1.5,backgroundColor:'#FF9B86',fontFamily:'AvenirNext-Bold',fontSize:height/30,color:'white'}}/>
                  <TouchableHighlight
                  onPress ={()=>{this._ratingLogin()}}
                  underlayColor = '#eeeeee'
                  style={{height:height/11,width:width/4,backgroundColor:'#EB2F08',alignItems:'center',justifyContent:'center'}}>
                     <View><Text style={{fontSize:height/30,fontFamily:'AvenirNext-Bold',fontWeight:'700',color:'white'}}> Next </Text></View>
                  </TouchableHighlight>
               </View>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#FF5B37'}}>
                  <Text style={{fontSize:height/18,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign:'center',color:'#FF9B86'}}>
                     Nothing tastes as good as being fit feels
                  </Text>
               </View>
            </View>
        );
    }
}

module.exports = Fit;

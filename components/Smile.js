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

class Smile extends Component {
   constructor(props){
      super(props)
      this.state ={
         smileRating:''
      }
   }

   _ratingLogin(){
      if(/^(?:[1-9]|0[0]|10)$/.test(this.state.smileRating)){
            Actions.Fit({overAllRating: Number(this.props.overAllRating )+ Number(this.state.smileRating)})
      }else {
         Alert.alert('Please Enter on a scale of 1 to 10')
         this.setState({smileRating:''})
      }
   }

    render(){
        return (
            <View style={{height:height,marginTop:height/20}}>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#FFCC00'}}>
                     <Text style={{fontSize:height/25,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign  :'center',color:'white',margin:50}}>
                           Have you made someone smile today ?
                     </Text>
               </View>
               <View style={{flex:0.2,backgroundColor:'#FFE064',alignItems:'center',justifyContent:'center',flexDirection:'row',shadowOffset:{width:1,height:1},shadowColor:'black',shadowRadius:3, shadowOpacity: 0.8}}>
                  <TextInput
                  value={this.state.smileRating}
                  onChangeText = {(text)=>this.setState({smileRating:text})}
                  keyboardType='numeric'
                  maxLength = {2}
                  textAlign='center'
                  style={{height:height/11,width:width/1.5,backgroundColor:'#FFE064',fontFamily:'AvenirNext-Bold',fontSize:height/30,color:'white'}}/>
                  <TouchableHighlight
                  onPress ={()=>{this._ratingLogin()}}
                  underlayColor = '#eeeeee'
                  style={{height:height/11,width:width/4,backgroundColor:'#9B7D00',alignItems:'center',justifyContent:'center'}}>
                     <View><Text style={{fontSize:height/30,fontFamily:'AvenirNext-Bold',fontWeight:'700',color:'white'}}> Next </Text></View>
                  </TouchableHighlight>
               </View>
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#FFCC00'}}>
                  <Text style={{fontSize:height/20,fontFamily:'AvenirNext-Bold',fontWeight:'500',textAlign:'center',color:'#FFE064',margin:10}}>
                  Making one person smile can change the world – maybe not the whole world, but their world
                  </Text>
               </View>
            </View>
        );
    }
}

module.exports = Smile;

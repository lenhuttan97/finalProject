import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default function workScreen (props) {
    const {state} = props.navigation;
    const uri =state.params.uri;
    console.log(uri)
    return (
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:"yellow",flex:1}}>
        <Text > workScreen </Text>
      </View>
    );
  
}

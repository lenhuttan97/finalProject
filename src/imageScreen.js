import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default function imageScreen (props) {
  const {state} = props.navigation;
  const uri =state.params.uri;
    return (
      <View style={styles.container}>
        <Image source={{uri}} style={styles.images}/>  
      </View>
      
    );
  }

  imageScreen.navigationOptions = {
    title: "YourImage"
  };

  const { width: winWidth, height: winHeight } = Dimensions.get('window');

const styles=StyleSheet.create ({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  images : {
    flex:1,
    width:winWidth,
    height:550,
  }
  
})
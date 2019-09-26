import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default function imageScreen (props) {
  const {state} = props.navigation;
  const uri =state.params.uri;
    return (
      <ImageZoom cropWidth={winWidth}
      cropHeight={winHeight}
      imageWidth={winWidth}
      imageHeight={winHeight}>
         <Image source={{uri}} style={styles.images}/>  
    </ImageZoom>
      // <View style={styles.container}>
      //   <Image source={{uri}} style={styles.images}/>  
      // </View>
      
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
    width:winWidth,
    height:winHeight-100,
  }
  
})
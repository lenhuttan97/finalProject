import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './styles'

const { width: winWidth, height: winHeight } = Dimensions.get('window');
export default function ScanPreview () {
    return (
      <View style={{ height:440,width:330,top:50,left:25, position:"absolute", zIndex:2}}>
        <Image style={[styles.scanPreviewImage,{top:0,left:0}]} source = {require('../image/trentrai.png')}/>
        <Image style={[styles.scanPreviewImage,{top:0,left:300}]} source = {require('../image/trenphai.png')}/>
        <Image style={[styles.scanPreviewImage,{top:420,left:0}]} source = {require('../image/duoitrai.png')}/>
        <Image style={[styles.scanPreviewImage,{top:420,left:295}]} source = {require('../image/duoiphai.png')}/>
      </View>
    );
  
}

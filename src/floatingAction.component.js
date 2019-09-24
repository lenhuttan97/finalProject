import React from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, SimpleLineIcons , Feather} from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import styles from './styles';

export default FloatingActionView = (prop) => (
  <View style={styles.floatingActionBox}>
  <Animated.View style={[styles.floatingActionItem, { opacity: prop.fadeValue2, bottom: 210}]}>
  <TouchableOpacity onPress={() => prop.showAction()} ><AntDesign  name="folderopen" size={25} color='white'/></TouchableOpacity>
  </Animated.View>
  <Animated.View style={[styles.floatingActionItem, { opacity: prop.fadeValue1, bottom: 145}]}>
  <TouchableOpacity onPress={() => {prop.navigation.navigate('GalleryImportPage'); prop.hideAction()}} ><Ionicons name="md-images" size={25} color='white'/></TouchableOpacity>
  </Animated.View>
  <Animated.View style={[styles.floatingActionItem, { opacity: prop.fadeValue, bottom: 80}]}>
  <TouchableOpacity onPress={() => {prop.navigation.navigate('CameraS'); prop.hideAction() }}><SimpleLineIcons name="camera" size={25} color='white'/></TouchableOpacity>
  </Animated.View>
  {prop.floatingAction ? (<TouchableOpacity onPress={() => prop.showAction()} 
  style={[styles.floatingActionItem, {bottom: 15}]}>
  <Feather name="plus" size={30} color='white'/></TouchableOpacity>):(
    <TouchableOpacity onPress={() => prop.hideAction()} 
     style={[styles.floatingActionItem, {bottom: 15, backgroundColor:'red'}]}>
     <Feather name="x-circle" size={30} color='white'/></TouchableOpacity>
  )}
</View>
  );
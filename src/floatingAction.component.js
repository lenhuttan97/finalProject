import React from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, SimpleLineIcons , Feather} from '@expo/vector-icons';

import styles from './styles';

export default FloatingActionView = (props) => (
  <View style={styles.floatingActionBox}>
  <Animated.View style={[styles.floatingActionItem, { opacity: props.fadeValue2, bottom: 210}]}>
  <TouchableOpacity onPress={() => props.showAction()} ><AntDesign  name="folderopen" size={25} color='white'/></TouchableOpacity>
  </Animated.View>
  <Animated.View style={[styles.floatingActionItem, { opacity: props.fadeValue1, bottom: 145}]}>
  <TouchableOpacity onPress={() => props.showAction()} ><Ionicons name="md-images" size={25} color='white'/></TouchableOpacity>
  </Animated.View>
  <Animated.View style={[styles.floatingActionItem, { opacity: props.fadeValue, bottom: 80}]}>
  <TouchableOpacity onPress={() => props.navigateCam()} ><SimpleLineIcons name="camera" size={25} color='white'/></TouchableOpacity>
  </Animated.View>
  {props.floatingAction ? (<TouchableOpacity onPress={() => props.showAction()} 
  style={[styles.floatingActionItem, {bottom: 15}]}>
  <Feather name="plus" size={30} color='white'/></TouchableOpacity>):(
    <TouchableOpacity onPress={() => props.hideAction()} 
     style={[styles.floatingActionItem, {bottom: 15, backgroundColor:'red'}]}>
     <Feather name="x-circle" size={30} color='white'/></TouchableOpacity>
  )}
</View>
  );
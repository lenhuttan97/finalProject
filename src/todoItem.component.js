import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Entypo, AntDesign } from '@expo/vector-icons';

import styles from './styles';

export default TodoItem = (props) => (
    <View style={[styles.box, styles.right]}>
      {props.switchView && <TouchableOpacity onPress={() => props.switchViewFunction()} style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
        <Entypo name="grid" size={25} />
        <Text>Grid View</Text>
      </TouchableOpacity>}
      {!props.switchView && <TouchableOpacity onPress={() => props.switchViewFunction()} style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
        <AntDesign name="bars" size={25} />
        <Text>List View</Text>
      </TouchableOpacity>}
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
        <AntDesign name="setting" size={25} />
        <Text>Setting</Text>
      </TouchableOpacity>
    </View>
  );
import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';


import styles from './styles';

export default ViewDataSource = (props) => (
    <View>
    {props.GridColumnsValue ? (<FlatList
      data={props.dataSource}
      renderItem={({ item }) =>
        <View style={{ flex: 1, flexDirection: 'row', margin: 1, borderWidth: 1, borderColor: '#0c754991' }}>
          <Image style={styles.ImageComponentStyleRow} source={{ uri: item.flower_image_url }} />
          <TouchableOpacity onPress={() => { props.navigation.navigate('ResultPage', {item: item})}}
            style={{ backgroundColor: '#e8f8ee', flex: 1, justifyContent: 'space-around', }}>
            <Text style={styles.ItemNameTextStyleRow} numberOfLines={2} >{item.flower_name}</Text>
            <Text style={styles.ItemDateTextStyleRow}>18-9-2019 11:15PM</Text>
          </TouchableOpacity>
        </View>
      }
      numColumns='1'
      key='ONE COLUMN'
      keyExtractor={(item, index) => item.id}
    />) : (<FlatList
      data={props.dataSource}
      renderItem={({ item }) =>
        <View style={{ flex: 1, flexDirection: 'column', margin: 1, borderWidth: 1, borderColor: '#0c754991' }}>
          <Image style={styles.ImageComponentStyle} source={{ uri: item.flower_image_url }} />
          {/* <TouchableOpacity onPress={props.GetGridViewItem.bind(this, item.flower_name)} */}
          <TouchableOpacity onPress={() => { props.navigation.navigate('ResultPage', {item: item})}}
            style={{ backgroundColor: '#e8f8ee', flex: 1 }} >
            <Text style={styles.ItemTextStyle} numberOfLines={2}>{item.flower_name}</Text>
          </TouchableOpacity>
        </View>
      }
      numColumns='2'
      key='TWO COLUMN'
      keyExtractor={(item, index) => item.id}
    />)}
  </View>
  );
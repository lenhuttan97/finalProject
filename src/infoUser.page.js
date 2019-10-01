import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { AntDesign, Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default  InforUser = props => {
  //  const userName = props.navigation.state.params.username;
        return (
            <View style={[styles.container]}>
    
                <View style={{ flex: 0.35, justifyContent: "center", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
                    <View style={{ height: 120, width: 120, borderRadius: 60, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "green" }}>
                        <Image source={require('../image/userTest.png')} style={{ height: 116, width: 116, borderRadius: 58 }} />
                    </View>
                    <View style={{ marginTop: 5 }}>
                        {/* <Text style={{ color: '#043508', fontSize: 25 }}>User Name</Text> */}
                        <Text style={{ color: '#043508', fontSize: 25 }}>{props.username}</Text>
                    </View>
                </View>
                <View style={{ flex: 0.65 }}>
                    <View style={{ flex: 0.5 }}>
    
                        <TouchableOpacity style={{
                            flexDirection: 'row', justifyContent: "space-around", alignItems: "center", height: 50,
                            borderTopWidth: 1, borderTopColor: "#ccc", borderBottomWidth: 1, borderBottomColor: "#ccc"
                        }}>
                            <Entypo name='home' size={25} />
                            <Text style={{ width: 200, fontSize: 20 }}> Home </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row', justifyContent: "space-around", alignItems: "center", height: 50,
                            borderTopWidth: 1, borderTopColor: "#ccc", borderBottomWidth: 1, borderBottomColor: "#ccc"
                        }}>
                            <MaterialCommunityIcons name='face-profile' size={25} />
                            <Text style={{ width: 200, fontSize: 20 }}> ViewProfile </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row', justifyContent: "space-around", alignItems: "center", height: 50,
                            borderTopWidth: 1, borderTopColor: "#ccc", borderBottomWidth: 1, borderBottomColor: "#ccc"
                        }}>
                            <AntDesign name="setting" size={25} />
                            <Text style={{ width: 200, fontSize: 20 }}> Setting </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.5, justifyContent:'flex-end' }}>
                        <TouchableOpacity style={{
                            flexDirection: 'row', justifyContent: "space-around", alignItems: "center", height: 50,
                            borderTopWidth: 1, borderTopColor: "#ccc", borderBottomWidth: 1, borderBottomColor: "#ccc"
                        }}>
                            <Ionicons name='md-key' size={25} />
                            <Text style={{ width: 200, fontSize: 20 }}> Change Pass </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row', justifyContent: "space-around", alignItems: "center", height: 50,
                            borderTopWidth: 1, borderTopColor: "#ccc", borderBottomWidth: 1, borderBottomColor: "#ccc"
                        }}>
                            <AntDesign name='logout' size={25} />
                            <Text style={{ width: 200, fontSize: 20 }}> Logout </Text>
                        </TouchableOpacity>
                    </View>
                </View>
    
            </View>
    
        );
}

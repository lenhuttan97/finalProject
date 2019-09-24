import React from 'react';
import { Button, Image, View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styles1 from './styles';

const ResultPage = props => {
    const item = props.navigation.state.params.item;
    return (
        <View style={{ flex: 1, backgroundColor: '#e3e3e8' }}>
            <View style={{ flex: 0.15, alignItems: 'flex-end', }}>
                <Image source={require('../image/result/maps-and-flags.png')} style={{width: 50, height: 50, margin: 10}}/>
            </View>
            <ScrollView style={{ flex: 0.85 }}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                        <FontAwesome name="id-card-o" size={30} color='#043508' />
                        <Text style={styles1.ItemNameTextStyleRow}>Mặt trước:</Text>
                    </View>

                    <View style={styles.container}>
                        <Image source={{ uri: item.flower_image_url }}
                            style={{
                                height: 250,
                                width: 350,
                                resizeMode: 'contain',
                            }} />
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                        <FontAwesome name="id-card-o" size={30} color='#043508' />
                        <Text style={styles1.ItemNameTextStyleRow}>Mặt sau:</Text>
                    </View>
                    <View style={styles.container}>
                        <Image source={{ uri: item.flower_image_url }}
                            style={{
                                height: 250,
                                width: 350,
                                resizeMode: 'contain',
                            }} />
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                        <MaterialIcons name="person" size={30} color='#043508' />
                        <Text style={styles1.ItemNameTextStyleRow}>Ảnh chân dung:</Text>
                    </View>
                    <View style={styles.container}>

                        <Image source={{ uri: item.flower_image_url }}
                            style={{
                                height: 250,
                                width: 350,
                                resizeMode: 'contain',
                            }} />
                    </View>
                </View>
                {/* <TouchableOpacity onPress={this._submitImage} style={{ width: 300, height: 100 }} > */}

            </ScrollView>
        </View>
    );
}

// ResultPage.navigationOptions = {
//     headerStyle: {
//         backgroundColor: '#0b8246',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//         fontWeight: 'bold',
//     },
//     title: 'GalleryImportPage',
// };


// export default ResultPage;

const AppNavigator = createStackNavigator(
    {
        ResultPage: {
            screen: ResultPage,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#0b8246',

                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 28,
                    paddingLeft: 15
                },
                title: 'Kết quả',

            }
        },
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerVisible: true,
        }
    }
);

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerContainer: {
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 30
    },
    importImage: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: '#ccc',
        backgroundColor: '#eaebed',
        alignContent: 'flex-start',
        height: 100,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
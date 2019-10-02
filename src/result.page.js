import React from 'react';
import { Button, Image, View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styles1 from './styles';

class ResultPage  extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            item: "",
        };
        this.width = new Animated.Value(0);
      }


    componentWillMount = () => {
        const { navigation } = this.props;
        var Param = navigation.getParam('item', "no data");
        this.setState({
            item: Param,
        });

    }

    render(){
        const item = this.state.item;
        let barWidth = {
            width: this.width
          };
    return (
        <View style={{ flex: 1, backgroundColor: '#e3e3e8' }}>
            <View style={{ flex: 0.15, }}>
                {/*   cái  này là dùng cái kết quả tổng để check
                    <View style={{flex: 1, justifyContent:'flex-end'}}>
                    <Text style={{ backgroundColor: 'green', color: '#fff', fontSize: 17, height: 30, }}> CCCD đã được xác thực hợp lệ
                    </Text>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}>
                        <Image source={require('../image/result/maps-and-flags.png')} style={{ width: 60, height: 60, margin: 10 }} />
                    </View>
                </View>
                */}
                <View style={{flex: 1, justifyContent:'flex-end'}}>
                    <Text style={{ backgroundColor: 'red', color: '#fff', fontSize: 17, height: 30, }}> Vui lòng kiểm tra lại xác thực CCCD
                    </Text>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}>
                        <Image source={require('../image/result/cancel.png')} style={{ width: 60, height: 60, margin: 10 }} />
                    </View>
                </View>
            </View>
            <ScrollView style={{ flex: 0.85 }}>
            <View style={{ flex: 0.4, backgroundColor:'blue' }}>
            {/* dùng làm thanh chạy phần trắm 
            https://blog.pusher.com/animation-react-native-part-1/
            https://github.com/anchetaWern/RNRealworldAnimations/blob/master/src/components/AnimatedBar.js */}
            </View>
            <View style={{ flex: 0.6,  }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                    <MaterialIcons name="person" size={30} color='#043508' />
                    <Text style={styles1.ItemNameTextStyleRow}>Ảnh kết quả:</Text>
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
            </ScrollView>
        </View>
    );
}
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
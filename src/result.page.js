import React from 'react';
import {Animated, Button, Image, View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Foundation, MaterialIcons, AntDesign, EvilIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styles1 from './styles';
import TextTicker from 'react-native-text-ticker';
import AnimatedBar from './AminationBar';

class ResultPage  extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            message:"",
            template:"1000",
            ocr:"1000",
            facial:"1000"

        };
        this.width = new Animated.Value(0);
      }


    componentWillMount = () => {
        const { navigation } = this.props;
        var Param = navigation.getParam('data', "no data");
        console.log(Param)
        this.setState({
            item: Param.image_result,
            message:Param.message,
            template:Param.message_template_checking,
            ocr: Param.message_OCR,
            facial: Param.message_facial

        });

    }

    render(){
        const {item,message,template, ocr, facial} = this.state;
        let barWidth = {
            width: this.width
          };
    return (
        <View style={{ flex: 1, backgroundColor: '#e3e3e8' }}>
             <View style={{height:24,backgroundColor:'#60c46f'}}/>
             <View style={{height:70,backgroundColor:'green',justifyContent:"center"}}>
                 <Text style={{left:70,color:"white",fontSize:25,fontWeight:"bold"}}>Kết quả</Text>
             </View>
             <View  style={{position:"absolute",zIndex:10,left:10, backgroundColor:"white", top:33,height:50, width:50, borderRadius:25, justifyContent:"center", alignItems:"center"}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("main")}><AntDesign name="arrowleft" size={40} /></TouchableOpacity>
            </View>
            
            <View style={{ flex: 0.15, }}>
                  {/* cái  này là dùng cái kết quả tổng để check */}
                   {message=="Successful" ? 
                    <View style={{flex: 1, justifyContent:'flex-end'}}>
                    {/* <Text style={{ backgroundColor: 'green', color: '#fff', fontSize: 17, height: 30, }}> CCCD đã được xác thực hợp lệ </Text>*/}
                    <View style={{height:30, backgroundColor: "green", justifyContent:"center"}}>
                        <TextTicker
                        style={{ fontSize: 18, fontStyle:"italic", color:"white", fontWeight:"100" }}
                        duration={30000}
                        loop
                        bounce
                        repeatSpacer={500}
                        marqueeDelay={5000}
                        >
                        CCCD đã được xác thực hợp lệ                                       OCR: {ocr}       Facial: {facial}       Template_Checking: {template}                                        .
                        </TextTicker>
                    </View>
                    
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}>
                        <Image source={require('../image/result/maps-and-flags.png')} style={{ width: 60, height: 60, margin: 10 }} />
                    </View>
                </View> :
               
                 <View style={{flex: 1, justifyContent:'flex-end'}}>
                    {/* <Text style={{ backgroundColor: 'red', color: '#fff', fontSize: 17, height: 30, }}> Vui lòng kiểm tra lại xác thực CCCD
                    </Text> */}
                    <View style={{height:30, backgroundColor: "red", justifyContent:"center"}}>
                        <TextTicker
                        style={{ fontSize: 18, fontStyle:"italic", color:"white", fontWeight:"100" }}
                        duration={30000}
                        loop
                        bounce
                        repeatSpacer={500}
                        marqueeDelay={5000}
                        >
                        Vui lòng kiểm tra lại xác thực CCCD                               OCR: {ocr}      Facial: {facial}         Template_Checking: {template}
                        </TextTicker>
                    </View>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}>
                        <Image source={require('../image/result/cancel.png')} style={{ width: 60, height: 60, margin: 10 }} />
                    </View>
                </View> }
            </View>
            <View style={{ flex: 0.85 }}>
           {/*  <View style={{ flex: 0.4, backgroundColor:'blue' }}>
            dùng làm thanh chạy phần trắm 
            https://blog.pusher.com/animation-react-native-part-1/
            https://github.com/anchetaWern/RNRealworldAnimations/blob/master/src/components/AnimatedBar.js 
            </View>
            <View style={{ flex: 0.6,  }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                    <MaterialIcons name="person" size={30} color='#043508' />
                    <Text style={styles1.ItemNameTextStyleRow}>Ảnh kết quả:</Text>
                </View>
                <View style={styles.container}>

                    <Image source={{ uri: item}}
                        style={{
                            height: 250,
                            width: 350,
                            resizeMode: 'contain',
                        }} />
                </View>
            </View>*/}
            <View style={{
                        flex: 0.3,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        padding: 5
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                            <Foundation name="results" size={30} color='#043508' />
                            <Text style={styles1.ItemNameTextStyleRow}>Các kết quả:</Text>
                        </View>
                        <View style={styles.statusRow}>
                            <View style={styles.statusLabel}>
                                <Text style={styles.statusLabelText}>kiểm tra OCR</Text>
                            </View>
                            <View style={styles.statusBar}>
                                {(ocr=="True") ? (<EvilIcons name='check' size={30} color='green' />) :
                                (<EvilIcons name='close-o' size={30} color='red' />)}
                            </View>
                        </View>
                        <View style={styles.statusRow}>
                            <View style={styles.statusLabel}>
                                <Text style={styles.statusLabelText}>kiểm tra Template</Text>
                            </View>
                            <View style={styles.statusBar}>
                                {(template=="True") ? (<EvilIcons name='check' size={30} color='green' />) :
                                (<EvilIcons name='close-o' size={30} color='red' />)}
                            </View>
                        </View>

                        <View style={styles.statusRow}>
                            <View style={styles.statusLabel}>
                                <Text style={styles.statusLabelText}>kiểm tra Facial</Text>
                            </View>
                            <View style={styles.statusBar}>
                                {/* <AnimatedBar index={facial} /> */}
                                {(facial=="True") ? (<EvilIcons name='check' size={30} color='green' />) :
                                (<EvilIcons name='close-o' size={30} color='red' />)}
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 0.7, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                            <MaterialIcons name="person" size={30} color='#043508' />
                            <Text style={styles1.ItemNameTextStyleRow}>Ảnh kết quả:</Text>
                        </View>
                        <View style={styles.container}>

                        <Image source={{ uri: item}}
                                style={{
                                    height: 250,
                                    width: 350,
                                    resizeMode: 'contain',
                                }} />
                        </View>
                    </View>
            </View>
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
                header:null,
                headerVisible: false,
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
    },
    statusRow: {
        flex: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 5,
        paddingLeft: 10


    },
    statusLabel: {
        flex: 4,
        alignSelf: "flex-end"
    },
    statusLabelText: {
        fontWeight: "bold",
        color: "#404040"
    },
    statusBar: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
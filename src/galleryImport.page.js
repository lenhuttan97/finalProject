import React from 'react';
import { ActivityIndicator, Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    MaterialCommunityIcons, FontAwesome, MaterialIcons
} from '@expo/vector-icons';
import ResultPage from './result.page';
import * as ImagePicker from 'expo-image-picker';

import styles1 from './styles';
class GalleryImportPage extends React.Component {
    //   const { id, status, body } = props.navigation.state.params.updatedTodo;
    state = {
        image1: {
            uri: null,
            base64: null,
        },
        image2: {
            uri: null,
            base64: null,
        },
        image3: {
            uri: null,
            base64: null,
        },
        send: false
    };
    componentWillMount = () => {
        const { navigation } = this.props;
        var Param = navigation.getParam('dataSubmit', "no data");
        this.setState({
            image1: { uri: Param[2].uri, base64: Param[2].base },
            image2: { uri: Param[1].uri, base64: Param[1].base },
            image3: { uri: Param[0].uri, base64: Param[0].base }
        })

    }
    render() {


        let { image1, image2, image3, send } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: '#e3e3e8' }}>
                {send && <View style={{
                        flex: 1,
                        zIndex: 1,
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#89f5c39c",
                        left: 0,right: 0,bottom: 0,top:0
                        
                    }}>
                        <ActivityIndicator size="large" color="green" />
                    </View>
                 }
                        <View style={{ flex: 1, backgroundColor: '#e3e3e8' }}>
                            <ScrollView style={{ flex: 0.85 }}>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                                        <FontAwesome name="id-card-o" size={30} color='#043508' />
                                        <Text style={styles1.ItemNameTextStyleRow}>Mặt trước:</Text>
                                    </View>

                                    <View style={styles.container}>
                                        {!image1.uri ? (<TouchableOpacity style={styles.importImage} onPress={this._pickImage1}>
                                            <MaterialCommunityIcons name="image-plus" size={45} color='#ccc' />
                                        </TouchableOpacity>) : (
                                                <Image source={{ uri: image1.uri }}
                                                    style={{
                                                        height: 300,
                                                        width: 350,
                                                        resizeMode: 'contain',
                                                    }} />
                                            )
                                        }
                                    </View>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                                        <FontAwesome name="id-card-o" size={30} color='#043508' />
                                        <Text style={styles1.ItemNameTextStyleRow}>Mặt sau:</Text>
                                    </View>
                                    <View style={styles.container}>
                                        {!image2.uri ? (
                                            <TouchableOpacity style={styles.importImage} onPress={this._pickImage2}>
                                                <MaterialCommunityIcons name="image-plus" size={45} color='#ccc' />
                                            </TouchableOpacity>
                                        ) : (
                                                <Image source={{ uri: image2.uri }}
                                                    style={{
                                                        height: 300,
                                                        width: 350,
                                                        resizeMode: 'contain',
                                                    }} />
                                            )
                                        }
                                    </View>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                                        <MaterialIcons name="person" size={30} color='#043508' />
                                        <Text style={styles1.ItemNameTextStyleRow}>Ảnh chân dung:</Text>
                                    </View>
                                    <View style={styles.container}>
                                        {!image3.uri ? (
                                            <View style={{ flex: 1, heigh: "150", flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                                <View style={{ width: 150, height: 150, justifyContent: "flex-start", alignItems: "flex-end" }}>
                                                    <TouchableOpacity style={[styles.importImage, { width: 150, height: 150, borderColor: '#444', borderWidth: 3 }]} onPress={this._pickImage3}>
                                                        <MaterialIcons name="person-outline" size={80} color='#444' />
                                                    </TouchableOpacity>
                                                </View>
                                                {/* <View style={{ width: 150, height: 150, justifyContent: "flex-end" }}>
                                                    <TouchableOpacity style={[styles.importImage1, { width: 50, height: 50, borderColor: '#444', borderWidth: 3 }]} onPress={this._pickImage2}>
                                                        <Image source={require("../image/camera.png")} style={{ width: 30, height: 30 }}></Image>
                                                    </TouchableOpacity>
                                                </View> */}
                                            </View>
                                        ) : (
                                                <Image source={{ uri: image3.uri }}
                                                    style={{
                                                        height: 300,
                                                        width: 350,
                                                        resizeMode: 'contain',
                                                    }} />
                                            )
                                        }
                                    </View>
                                </View>
                                {/* <TouchableOpacity onPress={this._submitImage} style={{ width: 300, height: 100 }} > */}

                            </ScrollView>
                            <View style={[styles.container, { flex: 0.15, borderTopWidth: 1, borderTopColor: '#e8eaed' }]}>

                                <TouchableOpacity onPress={this._submitImage} style={{
                                    width: 200, height: 50, borderRadius: 10, backgroundColor: '#71bf83', justifyContent: 'center',
                                    alignItems: 'center', flexDirection: 'row',
                                }} >
                                    <MaterialCommunityIcons name="upload-multiple" size={35} color="white" />
                                    <Text style={[styles1.ItemNameTextStyleRow, { color: 'white' }]} >submit</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                 
            </View>
        );
    }
    _pickImage1 = async () => {
        let image1Data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
        });
        if (!image1Data.cancelled) {
            this.setState({ image1: { uri: image1Data.uri, base64: image1Data.base64 } });
        }
    };
    _pickImage2 = async () => {
        let image2Data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Image,
            base64: true,
            allowsEditing: true,
        });
        if (!image2Data.cancelled) {
            this.setState({ image2: { uri: image2Data.uri, base64: image2Data.base64 } });
        }
    };
    _pickImage3 = async () => {
        let image2Data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Image,
            base64: true,
            allowsEditing: true,
        });
        if (!image2Data.cancelled) {
            this.setState({ image3: { uri: image2Data.uri, base64: image2Data.base64 } });
        }
    };
    _submitImage = async () => {
        var dataPost = {};
        dataPost.image1 = this.state.image1.base64;
        dataPost.image2 = this.state.image2.base64;
        dataPost.image3 = this.state.image3.base64;
        dataPost.id = 1;

        this.setState({ send: true }, this.up(dataPost));
        //   dataPost.image3 = this.state.image3;
        //    console.log(dataPost);


    };

    up(dataPost) {
        fetch('http://35.194.211.64:8001/json-image-post/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
            ,
             body: JSON.stringify(dataPost),
         }).then((res) =>  res.json())
        .then((res) => {
            console.log(res)
             //this.props.navigation.navigate('ResultPage', { 'item': res._bodyInit }); 
             if(res.message=="Successful"){
             this.setState({send: false},() =>{ 
                 alert("OCR :"+ res.message_OCR + "\n"+"Facial :"+res.message_facial + "\n"+"template_checking :"+res.message_template_checking)
             })}
             else {
                this.setState({send: false},() =>{ 
                    alert("Xin hãy chọn ảnh khác!!!") 
             })
            }
            })
            .catch(error => {
                this.setState({send: false},() =>{ 
                    alert("Server đang bảo trì. Xin vui lòng thử lại sau !!!") 
             })
            }
                
            );

    }
    // uploadImage = () => {
    //     var storageRef = firebase.storage().ref();
    //     const ext = this.state.image1.uri.split('.').pop(); // Extract image extension
    //     const response = this.state.image1.uri;
    //     const blob = response.blob();
    //     const filename = ext; // Generate unique name
    //     var metadata = {
    //         contentType: 'image/jpeg'
    //       };

    //       // Upload file and metadata to the object 'images/mountains.jpg'
    //       var uploadTask = storageRef.child('images/' + filename).put(blob, metadata);

    //       // Listen for state changes, errors, and completion of the upload.
    //       uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    //         function(snapshot) {
    //           // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //           var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //           console.log('Upload is ' + progress + '% done');
    //           switch (snapshot.state) {
    //             case firebase.storage.TaskState.PAUSED: // or 'paused'
    //               console.log('Upload is paused');
    //               break;
    //             case firebase.storage.TaskState.RUNNING: // or 'running'
    //               console.log('Upload is running');
    //               break;
    //           }
    //         }, function(error) {

    //         // A full list of error codes is available at
    //         // https://firebase.google.com/docs/storage/web/handle-errors
    //         switch (error.code) {
    //           case 'storage/unauthorized':
    //             // User doesn't have permission to access the object
    //             break;

    //           case 'storage/canceled':
    //             // User canceled the upload
    //             break;

    //           case 'storage/unknown':
    //             // Unknown error occurred, inspect error.serverResponse
    //             break;
    //         }
    //       }, function() {
    //         // Upload completed successfully, now we can get the download URL
    //         uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //           console.log('File available at', downloadURL);
    //         });
    //       });
    //   };
};

const AppNavigator = createStackNavigator(
    {
        GalleryImportPage: {
            screen: GalleryImportPage,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#0b8246',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                title: 'GalleryImportPage',
            }
        },
        ResultPage: {
            screen: ResultPage,
            navigationOptions: {
                header: null,
                headerVisible: false,
            }
        }

    }
);

export default createAppContainer(AppNavigator);

const { width: winWidth, height: winHeight } = Dimensions.get('window');
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
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: '#ccc',
        backgroundColor: '#eaebed',
        alignContent: 'flex-start',
        height: 100,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
    },
    importImage1: {
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: '#ccc',
        backgroundColor: '#eaebed',
        alignContent: 'flex-start',
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 10
    }
});
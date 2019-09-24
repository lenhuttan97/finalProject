import React from 'react';
import { Button, Image, View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    MaterialCommunityIcons, FontAwesome,MaterialIcons
} from '@expo/vector-icons';
import firebase from 'firebase';
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
    };

    render() {
        let { image1, image2 } = this.state;

        return (
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
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30  }}>
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
                        {!image2.uri ? (
                            <TouchableOpacity style={[styles.importImage, {width:150, height: 150, borderColor: '#444', borderWidth: 3}]} onPress={this._pickImage2}>
                                {/* <Image    source={require('./assets/logo-fe-credit.png')} 
                                style={{ resizeMode: 'contain',width:10, height: 10}}
                                /> */}
                                <MaterialIcons name="person-outline" size={80} color='#444'/>
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
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
        });
        if (!image2Data.cancelled) {
            this.setState({ image2: { uri: image2Data.uri, base64: image2Data.base64 } });
        }
    };
    _submitImage = async () => {
        let dataPost = {};
        dataPost.image1 = this.state.image1.base64;
        dataPost.image2 = this.state.image2.base64;
        dataPost.id= 2 ;
        //   dataPost.image3 = this.state.image3;
        //    console.log(dataPost);
        fetch('http://45.124.94.70:8003/json-post/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataPost),
        }).then(res => res.json())
            .catch(error => console.warn(error)
                .then(Response => alert('Loaded!!!!!'))
                );

        
    };

    uploadImage = () => {
        var storageRef = firebase.storage().ref();
        const ext = this.state.image1.uri.split('.').pop(); // Extract image extension
        const response = this.state.image1.uri;
        const blob = response.blob();
        const filename = ext; // Generate unique name
        var metadata = {
            contentType: 'image/jpeg'
          };
          
          // Upload file and metadata to the object 'images/mountains.jpg'
          var uploadTask = storageRef.child('images/' + filename).put(blob, metadata);
          
          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
              }
            }, function(error) {
          
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
          
              case 'storage/canceled':
                // User canceled the upload
                break;
          
              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          }, function() {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL);
            });
          });
      };
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
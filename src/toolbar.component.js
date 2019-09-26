import React from 'react';
import { Camera,  } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;

export default function toolbar ({ 
    capturing = false, 
    cameraType = CameraTypes.back, 
    flashMode = CameraFlashModes.off, 
    setFlashMode, setCameraType, 
    onCaptureIn, onCaptureOut, onLongCapture, onShortCapture, styleToolbar, onOk, onRemove, onRoRight,
    onRoLeft
}) {

    if (styleToolbar) {
    return (
    <Grid style={styles.bottomToolbar}>
        <Row>
            <Col style={styles.alignCenter}>
                <TouchableOpacity onPress={() => setFlashMode( 
                    flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on 
                )}>
                    <Ionicons
                        name={flashMode == CameraFlashModes.on ? "md-flash" : 'md-flash-off'}
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>
            </Col>
            <Col size={2} style={styles.alignCenter}>
                <TouchableWithoutFeedback
                    onPressIn={onCaptureIn}
                    onPressOut={onCaptureOut}
                    onLongPress={onLongCapture}
                    onPress={onShortCapture}>
                    {/* <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                        {capturing && <View style={styles.captureBtnInternal} />}
                    </View> */}
                    <View style = {{heigh:100,width:100, justifyContent:'center', alignItems:'center'}}>
                        <Image source={require('../image/camera-shutter.png')} style={{width:80,height:80, justifyContent:'center', alignItems:'center'}}></Image>
                    </View>
                </TouchableWithoutFeedback>
            </Col>
            <Col style={styles.alignCenter}>
                <TouchableOpacity onPress={() => setCameraType(
                    cameraType === CameraTypes.back ? CameraTypes.front : CameraTypes.back
                )}>
                    <Ionicons
                        name="md-reverse-camera"
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>
            </Col>
        </Row>
    </Grid>
)}
else {
    return(
    <Grid style={styles.bottomToolbar}>
    <Row>
        <Col style={styles.alignCenter}>
            <TouchableOpacity onPress={onRemove}>
                <Image source={require('../image/remove.png')} style={{width:30,height:30,justifyContent:'center',alignItems:'center'}}/>
            </TouchableOpacity>
        </Col>
        <Col style={styles.alignCenter}>
            <TouchableOpacity onPress={() => setFlashMode( 
                flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on 
            )}>
                <Image source={require('../image/crop.png')} style={{width:30,height:30,justifyContent:'center',alignItems:'center'}}/>
            </TouchableOpacity>
        </Col>
        <Col style={styles.alignCenter}>
            <TouchableOpacity onPress={onRoLeft}>
                <Image source={require('../image/rotate.png')} style={{width:30,height:30,justifyContent:'center',alignItems:'center'}}/>
            </TouchableOpacity>
        </Col>
        <Col style={styles.alignCenter}>
            <TouchableOpacity onPress={onRoRight}>
                <Image source={require('../image/rotate_right.png')} style={{width:30,height:30,justifyContent:'center',alignItems:'center'}}/>
            </TouchableOpacity>
        </Col>
        <Col style={styles.alignCenter}>
            <TouchableOpacity onPress={onOk}>
                <Image source={require('../image/ok.png')} style={{width:60,height:60,justifyContent:'center',alignItems:'center'}}/>
            </TouchableOpacity>
        </Col>
    </Row>
</Grid> 
    )
}
};
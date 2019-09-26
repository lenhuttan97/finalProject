import React, { useEffect, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './styles'

export default function Popup (props) {
  const [myOp, setmyOp]= useState(new Animated.Value(1));
  useEffect(() => {
    Animated.timing(myOp, {
      toValue: 0,
      duration: 7000
    }).start();
  }, []);
    if (props.type==="front"){
    return (
      <Animated.View style={[styles.myPopup,{opacity:myOp}]}>
        <Text style={styles.myPopupText}> Mặt trước  </Text>
      </Animated.View>
    );}
    else if(props.type==="back") {
        return (
            <Animated.View style={[styles.myPopup,{opacity:myOp}]}>
              <Text style={styles.myPopupText}> Mặt sau  </Text>
            </Animated.View>
          );
    } 
    else  {
      return (
          <View/>
        );
  } 

}

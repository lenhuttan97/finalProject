import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {View, TouchableOpacity,Text, Alert, ActivityIndicator, Image, TextInput,Dimensions, Animated, Platform} from 'react-native';
import { Ionicons, Entypo, AntDesign} from '@expo/vector-icons';

import TodoItem from './src/todoItem.component';
import styles from './src/styles';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default class mainScreen1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      switchView: true,
      search: true,
      navigation: this.props.navigation,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          {this.state.search ? (
            <View style={styles.itemBanner}>
              <View style={{ flex: 0.15, alignItems: 'center' }}>
                <TouchableOpacity><AntDesign name="bars" size={25} color="green" /></TouchableOpacity>
              </View>
              <View style={{ flex: 0.55 }}>
                <Image
                  source={require('./assets/logo-fe-credit.png')
                  }
                  style={styles.welcomeImage}
                />
              </View>
              <View style={{ flexDirection: 'row', flex: 0.3, justifyContent: 'space-around', }}>
                <TouchableOpacity onPress={() => this.setState({ search: !this.state.search })}><Ionicons name="md-search" size={25} /></TouchableOpacity>
                <TouchableOpacity ><AntDesign name="questioncircleo" size={25} /></TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ loading: !this.state.loading })}><Entypo name="dots-three-vertical" size={25} /></TouchableOpacity>
              </View>
            </View>
          ) : (
              <View style={styles.itemBanner}>
                <View style={{ flex: 0.15, alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => this.setState({ search: !this.state.search })}><AntDesign name="arrowleft" size={30} /></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 0.85, paddingLeft: 10 }}>
                  <TouchableOpacity ><Ionicons name="md-search" size={25} color="green" /></TouchableOpacity>
                  <TextInput
                    placeholder='Search'
                    value={this.state.todoBody}
                    style={styles.todoInput}
                    onChangeText={text => this.setState({ todoBody: text })}
                  />
                </View>
              </View>)}

        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
         <TouchableOpacity onPress={()=>{this.props.navigation.navigate('main')}} style={{width:winWidth*0.8,height:winWidth*0.8,backgroundColor:"#41C482", borderRadius:winWidth*0.4, marginTop:20, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,}}>
            <Image source = {require('./image/firstPage/icon1.png')} 
              style={{width:winWidth*0.8,height:winWidth*0.8, resizeMode:"contain", }}></Image>
         </TouchableOpacity>

         <View style={{flexDirection:"row", width:winWidth-20,marginTop:50,justifyContent:"space-between", padding:10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#41C482',}}>
           <View>
           <TouchableOpacity>
            <Image source={require('./image/firstPage/icon5.png')} style={{width:80,height:50,resizeMode:"contain"}}></Image>
            <Text style={{fontSize:13,fontWeight:"100",color:"grey"}}>Vay tiền mặt</Text>
           </TouchableOpacity>
           </View>
           <View >
           <TouchableOpacity style={{alignItems:"center"}}>
            <Image source={require('./image/firstPage/icon2.png')} style={{width:80,height:50,resizeMode:"contain"}}></Image>
            <Text style={{fontSize:13,fontWeight:"100",color:"grey"}}>Mua điện máy</Text>
            <Text style={{fontSize:13,fontWeight:"100",color:"grey"}}>trả góp</Text>
           </TouchableOpacity>
           </View>
           <View>
           <TouchableOpacity>
            <Image source={require('./image/firstPage/icon3.png')} style={{width:80,height:50,resizeMode:"contain"}}></Image>
            <Text style={{fontSize:13,fontWeight:"100",color:"grey"}}>Thẻ tín dụng</Text>
           </TouchableOpacity>
           </View>
           <View >
           <TouchableOpacity style={{alignItems:"center"}}>
            <Image source={require('./image/firstPage/icon4.png')} style={{width:80,height:50,resizeMode:"contain"}}></Image>
            <Text style={{fontSize:13,fontWeight:"100",color:"grey"}}>Mua xe máy</Text>
            <Text style={{fontSize:13,fontWeight:"100",color:"grey"}}>trả góp</Text>
           </TouchableOpacity>
           </View>
         </View>
         </View>

      </View>
    );
  }
}


import React, { Component } from 'react';
import {ActivityIndicator, Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, Dimensions, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';

const { width: winWidth, height: winHeight } = Dimensions.get('window');
export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '',
       username:'',
       password:"",
      firstTime: 0,
      logged:false,
      isLoading:false,

    };
  }
    
    componentWillMount (){
      firebase.initializeApp({
        apiKey: "AIzaSyDPWIejQM1OzjZ-24Uy6iZq5_PelkUnNdw",
        authDomain: "projectcoder-807cf.firebaseapp.com",
        databaseURL: "https://projectcoder-807cf.firebaseio.com",
        projectId: "projectcoder-807cf",
        storageBucket: "",
        messagingSenderId: "781704842693",
        appId: "1:781704842693:web:307d864be74ddc97a20fac",
      });
      if(!this.state.logged) {
        console.log("tui se navigate")
      }
    }
  onLogin= () => {
    const { email, password } = this.state;
    this.setState({isLoading:true},this.checkLogin);
    
    
  }
  checkLogin= async () =>{
    var database = firebase.database();
    const snapshot = await database.ref('/users').once('value');
    const messages = this.readMessages(snapshot.val());
    const value = messages.filter(data => data.username==this.state.username && data.password == this.state.password )
    if (value.length) {
      this.setState ({logged:true,user:value.username,isLoading:false})
      firebase.database().ref('isLogin/' ).set({
      "name": this.state.username,
      "firsttime": value[0].firsttime,
    });
      data = {"user":this.state.username,"firstTime":value[0].firsttime}
      this.props.navigation.navigate( 'main1',{"data":data});
    }
    else {
      this.setState({logged:false, isLoading:false},alert("Tên đăng nhập hoặc mật khẩu không đúng."))
    }

  }
  readMessages = snapshotData => ( typeof snapshotData === 'object' && Object.values(snapshotData) ) || snapshotData;
  
  render() {
    return (
      <KeyboardAvoidingView
    enabled
    behavior="padding"
    style={styles.container}
  > 
    
        
        <View style={{height:24,width:"100%", backgroundColor:"#3fa65b",position:"absolute",top:0}}/>
        <Image source = {require('./image/logo-fe-credit.png')} style={styles.logo}></Image>
        {!this.state.isLoading ?
        <View style={styles.formlogin}>
        <Text style={styles.loginText}>Please Login </Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder='Tên đăng nhập'
          placeholderTextColor = 'grey'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor = 'grey'
          style={styles.input}
        />
        
     
        <TouchableOpacity
          style={styles.button}
          onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.buttonText}> Login </Text>
       </TouchableOpacity>
       
       </View> :
        <View style={{
                        width:winWidth,
                        height:winHeight,
                        
                        position: "absolute",
                        zIndex: 4,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#89f5c39c",
                        left: 0,
                        
                    }}>
                        <ActivityIndicator size="large" color="green" />
                    </View>
                 }
 
  </KeyboardAvoidingView>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  formlogin:{
    zIndex:1,
    width:winWidth-70,
    height:300, 
    justifyContent:"center", 
    alignItems: 'center',
    backgroundColor:"#d3edda",
    borderRadius:30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10,
    
  },
  loginText:{
    fontSize:30,
    marginBottom:10
  },
  logo: {
    width:160,
    height:30, 
    resizeMode: 'contain',
    position:'absolute',
    top:94,
    left:(winWidth-150)/2
  },
  titleText:{
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
    marginTop:20
  },
  buttonText:{
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: winWidth-100,
    fontSize: 15,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    marginVertical: 10,
    borderRadius:10,
  },
});
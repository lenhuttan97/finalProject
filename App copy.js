// import React from 'react';

// import CameraPage from './src/camera.page';

// export default class App extends React.Component {
//     render() {
//         return (
//             <CameraPage />
//         );
//     };
// };

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CameraPage from './src/camera.page';
import {
  StyleSheet, View, Platform, Text, FlatList, TouchableOpacity, Alert, ActivityIndicator, Image, TextInput, Animated, TouchableWithoutFeedback
} from 'react-native';
import { Ionicons, Entypo, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
const TodoItem = (props) => (
  <View style={[styles.box, styles.right]}>
    {props.switchView && <TouchableOpacity onPress={() => props.switchViewFunction()} style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
      <Entypo name="grid" size={25} />
      <Text>Grid View</Text>
    </TouchableOpacity>}
    {!props.switchView && <TouchableOpacity onPress={() => props.switchViewFunction()} style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
      <AntDesign name="bars" size={25} />
      <Text>List View</Text>
    </TouchableOpacity>}
    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
      <AntDesign name="setting" size={25} />
      <Text>Setting</Text>
    </TouchableOpacity>
  </View>
);
 class mainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      switchView: true,
      search: true,
      GridColumnsValue: true,
      isLoading: true,
      fadeValue: new Animated.Value(0),
    fadeValue1: new Animated.Value(0),
    fadeValue2: new Animated.Value(0),
    }
  }
  _start = () => {
    console.log("start");
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 500
    }).start();
     Animated.timing(this.state.fadeValue1, {
      toValue: 1,
      duration: 1000
    }).start();
    Animated.timing(this.state.fadeValue2, {
      toValue: 1,
      duration: 1500
    }).start();
  };

  componentDidMount() {
    return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ChangeGridValueFunction = () => {
    if (this.state.GridColumnsValue === true) {
      this.setState({
        GridColumnsValue: false,
      })
    }
    else {
      this.setState({
        GridColumnsValue: true,
      })
    }
  }

  GetGridViewItem(item) {
    Alert.alert(item);
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
        {this.state.loading && <TodoItem switchView={this.state.GridColumnsValue} switchViewFunction={this.ChangeGridValueFunction} />}
        {/* <Animated.View style={[styles.tennisBall, this.moveAnimation.getLayout()]}>
    <TouchableWithoutFeedback style={styles.button} onPress={this._moveBall}>
      <Text style={styles.buttonText}>Press</Text>
    </TouchableWithoutFeedback>        
  </Animated.View> */}
        <View style={styles.MainContainer}>
          {this.state.isLoading ? (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" color="green" />
            </View>
          ) : (
              <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) => <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>

                  <Image style={styles.ImageComponentStyle} source={{ uri: item.flower_image_url }} />
                  <TouchableOpacity onPress={this.GetGridViewItem.bind(this, item.flower_name)}><Text style={styles.ItemTextStyle} numberOfLines={1} >{item.flower_name}</Text>
                  </TouchableOpacity>
                </View>
                }
                numColumns={this.state.GridColumnsValue ? 1 : 2}
                key={(this.state.GridColumnsValue) ? 'ONE COLUMN' : 'TWO COLUMN'}
                keyExtractor={(item, index) => item.id}
              />
            )}

          <View style={{
            flex: 1,
            flexDirection: 'column',
            position: 'absolute', bottom: 0,
            right: 0,
          }}>
            <Animated.View style={{ opacity: this.state.fadeValue2,
              width: 50, height: 50, backgroundColor: 'powderblue', position: 'absolute', bottom: 210,
              right: 15, borderRadius: 25
            }} ></Animated.View >
            <Animated.View style={{ opacity: this.state.fadeValue1,
              width: 50, height: 50, backgroundColor: 'powderblue', position: 'absolute', bottom: 145,
              right: 15, borderRadius: 25
            }} />
            <Animated.View style={{ opacity: this.state.fadeValue,
              width: 50, height: 50, backgroundColor: 'skyblue', position: 'absolute', bottom: 80,
              right: 15, borderRadius: 25
            }} />
            {/* <TouchableOpacity onPress={() => this._start()} style={{ */}
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CameraS')} style={{
              width: 60, height: 60, backgroundColor: '#255137', position: 'absolute', bottom: 15,
              right: 15, borderRadius: 30, justifyContent: 'center', alignItems: 'center'
            }} ><SimpleLineIcons name="camera" size={25} color='white'/></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

class cameraScreen extends React.Component {
    render(){
        return(
            <CameraPage />
        )
    }
}

const AppNavigator = createStackNavigator(
    {
      CameraS: cameraScreen,
      main: mainScreen,

    },
    {
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      },
      initialRouteName: 'main',
    },
    
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: (Platform.OS) === 'ios' ? 0 : 25,
    borderTopColor: 'green',
  },
  banner: {
    flex: 0.1,
    borderBottomWidth: 5,
    borderBottomColor: '#b8f0d0',
    justifyContent: 'center',

  },
  welcomeImage: {
    width: 150,
    height: 30,
    resizeMode: 'contain',

  },
  itemBanner: {
    flexDirection: 'row',
  },
  right: {
    position: 'absolute',
    justifyContent: 'space-around',
    top: 40,
    right: 10

  },
  box: {
    width: 150,
    height: 100,
    borderColor: 'black',
    borderWidth: 2,
    zIndex: 1,
    backgroundColor: '#f0f1f2',
  },
  todoInput: {
    width: '85%',
    minHeight: '50%',
    color: 'black',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
  },

  tennisBall: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'greenyellow',
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  button: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },

  MainContainer: {

    justifyContent: 'center',
    flex: 0.9,
    margin: 5,

  },

  ImageComponentStyle: {

    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 100,
    backgroundColor: '#4CAF50'

  }
  ,

  ItemTextStyle: {

    color: '#fff',
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
    backgroundColor: '#4CAF50',
    marginBottom: 5

  },

  ButtonStyle: {

    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#FF9800',
    width: '100%',
    height: 50
  },

  ButtonInsideTextStyle: {
    color: '#fff',
    textAlign: 'center',
  }
});
export default createAppContainer(AppNavigator);
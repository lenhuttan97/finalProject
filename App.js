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
import { Ionicons, Entypo, AntDesign, SimpleLineIcons, Feather } from '@expo/vector-icons';

import TodoItem from './src/todoItem.component';
import FloatingActionView from './src/floatingAction.component';
import ViewDataSource from './src/VeiwDataSource.component';
import styles from './src/styles';



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
      floatingAction: true,
    }
  }
  showAction = () => {
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
    this.setState({ floatingAction: false });
  };

  hideAction = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 0,
      duration: 1500
    }).start();
    Animated.timing(this.state.fadeValue1, {
      toValue: 0,
      duration: 1000
    }).start();
    Animated.timing(this.state.fadeValue2, {
      toValue: 0,
      duration: 500
    }).start();
    this.setState({ floatingAction: true });
  }
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
        loading: false
      })
    }
    else {
      this.setState({
        GridColumnsValue: true,
        loading: false
      })
    }
  }

  GetGridViewItem(item) {
    Alert.alert(item);
  }
  navigateCam() {
    console.log('natigateCam1');
    this.props.navigation.navigate('CameraS');
    console.log('natigateCam2');
  };

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
        <View style={styles.MainContainer}>
          {this.state.isLoading ? (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" color="green" />
            </View>
          ) : (
              <ViewDataSource dataSource={this.state.dataSource}
                GridColumnsValue={this.state.GridColumnsValue}
                GetGridViewItem={this.GetGridViewItem}

              />
            )}
          <FloatingActionView fadeValue={this.state.fadeValue}
            fadeValue1={this.state.fadeValue1}
            fadeValue2={this.state.fadeValue2}
            floatingAction={this.state.floatingAction}
            showAction={this.showAction}
            hideAction={this.hideAction}
          />
        </View>
      </View>
    );
  }
}

class cameraScreen extends React.Component {
  render() {
    return (
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

export default createAppContainer(AppNavigator);
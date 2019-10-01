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
import { createDrawerNavigator } from 'react-navigation-drawer';
import { View, TouchableOpacity, Alert, ActivityIndicator, Image, TextInput, Animated } from 'react-native';
import { Ionicons, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';

import CameraPage from './src/camera.page';
import GalleryImportScreen from './src/galleryImport.page';
import ResultPage from './src/result.page';

import FloatingActionView from './src/floatingAction.component';
import ViewDataSource from './src/VeiwDataSource.component';
import styles from './src/styles';
import InforUser from './src/infoUser.page';
import slides from './slidesIntro';

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
      navigation: this.props.navigation,
      theFistInstall: false,
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
  getApi() {

    // return fetch('http://35.201.138.2:8001/get-json/')
    return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
      // .then((response) => {response.json(); console.log(response)})
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

  firebaseUrl() {
    var firebaseConfig = {
      apiKey: "AIzaSyCjXSBR_XRP_4pmFwikBkhnbBYggdRvBMw",
      authDomain: "imagecccd.firebaseapp.com",
      databaseURL: "https://imagecccd.firebaseio.com",
      projectId: "imagecccd",
      storageBucket: "imagecccd.appspot.com",
      messagingSenderId: "218521949816",
      appId: "1:218521949816:web:505df4bbc22c2b8698bf8d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  componentDidMount = () => {
    this.getApi();
    // this.firebaseUrl();
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

  on_Done_all_slides = () => {
    this.setState({ theFistInstall: true });
  };

  on_Skip_slides = () => {
    this.setState({ theFistInstall: true });
  };

  render() {
    if (this.state.theFistInstall) {
      return (
        <View style={styles.container}>
          <View style={styles.banner}>
            {this.state.search ? (
              <View style={styles.itemBanner}>
                <View style={{ flex: 0.15, alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <MaterialIcons name="menu" size={27} color="green" />
                  </TouchableOpacity>
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
                  <TouchableOpacity  onPress={() => this.setState({ theFistInstall: !this.state.theFistInstall })}><AntDesign name="questioncircleo" size={25} /></TouchableOpacity>
                  {/* <TouchableOpacity onPress={() => this.setState({ loading: !this.state.loading })}><Entypo name="dots-three-vertical" size={25} /></TouchableOpacity> */}
                  <TouchableOpacity onPress={() => this.ChangeGridValueFunction()}>
                    {this.state.GridColumnsValue ? (<AntDesign name="bars" size={25} />) : (<Entypo name="grid" size={25} />)}
                  </TouchableOpacity>
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
          {/* {this.state.loading && <TodoItem switchView={this.state.GridColumnsValue} switchViewFunction={this.ChangeGridValueFunction} />} */}
          <View style={styles.MainContainer}>
            {this.state.isLoading ? (
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="green" />
              </View>
            ) : (
                <ViewDataSource dataSource={this.state.dataSource}
                  GridColumnsValue={this.state.GridColumnsValue}
                  GetGridViewItem={this.GetGridViewItem}
                  navigation={this.state.navigation}

                />
              )}
            <FloatingActionView fadeValue={this.state.fadeValue}
              fadeValue1={this.state.fadeValue1}
              fadeValue2={this.state.fadeValue2}
              floatingAction={this.state.floatingAction}
              showAction={this.showAction}
              hideAction={this.hideAction}
              navigation={this.state.navigation}
            />
          </View>
        </View>
      );
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this.on_Done_all_slides}
          showSkipButton={true}
          onSkip={this.on_Skip_slides}
        />
      );
    }

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
    GalleryImportPage: GalleryImportScreen,
    ResultPage: ResultPage,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: 'main',
  },

);
const mainScreenDraweres = createDrawerNavigator(
  {
    Initial: AppNavigator,
  },
  {
    contentComponent: (props) => <InforUser />,

  }
);
//export default draweres;
export default createAppContainer(mainScreenDraweres);
// src/styles.js
import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 100,
        bottom: 0,
        backgroundColor:'#255137'
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#000000",
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
    },
    preview: {
        height: 550,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    headerTt:{
        width:170,
        height:35
    },

    galleryContainer: { 
        bottom: 45 
    },
    galleryImageContainer: { 
        width: 75, 
        height: 75, 
        marginRight: 5 
    },
    galleryImage: { 
        width: 75, 
        height: 75 
    },
    myPopup: {
        zIndex:3, 
        position:"absolute", 
        justifyContent:"center",
        alignItems:"center",
        width:140,
        top: 550/2 - 20, 
        left:winWidth/2-70,
        height: 40,
        backgroundColor:"#255137",
        borderRadius:50,
        opacity:0.4
    },
    myPopupText: {
        color:"white",
        fontSize:20,
        fontFamily:"sans-serif",
    },
    scanPreviewImage:{
        width:50,
        height:50,
        position:"absolute"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopWidth: (Platform.OS) === 'ios' ? 0 : 25,
        borderTopColor: '#0b8246',
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
      todoInput: {
        width: '85%',
        minHeight: '50%',
        color: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey'
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
      },
      ImageComponentStyleRow:{
        height: 100,
        width: 150,
      },
      ItemNameTextStyleRow:{
        color: '#043508',
        padding: 10,
        fontSize: 18,
        textAlign: 'left',
      },
      ItemDateTextStyleRow:{
        color: '#043508',
        padding: 10,
        fontSize: 10,
        textAlign: 'left',
      },
    
      ItemTextStyle: {
        color: '#043508',
        padding: 10,
        fontSize: 16,
        textAlign: 'left',
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
      },
      floatingActionBox:{
        flex: 1,
                flexDirection: 'column',
                position: 'absolute', bottom: 0,
                right: 0,
      },
      floatingActionItem:{
                  width: 60, height: 60, borderRadius: 30,
                  backgroundColor: '#0b8246', 
                  position: 'absolute',
                  right: 15,  
                  justifyContent: 'center', 
                  alignItems: 'center'
      },
});
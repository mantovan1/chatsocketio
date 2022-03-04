import Constants from 'expo-constants'
import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    header: {
      width: '100%',
      height: Dimensions.get('screen').height*0.05,
      alignItems: 'center',
      marginTop: Constants.statusBarHeight,
      padding: 10,
      backgroundColor: '#e4e4e4'
    },
    message: {
        width: '100%'
    },  
    footer: {
      flexDirection: 'row',
      width: '100%',
      height: Dimensions.get('screen').height*0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#e4e4e4'
    },
    textinput: {
        width: Dimensions.get('screen').width * 0.8,
        height: '60%',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff'
    },
    sendicon: {
        marginRight: 10
    }
  });
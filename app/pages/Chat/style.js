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
      height: Dimensions.get('window').height*0.05,
      alignItems: 'center',
      marginTop: Constants.statusBarHeight,
      padding: 10,
      backgroundColor: '#e4e4e4'
    },
    message: {
        width: '100%'
    },  
    footer: {
      width: Dimensions.get('window').width * 1,
      height: Dimensions.get('window').height * 0.08,
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#e4e4e4'
    },
    textinput: {
        width: '80%',
        height: '80%',
        borderRadius: 30,
        padding: 10,
        backgroundColor: '#fff',
        elevation: 3,
    },
    sendicon: {
        marginRight: 10
    }
  });
import Constants from 'expo-constants';
import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        height: '20%',
        marginTop: Constants.statusBarHeight,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    icon: {
        
    },
    label: {
        fontSize: 18,
        margin: 10
    }, 
    textinput: {
        width: Dimensions.get('screen').width * 0.8,
        height: 50,
        borderRadius: 30,
        padding: 10,
        backgroundColor: '#e4e4e4'
    },
    btnsend: {
        width: Dimensions.get('screen').width * 0.8,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
})
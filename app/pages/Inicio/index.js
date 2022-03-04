import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { useState } from "react";

import styles from './style';

export default function App({navigation}) { 
    
    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');

    const goToChat = async () => {

        if(!user || !room) {
            Alert.alert('Preencha o nome de usuário e a sala');
            return;
        }

        navigation.navigate('Chat', {user: user, room: room})

    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Real Time Chat
                </Text>
            </View>
            <View style={styles.content}>
                <AntDesign style={styles.icon} name="message1" size={100} color="black" />
                <TextInput placeholder="Usuário..." style={styles.textinput} onChangeText={(text) => setUser(text)} />
                <TextInput placeholder="Sala..." style={styles.textinput} onChangeText={(text) => setRoom(text)} />
                <TouchableOpacity style={styles.btnsend} onPress={goToChat}>
                    <Text style={{color: 'white'}}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
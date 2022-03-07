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
                <View>
                    <Text style={styles.label}>Nome: </Text>
                    <TextInput placeholder="Digite seu nome de usuário..." style={styles.textinput} onChangeText={(text) => setUser(text)} />
                </View>

                <View>
                    <Text style={styles.label}>Sala: </Text>
                    <TextInput placeholder="Digite a sua sala..." style={styles.textinput} onChangeText={(text) => setRoom(text)} />
                </View>
                
                <TouchableOpacity style={styles.btnsend} onPress={goToChat}>
                    <Text style={{color: 'white'}}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
import { Dimensions, FlatList, ImageBackground, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';

import { io } from 'socket.io-client';

import styles from './style';

import uuid from 'react-native-uuid';

export default function App({ navigation, route }) {

  const user = route.params.user;
  const room = route.params.room;

  const [text, setText] = useState('');

  const [messagesList, setMessagesList] = useState(null);
  const socket = io('http://192.168.15.152:8080');

  const edtMessage = useRef(null);

  useEffect(() => {
    socket.on('connect', () => {
      console.log("Você está conectado como " + socket.id);
    })

    socket.emit('join-room', room);

    carregarConversa();

  }, []);

  const carregarConversa = async () => {
    await fetch('http://192.168.15.152:8080/conversation/' + room, {
       method: 'get',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
     })
     .then(response => response.json())
     .then(data=> {
       setMessagesList(data);
     })
   }

 
  socket.on('send-message', (mensagens) => {

    const listaMensagens = JSON.parse(mensagens);

    setMessagesList(listaMensagens);
  });


  const send_message = async () => {
    if (text === '') return;

    const id = uuid.v4()

    await socket.emit('send-message', id, user, text, room);
  
    setText("");
    edtMessage.current.clear();

  }

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.container}>
      <View style={styles.header}>
        <Text> {room} </Text>
      </View>

        <FlatList
        style={{width: '100%', height: Dimensions.get('window').height * 0.85}}
        data={messagesList}
        keyExtractor={ ( item ) => item.uuid}
        renderItem={( {item} ) => (
          <View style={{width: '100%', marginVertical: 10}}>
            <View style={{justifyContent: 'center', alignSelf: item.user===user?'flex-end':'flex-start', minWidth: 80, minHeight: 50, borderRadius: 5, marginHorizontal: 10, padding: 10, backgroundColor: '#e4e4e4'}}>
              {item.user!=user && <Text style={{fontWeight: 'bold'}}>{item.user}</Text>}
              <Text>{item.text}</Text>
            </View>  
          </View>
        )}
        />
        
      <KeyboardAvoidingView style={styles.footer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput ref={edtMessage} placeholder='Mensagem...' style={styles.textinput} onChangeText={(text) => setText(text)} />
        <TouchableOpacity style={styles.sendicon} onPress={send_message}>
            <FontAwesome  name="send" size={30} color="black" />
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </ImageBackground>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './pages/Inicio/index'
import Chat from './pages/Chat/index';

const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
      headerMode = "none"
      initialRouteName = "Inicio">

        <Stack.Screen name = "Inicio" component={Inicio} />
        <Stack.Screen name = "Chat" component={Chat} />
      </Stack.Navigator>

    </NavigationContainer>

  )

}
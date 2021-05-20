import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './src/header/Header';
import SingIn from './src/component/SingIn';
import SingUp from './src/component/SingUp';
import Resgister from './src/component/Resgister';

function App() {
     return (
          <NavigationContainer>
               <MyStack />
          </NavigationContainer>
     );
}

const Stack = createStackNavigator();

function MyStack() {
     return (
          <Stack.Navigator>
               <Stack.Screen
                    name="Header"
                    component={Header}
                    options={{
                         headerShown: false,
                    }}
               />
               <Stack.Screen
                    name="Resgister"
                    component={Resgister}
                    options={{ title: 'สมัครสมาชิก' }}
               />
               <Stack.Screen name="SingIn" component={SingIn} />
          </Stack.Navigator>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
});

export default App;

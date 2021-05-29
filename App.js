import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './src/header/Header';
import News from './src/component/News';
import SingUp from './src/component/SingUp';
import Resgister from './src/component/Resgister';
import Predict2 from './src/component/Predict2';
import Predict3 from './src/component/Predict3';

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
               <Stack.Screen name="News" component={News} />
               <Stack.Screen
                    name="Predict2"
                    component={Predict2}
                    options={{ title: 'ผลการทำนาย' }}
               />
               <Stack.Screen
                    name="Predict3"
                    component={Predict3}
                    options={{ title: 'การคาดคะเนรายได้' }}
               />
          </Stack.Navigator>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
});

export default App;

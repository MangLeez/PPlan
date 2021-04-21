import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Header from './src/header/Header';
import SingIn from './src/component/SingIn';
import SingUp from './src/component/SingUp';

const Stack = createStackNavigator();

export default function App() {
     return (
          <View style={styles.container}>
               <Header />
          </View>
     );
}

function MyStack() {
     return (
          <Stack.Navigator>
               <Stack.Screen name="SingUp" component={SingUp} />
               <Stack.Screen name="SingIn" component={SingIn} />
          </Stack.Navigator>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
});

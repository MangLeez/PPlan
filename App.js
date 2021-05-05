import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './src/header/Header';
import SingIn from './src/component/SingIn';
import SingUp from './src/component/SingUp';
import Resgister from './src/component/Resgister';

export default function App() {
     return (
          <View style={styles.container}>
               <Header />
          </View>
     );
}

const Stack = createStackNavigator();

function MyStack() {
     return (
          <Stack.Navigator>
               <Stack.Screen name="Resgister" component={Resgister} />
               <Stack.Screen name="SingIn" component={SingIn} />
          </Stack.Navigator>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
});

import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, Button } from 'react-native';

const Resgister = () => {
     return (
          <View style={styles.container}>
               <Text>Resgister </Text>
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: 40,
          alignItems: 'center',
     },
});

export default Resgister;

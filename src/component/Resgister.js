import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Resgister = ({ navigation }) => {
     return (
          <View style={styles.container}>
               <View style={styles.form}>
                    <Input
                         leftIcon={
                              <Icon name="user" size={24} color="#0085E6" />
                         }
                         placeholder={'ชื่อ-นามสกุล'}
                    />
                    <Input
                         leftIcon={
                              <Icon name="phone" size={24} color="#0085E6" />
                         }
                         keyboardType="numeric"
                         placeholder={'เบอร์โทร'}
                    />
                    <Input
                         leftIcon={
                              <Icon name="lock" size={24} color="#0085E6" />
                         }
                         placeholder={'รหัสผ่าน'}
                         secureTextEntry={true}
                    />
               </View>
               <Button
                    title="สมัครสมาชิก"
                    containerStyle={{
                         marginTop: '1%',
                         width: '55%',
                    }}
                    buttonStyle={{
                         backgroundColor: '#549a00',
                    }}
                    onPress={() => navigation.navigate('Resgister')}
               />
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: 40,
          alignItems: 'center',
     },
     form: {
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '20%',
          width: '60%',
     },
});

export default Resgister;

import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

function Home(props) {
     return (
          <View style={styles.container}>
               <ImageBackground
                    source={{
                         uri:
                              'https://images.unsplash.com/photo-1535649900424-c09963c4fd8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhcm18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={styles.image}
               />
               <View style={styles.title}>
                    <Text style={styles.titles}>PPlan</Text>
               </View>
               <View style={styles.form}>
                    <Input
                         leftIcon={
                              <Icon name="phone" size={24} color="#0085E6" />
                         }
                         keyboardType="numeric"
                         placeholder={'Phone Number'}
                    />
                    <Input
                         leftIcon={
                              <Icon name="lock" size={24} color="#0085E6" />
                         }
                         placeholder={'Password'}
                         secureTextEntry={true}
                    />
               </View>
               <Button
                    title="เข้าสู่ระบบ"
                    containerStyle={{
                         marginLeft: '22%',
                         width: '55%',
                    }}
               />
               <Button
                    title="สมัครสมาชิก"
                    containerStyle={{
                         marginTop: '1%',
                         marginLeft: '22%',
                         width: '55%',
                    }}
                    buttonStyle={{
                         backgroundColor: '#549a00',
                    }}
                    onPress={() => navigation.navigate('Resgister')}
               />
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     title: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20%',
          width: '100%',
     },
     titles: {
          fontSize: 40,
          fontWeight: '500',
     },
     form: {
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '20%',
          width: '60%',
     },
     image: {
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          position: 'absolute',
     },
});

export default Home;

import React, { useState } from 'react';
import {
     StyleSheet,
     View,
     Text,
     ImageBackground,
     AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';



function Home() {
     const navigation = useNavigation();
     const [tel, setTel] = useState('');
     const [password, setPassword] = useState('');
     const [user, setUser] = useState('');
     const [login, setLogin] = useState(false);

     let status = '';
     let name = '';

     const singIn = async () => {
          if (password === '' || tel === '') {
               alert('โปรดกรอกข้อมูลให้ครบถ้วน');
          } else if (tel.length < 10) {
               alert('โปรดกรอกเบอร์โทรศัพท์ให้ครบถ้วน');
          } else {
               await fetch('http://192.168.0.106:3032/signin/', {
                    method: 'POST',
                    headers: {
                         Accept: 'application/json',
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         tel: tel,
                         password: password,
                    }),
               })
                    .then((res) => res.json())
                    .then((json) => (status = json));

               if (status.status == 'Fail') {
                    alert('หมายเลขโทรศัพท์หรือรหัสผ่านไม่ถูกต้อง');
               } else {
                    alert('ล็อคอินสำเร็จ');
                    setstoreData(status.result[0].user_name);
               }
          }
     };

     const signout = async () => {
          try {
               await AsyncStorage.removeItem('username');
               name = await AsyncStorage.getItem('username');
               setLogin(false);
               alert('ออกจากระบบ');
          } catch (e) {
               // saving error
          }
     };

      const storeData = async () => {
          try {
               name = await AsyncStorage.getItem('username')
               setUser(name);
          } catch (e) {
               // saving error
          }
          if(!user){
               setLogin(false);
          }else{
               setLogin(true);
          }
     };

     const setstoreData = async (value) => {
          try {
               await AsyncStorage.setItem('username', value);
               name = await AsyncStorage.getItem('username')
               setUser(name);
               setLogin(true);
          } catch (e) {
               // saving error
          }

     };

     storeData();

     if(login){
          return (
          <View style={styles.container}>
               <ImageBackground
                    source={{
                         uri: 'https://images.unsplash.com/photo-1535649900424-c09963c4fd8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhcm18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={styles.image}
               />
               <View style={styles.title}>
                    <Text style={styles.titles}>PPlan</Text>
               </View>
               <View style={{ alignItems:'center',marginTop:'1%'}}>
               <Text style={{ fontSize: 20 }}>สวัสดี</Text>
               <Text style={{ fontSize: 15 }}>คุณ {user} </Text>
               </View>
               <View style={{ marginTop: '3%' }} />
               <Button
                    title="ออกจากระบบ"
                    containerStyle={{
                         marginTop: '1%',
                         marginLeft: '22%',
                         width: '55%',
                    }}
                    buttonStyle={{
                         backgroundColor: '#d10000',
                    }}
                    onPress={() => signout()}
               />
          </View>
     );
} else {
     return (
          <View style={styles.container}>
               <ImageBackground
                    source={{
                         uri: 'https://images.unsplash.com/photo-1535649900424-c09963c4fd8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhcm18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
                         onChangeText={setTel}
                         value={tel}
                    />
                    <Input
                         leftIcon={
                              <Icon name="lock" size={24} color="#0085E6" />
                         }
                         placeholder={'Password'}
                         secureTextEntry={true}
                         onChangeText={setPassword}
                         value={password}
                    />
               </View>
               <Button
                    title="เข้าสู่ระบบ"
                    containerStyle={{
                         marginLeft: '22%',
                         width: '55%',
                    }}
                    onPress={() => singIn()}
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

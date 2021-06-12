import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Resgister = ({ navigation }) => {
     const [name, setName] = useState('');
     const [password, setPassword] = useState('');
     const [confirmpassword, setConfirmpassword] = useState('');
     const [tel, setTel] = useState('');

     var status = '';

     const register = async () => {
          if (name === '' || password === '' || tel === '') {
               alert('โปรดกรอกข้อมูลให้ครบถ้วน');
          } else if (tel.length < 10) {
               alert('โปรดกรอกเบอร์โทรศัพท์ให้ครบถ้วน');
          } else if(password !== confirmpassword){
               alert('รหัสผ่านไม่ตรงกัน');
          }else {
               await fetch('http://192.168.0.106:3032/register/', {
                    method: 'POST',
                    headers: {
                         Accept: 'application/json',
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         name: name,
                         password: password,
                         tel: tel,
                    }),
               })
                    .then((res) => res.json())
                    .then((json) => (status = json.status));

               if (status == 'Success') {
                    alert('สมัครสมาชิกเสร็จสิ้น');
               } else {
                    alert('หมายเลขโทรศัพท์นี้ถูกใช้แล้ว');
               }
          }
     };

     return (
          <View style={styles.container}>
               <View style={styles.form}>
                    <Input
                         leftIcon={
                              <Icon name="user" size={24} color="#0085E6" />
                         }
                         placeholder={'ชื่อ-นามสกุล'}
                         onChangeText={setName}
                         value={name}
                    />
                    <Input
                         leftIcon={
                              <Icon name="phone" size={24} color="#0085E6" />
                         }
                         keyboardType="numeric"
                         placeholder={'เบอร์โทร'}
                         onChangeText={setTel}
                         value={tel}
                         maxLength={10}
                    />
                    <Input
                         leftIcon={
                              <Icon name="lock" size={24} color="#0085E6" />
                         }
                         placeholder={'รหัสผ่าน'}
                         secureTextEntry={true}
                         onChangeText={setPassword}
                         value={password}
                    />
                      <Input
                         leftIcon={
                              <Icon name="lock" size={24} color="#0085E6" />
                         }
                         placeholder={'ยืนยันรหัสผ่าน'}
                         secureTextEntry={true}
                         onChangeText={setConfirmpassword}
                         value={confirmpassword}
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
                    onPress={() => register()}
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
          marginLeft: '3%',
          width: '60%',
     },
});

export default Resgister;

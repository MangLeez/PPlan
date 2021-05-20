import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { Tooltip } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const Predict = () => {
     const [soil, setSoil] = useState('');
     const [sunray, setSunray] = useState('');
     const [climate, setClimate] = useState('');
     const [water, setWater] = useState('');
     const [month, setMonth] = useState('');

     return (
          <View style={styles.container}>
               <View style={styles.picker}>
                    <Text style={{ fontSize: 20 }}>ดิน</Text>
                    <RNPickerSelect
                         placeholder={{ label: 'เลือกชนิดของดิน', value: null }}
                         onValueChange={(soil) => console.log('soil ' + soil)}
                         // style={styles.pickerFM}
                         style={{ inputAndroid: { color: 'black' } }}
                         items={[
                              { label: 'ดินเหนียว', value: '1' },
                              { label: 'ดินเหนียวปนตะกอน', value: '2' },
                              { label: 'ดินเหนียวปนทราย', value: '3' },
                              { label: 'ดินร่วนเหนียวปนตะกอน', value: '4' },
                              { label: 'ดินร่วนปนดินเหนียว', value: '5' },
                              { label: 'ดินร่วนเหนียวปนทราย', value: '6' },
                              { label: 'ดินร่วน', value: '7' },
                              { label: 'ดินร่วนปนตะกอน', value: '8' },
                              { label: 'ดินตะกอน', value: '9' },
                              { label: 'ดินร่วนปนทราย', value: '10' },
                              { label: 'ดินทรายปนดินร่วน', value: '11' },
                              { label: 'ดินทราย', value: '12' },
                         ]}
                         // pickerProps={{
                         //      style: { overflow: 'hidden' },
                         // }}
                    />
               </View>
               <View style={{ paddingTop: 5 }} />

               <View style={styles.picker}>
                    <Text style={{ fontSize: 20 }}>แสงแดด</Text>
                    <RNPickerSelect
                         placeholder={{
                              label: 'เลือกชนิดของแสงแดด',
                              value: null,
                         }}
                         onValueChange={(sunray) =>
                              console.log('sunray ' + sunray)
                         }
                         // style={styles.pickerFM}
                         style={{ inputAndroid: { color: 'black' } }}
                         items={[
                              { label: 'แดดเต็มวัน', value: '1' },
                              { label: 'แดดครึ่งวัน', value: '2' },
                              { label: 'แดดรำไร', value: '3' },
                              { label: 'ร่มสนิท', value: '4' },
                         ]}
                         // pickerProps={{
                         //      style: { overflow: 'hidden' },
                         // }}
                    />
               </View>
               <View style={{ paddingTop: 5 }} />
               <View style={styles.picker}>
                    <Tooltip
                         height={250}
                         width={270}
                         popover={
                              <Text>
                                   ภูมิอากาศร้อนชื้น 18-32 องศาเซลเซียส
                                   ภูมิอากาศแห้งแล้ง 38 องศาเซลเซียส ขึ้นไป
                                   ภูมิอากาศอบอุ่น 3-18 องศาเซลเซียส
                                   ภูมิอากาศหนาวเย็น
                              </Text>
                         }
                    >
                         <Text style={{ fontSize: 20 }}>สภาพภูมิอากาศ</Text>
                         <Icon
                              name="help-circle"
                              iconStyle="styles.icon"
                              color="#517fa4"
                         />
                    </Tooltip>
                    <RNPickerSelect
                         placeholder={{
                              label: 'เลือกชนิดของสภาพภูมิอากาศ',
                              value: null,
                         }}
                         onValueChange={(climate) =>
                              console.log('climate ' + climate)
                         }
                         // style={styles.pickerFM}
                         style={{ inputAndroid: { color: 'black' } }}
                         items={[
                              { label: 'ภูมิอากาศร้อนชื้น', value: '1' },
                              { label: 'ภูมิอากาศแห้งแล้ง', value: '2' },
                              { label: 'ภูมิอากาศอบอุ่น', value: '3' },
                              { label: 'ภูมิอากาศหนาวเย็น', value: '4' },
                         ]}
                         // pickerProps={{
                         //      style: { overflow: 'hidden' },
                         // }}
                    />
               </View>
               <View style={{ paddingTop: 5 }} />
               <View style={styles.picker}>
                    <Text style={{ fontSize: 20 }}>น้ำ</Text>
                    <RNPickerSelect
                         placeholder={{ label: 'เลือกชนิดของน้ำ', value: null }}
                         onValueChange={(water) =>
                              console.log('water ' + water)
                         }
                         // style={styles.pickerFM}
                         style={{ inputAndroid: { color: 'black' } }}
                         items={[
                              { label: 'น้ำจืด', value: '1' },
                              { label: 'น้ำกร่อย', value: '2' },
                              { label: 'น้ำทะเล', value: '3' },
                         ]}
                         // pickerProps={{
                         //      style: { overflow: 'hidden' },
                         // }}
                    />
               </View>
               <View style={{ paddingTop: 5 }} />
               <View style={styles.picker}>
                    <Text style={{ fontSize: 20 }}>เดือน</Text>
                    <RNPickerSelect
                         placeholder={{
                              label: 'เลือกเดือนที่ปลูก',
                              value: null,
                         }}
                         onValueChange={(month) =>
                              console.log('month ' + month)
                         }
                         // style={styles.pickerFM}
                         style={{ inputAndroid: { color: 'black' } }}
                         items={[
                              { label: 'มกราคม', value: '1' },
                              { label: 'กุมภาพันธ์', value: '2' },
                              { label: 'มีนาคม', value: '3' },
                              { label: 'เมษายน', value: '4' },
                              { label: 'พฤษภาคม', value: '5' },
                              { label: 'มิถุนายน', value: '6' },
                              { label: 'กรกฎาคม', value: '7' },
                              { label: 'สิงหาคม', value: '8' },
                              { label: 'กันยายน', value: '9' },
                              { label: 'ตุลาคม', value: '10' },
                              { label: 'พฤศจิกายน', value: '11' },
                              { label: 'ธันวาคม', value: '12' },
                         ]}
                         // pickerProps={{
                         //      style: { overflow: 'hidden' },
                         // }}
                    />
               </View>
               <View style={{ paddingTop: 10 }} />

               <Button
                    title="ทำนาย"
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
          paddingTop: '20%',
          alignItems: 'center',
     },
     title: {
          fontSize: 20,
     },
     label: {
          paddingTop: '20%',
     },
     picker: {
          fontSize: 300,
          width: '99%',
          paddingHorizontal: 10,
          // paddingVertical: 8,
          borderWidth: 1,
          borderColor: 'purple',
          borderRadius: 8,
          color: 'black',
          // paddingRight: 30, // to ensure the text is never behind the icon
     },
     pickerFM: {
          fontSize: 30,
          color: 'black',
          // paddingRight: 30, // to ensure the text is never behind the icon
     },
     // icon: {
     //      alignItems: 'left',
     //      // paddingRight: 30, // to ensure the text is never behind the icon
     // },
});

export default Predict;

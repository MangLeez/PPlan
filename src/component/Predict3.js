import React, { useState } from 'react';
import {
     View,
     Text,
     Picker,
     StyleSheet,
     TouchableOpacity,
     ScrollView,
     Animated,
} from 'react-native';
import { Input, Button, Slider } from 'react-native-elements';
import { Dialog, Portal } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { Tooltip } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Predict3 = (route) => {
     //  const { name } = route.params;

     const [rai, setRai] = useState('');
     const [ngan, setNgan] = useState('');
     const [wa, setWa] = useState('');
     const [seed, setSeed] = useState('');
     const [rent, setRent] = useState('');
     const [harvest, setHarvest] = useState('');
     let cost = '';
     let income = '';

     const cal = () => {
          if (rai === '' || ngan === '' || seed === '' || wa === '') {
               alert('โปรดกรอกข้มูลให้ครบถ้วน');
          } else {
               cost = parseInt(rai) * 500;
               income = console.log(cost);
          }
     };

     return (
          <View style={styles.container}>
               <View style={styles.picker}>
                    <Text style={{ fontSize: 20 }}>ไร่</Text>
                    <Input
                         placeholder="กรอกจำนวนไร่"
                         errorStyle={{ color: 'red' }}
                         keyboardType="numeric"
                         onChangeText={setRai}
                         value={rai}
                    />
               </View>
               <View style={{ paddingTop: 5 }} />
               <View style={styles.picker}>
                    <Text style={{ fontSize: 20 }}>งาน</Text>
                    <RNPickerSelect
                         placeholder={{
                              label: 'จำนวนงาน',
                              value: '',
                         }}
                         onValueChange={(ngan) => setNgan(ngan)}
                         style={{ inputAndroid: { color: 'black' } }}
                         items={[
                              { label: '1 งาน', value: '1' },
                              { label: '2 งาน', value: '2' },
                              { label: '3 งาน', value: '3' },
                         ]}
                    />
               </View>
               <View style={{ paddingTop: 5 }} />
               <View style={styles.picker}>
                    <Text style={{ fontSize: 20 }}>ตารางวา</Text>

                    <View
                         style={{
                              width: '90%',
                              alignItems: 'stretch',
                              justifyContent: 'center',
                         }}
                    >
                         <Slider
                              value={wa}
                              onValueChange={setWa}
                              maximumValue={100}
                              minimumValue={1}
                              step={1}
                              trackStyle={{
                                   height: 10,
                                   backgroundColor: 'transparent',
                              }}
                              thumbStyle={{
                                   height: 20,
                                   width: 20,
                                   backgroundColor: 'transparent',
                              }}
                              thumbProps={{
                                   children: (
                                        <Icon
                                             name="circle"
                                             size={22}
                                             reverse
                                             containerStyle={{
                                                  bottom: 20,
                                                  right: 20,
                                             }}
                                             color="green"
                                        />
                                   ),
                              }}
                         />
                         <Text style={{ fontSize: 20 }}>{wa} ตารางวา</Text>
                    </View>
               </View>
               <View style={{ paddingTop: 20 }} />
               <View style={styles.picker}>
                    <Text style={{ fontSize: 20 }}>ค่าเมล็ดพันธ์</Text>
                    <Input
                         placeholder="xx บาท"
                         errorStyle={{ color: 'red' }}
                         keyboardType="numeric"
                         onChangeText={setSeed}
                         value={seed}
                    />
               </View>
               <View style={{ paddingTop: 5 }} />
               <View style={styles.picker}>
                    <Tooltip
                         height={50}
                         width={200}
                         popover={<Text>ไม่จำเป็นต้องกรอก</Text>}
                    >
                         <Text style={{ fontSize: 20 }}>
                              ค่าเช่าที่
                              <Icon
                                   name="exclamation-circle"
                                   iconStyle="styles.icon"
                                   color="#517fa4"
                              />
                         </Text>
                    </Tooltip>
                    <Input
                         placeholder="xx บาท"
                         errorStyle={{ color: 'red' }}
                         keyboardType="numeric"
                         onChangeText={setRent}
                         value={rent}
                    />
               </View>

               <View style={{ paddingTop: 10 }} />
               <Button
                    title="คาดคะเน"
                    containerStyle={{
                         marginTop: '1%',
                         width: '55%',
                    }}
                    buttonStyle={{
                         backgroundColor: '#549a00',
                    }}
                    onPress={() => cal()}
               />
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: '3%',
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
          borderColor: 'green',
          borderRadius: 8,
          color: 'black',
          // paddingRight: 30, // to ensure the text is never behind the icon
     },
     pickerFM: {
          fontSize: 30,
          color: 'black',
          // paddingRight: 30, // to ensure the text is never behind the icon
     },
     icon: {
          alignItems: 'center',
          // paddingRight: 30, // to ensure the text is never behind the icon
     },
});

export default Predict3;

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
import {
     Dialog,
     Portal,
     Provider,
     Modal,
     RadioButton,
     ActivityIndicator,
     Colors,
} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { Tooltip } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Predict3 = ({ route }) => {
     const { plant } = route.params;
     const { harvest } = route.params;

     const [rai, setRai] = useState(null);
     const [ngan, setNgan] = useState('');
     const [wa, setWa] = useState('1');
     const [seed, setSeed] = useState('');
     const [soil, setSoil] = useState('');
     const [people, setPeople] = useState(null);
     const [day, setDay] = useState(null);
     const [compost, setCompost] = useState(null);
     const [pesticides, setPesticides] = useState(null);
     const [rent, setRent] = useState(null);
     const [month, setMonth] = useState('');
     const [profit1, setProfit1] = useState('');
     const [profit2, setProfit2] = useState('');
     const [maxPrice, setMaxPrice] = useState('');
     const [minPrice, setMinPrice] = useState('');
     const [product, setProduct] = useState('');
     const [income1, setIncome1] = useState('');
     const [income2, setIncome2] = useState('');
     const [cost, setCost] = useState('');
     const [seedCost, setSeedCost] = useState('');
     const [soilCost, setSoilCost] = useState('');
     const [workCost, setWorkCost] = useState('');
     const [wage, setWage] = useState(null);
     const [rentCost, setRentCost] = useState('');
     const [compostCost, setCompostCost] = useState('');
     const [pesticidesCost, setPesticidesCost] = useState('');

     const [visible, setVisible] = React.useState(false);
     const [checkedWork, setCheckedWork] = React.useState('second');
     const [checkedWorkCost, setCheckedWorkCost] = React.useState('Haves');
     const showModal = () => setVisible(true);
     const hideModal = () => setVisible(false);
     const containerStyle = { backgroundColor: 'white', padding: 20 };
     var setPlant = JSON.stringify(plant);

     let useRai = '';
     let total1 = '';
     let total2 = '';
     var allBill = [];

     const MyComponent = () => {
          <ActivityIndicator animating={true} color={Colors.red800} />;
     };

     const cal = async () => {
          if (ngan === '' || seed === '' || soil === '') {
               alert('โปรดกรอก จำนวนงาน ค่าเมล็ดพันธ์ ค่าเตรียมดิน ให้ครบถ้วน');
          } else {
               if (
                    (checkedWork === 'Work' && people === null) ||
                    people === '' ||
                    (checkedWork === 'Work' && day === null) ||
                    day === '' ||
                    (checkedWork === 'Work' && wage === null) ||
                    wage === ''
               ) {
                    alert('โปรดกรอก จำนวนคน จำนวนวัน ราคาจ้าง ให้ครบถ้วน');
               } else {
                    if (checkedWorkCost === 'has' && wage === '') {
                         alert('โปรดกรอก ค่าแรง ให้ครบถ้วน');
                    } else {
                         if (!rai) {
                              setRai(null);
                         }
                         // if (!inputRent) {
                         //      setRent(null);
                         // } else {
                         //      setRent(inputRent);
                         // }
                         await fetch(
                              `http://192.168.0.106:3032/calCostWithWork/${setPlant}/${harvest}/${rai}/${ngan}/${wa}/${seed}/${soil}/${people}/${day}/${compost}/${pesticides}/${rent}/${wage}`,
                              {
                                   method: 'GET',
                              },
                         )
                              .then((res) => res.json())
                              .then((json) => (allBill = json));

                         // console.log(allBill);

                         for (let index = 0; index < 14; index++) {
                              allBill[index] = allBill[index].toFixed(2);
                              
                         }

                         setProfit1(allBill[0]);
                         setProfit2(allBill[1]);
                         setSoilCost(allBill[2]);
                         setSeedCost(allBill[3]);
                         setWorkCost(allBill[4]);
                         setRentCost(allBill[5]);
                         setCompostCost(allBill[6]);
                         setCost(allBill[7]);
                         setMaxPrice(allBill[8]);
                         setMinPrice(allBill[9]);
                         setProduct(allBill[10]);
                         setIncome1(allBill[11]);
                         setIncome2(allBill[12]);
                         setPesticidesCost(allBill[13]);

                         showModal();
                    }
               }
          }
     };

     return (
          <ScrollView>
               <View style={styles.container}>
                    <View style={styles.picker}>
                         <Text style={{ fontSize: 15 }}>พื้นที่เพาะปลูก</Text>
                         <View style={{ flexDirection: 'row' }}>
                              <View style={{ width: '90%' }}>
                                   <Input
                                        placeholder="กรอกจำนวนไร่"
                                        errorStyle={{ color: 'red' }}
                                        keyboardType="numeric"
                                        onChangeText={setRai}
                                        value={rai}
                                   />
                              </View>
                              <View style={{ marginTop: '5%' }}>
                                   <Text style={{ fontSize: 15 }}>ไร่</Text>
                              </View>
                         </View>
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
                         <View
                              style={{
                                   width: '95%',
                                   alignItems: 'stretch',
                                   justifyContent: 'center',
                              }}
                         >
                              <Slider
                                   value={wa}
                                   onValueChange={setWa}
                                   maximumValue={99}
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
                              <Text style={{ fontSize: 15 }}>{wa} ตารางวา</Text>
                         </View>
                    </View>
                    <View style={{ paddingTop: 5 }} />
                    <View style={styles.picker}>
                         <Text style={{ fontSize: 15 }}>ต้นทุนต่อไร่</Text>
                         <View style={{ flexDirection: 'row' }}>
                              <Text style={{ fontSize: 15 }}>
                                   ค่าเมล็ดพันธ์*
                              </Text>
                              <View style={{ marginLeft: '25%' }} />

                              <Text style={{ fontSize: 15 }}>ค่าปุ๋ย</Text>
                         </View>
                         <View style={{ flexDirection: 'row' }}>
                              <View style={{ width: '40%' }}>
                                   <Input
                                        placeholder="1,xxx"
                                        errorStyle={{ color: 'red' }}
                                        keyboardType="numeric"
                                        onChangeText={setSeed}
                                        value={seed}
                                   />
                              </View>
                              <View style={{ marginTop: '6%' }}>
                                   <Text style={{ fontSize: 15 }}>บาท</Text>
                              </View>
                              <View style={{ width: '40%' }}>
                                   <Input
                                        placeholder="1,xxx"
                                        errorStyle={{ color: 'red' }}
                                        keyboardType="numeric"
                                        onChangeText={setCompost}
                                        value={compost}
                                   />
                              </View>
                              <View style={{ marginTop: '6%' }}>
                                   <Text style={{ fontSize: 15 }}>บาท</Text>
                              </View>
                         </View>
                         <View style={{ flexDirection: 'row' }}>
                              <Text style={{ fontSize: 15 }}>
                                   ค่าเตรียมดิน*
                              </Text>
                              <View style={{ marginLeft: '25%' }} />

                              <Text style={{ fontSize: 15 }}>
                                   ค่าสารป้องกันกําจัดศัตรูพืช
                              </Text>
                         </View>
                         <View style={{ flexDirection: 'row' }}>
                              <View style={{ width: '40%' }}>
                                   <Input
                                        placeholder="1,xxx"
                                        errorStyle={{ color: 'red' }}
                                        keyboardType="numeric"
                                        onChangeText={setSoil}
                                        value={soil}
                                   />
                              </View>
                              <View style={{ marginTop: '6%' }}>
                                   <Text style={{ fontSize: 15 }}>บาท</Text>
                              </View>
                              <View style={{ width: '40%' }}>
                                   <Input
                                        placeholder="1,xxx"
                                        errorStyle={{ color: 'red' }}
                                        keyboardType="numeric"
                                        onChangeText={setPesticides}
                                        value={pesticides}
                                   />
                              </View>
                              <View style={{ marginTop: '6%' }}>
                                   <Text style={{ fontSize: 15 }}>บาท</Text>
                              </View>
                         </View>
                         <Text style={{ fontSize: 15 }}>
                              ค่าเช่าที่ดินต่อปี
                         </Text>
                         <View style={{ flexDirection: 'row' }}>
                              <View style={{ width: '40%' }}>
                                   <Input
                                        placeholder="1,xxx"
                                        errorStyle={{ color: 'red' }}
                                        keyboardType="numeric"
                                        onChangeText={setRent}
                                        value={rent}
                                   />
                              </View>

                              <Text style={{ fontSize: 15, marginTop: '7%' }}>
                                   บาท
                              </Text>
                         </View>
                    </View>
                    <View style={{ paddingTop: 5 }} />
                    <View style={styles.picker}>
                         <View style={{ flexDirection: 'row' }}></View>
                         <Text style={{ fontSize: 15 }}>ค่าแรงงาน</Text>
                         <View style={{ flexDirection: 'row' }}>
                              <View style={{ width: '10%' }}>
                                   <RadioButton
                                        value="Work"
                                        status={
                                             checkedWork === 'Work'
                                                  ? 'checked'
                                                  : 'unchecked'
                                        }
                                        onPress={() => setCheckedWork('Work')}
                                   />
                              </View>
                              <View style={{ marginTop: '2%' }}>
                                   <Text style={{ fontSize: 15 }}>มี</Text>
                              </View>
                              <View style={{ marginLeft: '32%' }} />

                              <View style={{ width: '10%' }}>
                                   <RadioButton
                                        value="Have"
                                        disabled={checkedWork !== 'Work'}
                                        status={
                                             checkedWorkCost === 'Have'
                                                  ? 'checked'
                                                  : 'unchecked'
                                        }
                                        onPress={() => {
                                             setCheckedWorkCost('Have');
                                             setWage('336');
                                        }}
                                   />
                              </View>
                              <View style={{ marginTop: '2%' }}>
                                   <Text style={{ fontSize: 15 }}>
                                        ค่าแรงขั้นต่ำ 336 บาท
                                   </Text>
                              </View>
                         </View>
                         <View style={{ flexDirection: 'row' }}>
                              <View style={{ width: '10%' }}>
                                   <RadioButton
                                        value="second"
                                        status={
                                             checkedWork === 'second'
                                                  ? 'checked'
                                                  : 'unchecked'
                                        }
                                        onPress={() => {
                                             setCheckedWork('second');
                                             setPeople(null);
                                             setDay(null);
                                             setCheckedWorkCost('Haves');
                                             setWage(null);
                                        }}
                                   />
                              </View>
                              <View style={{ marginTop: '2%' }}>
                                   <Text style={{ fontSize: 15 }}>ไม่มี</Text>
                              </View>
                              <View style={{ marginLeft: '27.4%' }} />

                              <View style={{ width: '8%' }}>
                                   <RadioButton
                                        value="has"
                                        disabled={checkedWork !== 'Work'}
                                        status={
                                             checkedWorkCost === 'has'
                                                  ? 'checked'
                                                  : 'unchecked'
                                        }
                                        onPress={() =>
                                             setCheckedWorkCost('has')
                                        }
                                   />
                              </View>
                              <View style={{ width: '40%' }}>
                                   <Input
                                        placeholder="บาทต่อวัน"
                                        errorStyle={{ color: 'red' }}
                                        keyboardType="numeric"
                                        onChangeText={setWage}
                                        value={wage}
                                        disabled={checkedWorkCost !== 'has'}
                                   />
                              </View>
                              <Text style={{ fontSize: 15, marginTop: '7%' }}>
                                   บาท
                              </Text>
                         </View>
                         <View style={{ flexDirection: 'row' }}>
                              <View style={{ width: '45%' }}>
                                   <Input
                                        placeholder="จำนวนคน"
                                        errorStyle={{ color: 'red' }}
                                        keyboardType="numeric"
                                        onChangeText={setPeople}
                                        value={people}
                                        disabled={checkedWork === 'second'}
                                   />
                              </View>
                              <Text style={{ fontSize: 15, marginTop: '7%' }}>
                                   คน
                              </Text>

                              <View style={{ width: '45%' }}>
                                   <Input
                                        placeholder="จำนวนวัน"
                                        errorStyle={{ color: 'red' }}
                                        keyboardType="numeric"
                                        onChangeText={setDay}
                                        value={day}
                                        disabled={checkedWork === 'second'}
                                   />
                              </View>
                              <Text style={{ fontSize: 15, marginTop: '7%' }}>
                                   วัน
                              </Text>
                         </View>
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
                         onPress={() => {
                              MyComponent(), cal();
                         }}
                    />
               </View>
               <Provider>
                    <Portal>
                         <Modal
                              visible={visible}
                              onDismiss={hideModal}
                              contentContainerStyle={containerStyle}
                         >
                              <View style={{ flexDirection: 'row' }}>
                                   <Text>รายได้ทั้งหมด</Text>
                                   <View style={{ marginLeft: '20%' }} />
                                   <Text style={{ color: 'green' }}>
                                        {income2}-{income1}
                                   </Text>
                                   <Text>{'  '}บาท</Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                   <View style={{ marginLeft: '5%' }} />
                                   <Text>ราคาเฉลี่ยสูงสุด:</Text>
                                   <View style={{ marginLeft: '50%' }} />
                                   <Text style={{ color: 'black' }}>
                                        {maxPrice}
                                   </Text>
                                   <Text>{'  '}บาท</Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                   <View style={{ marginLeft: '5%' }} />
                                   <Text>ราคาเฉลี่ยต่ำสุด:</Text>
                                   <View style={{ marginLeft: '50%' }} />
                                   <Text style={{ color: 'black' }}>
                                        {minPrice}
                                   </Text>
                                   <Text>{'  '}บาท</Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                   <View style={{ marginLeft: '5%' }} />
                                   <Text>ผลผลิตเฉลี่ย:</Text>
                                   <View style={{ marginLeft: '43%' }} />
                                   <Text style={{ color: 'black' }}>
                                        {product}
                                   </Text>
                                   <Text>{'  '}กิโลกรัม</Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                   <Text>ต้นทุนเฉลี่ยทั้งหมด</Text>
                                   <View style={{ marginLeft: '31%' }} />
                                   <Text style={{ color: 'red' }}>{cost}</Text>
                                   <Text>{'  '}บาท</Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                   <View style={{ marginLeft: '5%' }} />
                                   <Text>ค่าเมล็ดพันธ์:</Text>
                                   <View style={{ marginLeft: '54%' }} />
                                   <Text style={{ color: 'black' }}>
                                        {seedCost}
                                   </Text>
                                   <Text>{'  '}บาท</Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                   <View style={{ marginLeft: '5%' }} />
                                   <Text>ค่าเตรียมดิน:</Text>
                                   <View style={{ marginLeft: '54%' }} />
                                   <Text style={{ color: 'black' }}>
                                        {soilCost}
                                   </Text>
                                   <Text>{'  '}บาท</Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                   <View style={{ marginLeft: '5%' }} />
                                   <Text>ค่าปุ๋ย:</Text>
                                   <View style={{ marginLeft: '65%' }} />
                                   <Text style={{ color: 'black' }}>
                                        {compostCost}
                                   </Text>
                                   <Text>{'  '}บาท</Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                   <View style={{ marginLeft: '5%' }} />
                                   <Text>ค่าสารป้องกันกําจัดศัตรูพืช:</Text>
                                   <View style={{ marginLeft: '30%' }} />
                                   <Text style={{ color: 'black' }}>
                                        {pesticidesCost}
                                   </Text>
                                   <Text>{'  '}บาท</Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                   <View style={{ marginLeft: '5%' }} />
                                   <Text>ค่าแรงงาน:</Text>
                                   <View style={{ marginLeft: '57%' }} />
                                   <Text style={{ color: 'black' }}>
                                        {workCost}
                                   </Text>
                                   <Text>{'  '}บาท</Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                   <View style={{ marginLeft: '5%' }} />
                                   <Text>ค่าเช่าที่ดิน:</Text>
                                   <View style={{ marginLeft: '56%' }} />
                                   <Text style={{ color: 'black' }}>
                                        {rentCost}
                                   </Text>
                                   <Text>{'  '}บาท</Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                   <Text>รายได้สุทธิเฉลี่ยสุทธิ:</Text>
                                   <View style={{ marginLeft: '9%' }} />
                                   <Text style={{ color: 'green' }}>
                                        {profit2}-{profit1}
                                   </Text>
                                   <Text>{'  '}บาท</Text>
                              </View>
                         </Modal>
                    </Portal>
                    {/* <Button style={{ marginTop: 30 }} onPress={showModal}> */}
                    {/* Show */}
                    {/* </Button> */}
               </Provider>
          </ScrollView>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: '2%',
          alignItems: 'center',
     },
     title: {
          fontSize: 15,
     },
     label: {
          paddingTop: '20%',
     },
     picker: {
          // fontSize: 300,
          width: '95%',
          paddingHorizontal: 12,
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

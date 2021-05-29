import React, { useState } from 'react';
import {
     View,
     Text,
     Picker,
     StyleSheet,
     Button,
     Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import RNPickerSelect from 'react-native-picker-select';

const SingIn = () => {
     const [plant, setPlant] = useState('');
     const [month, setMonth] = useState('');
     const [year, setYear] = useState('');

     const getPrice = async () => {
          if (plant === '') {
               alert('โปรดเลือกสินค้าเกษตร');
          } else {
               await console.log(plant);
               // await fetch(`http://192.168.0.106:3032/getPrice/${plant}`, {
               //      method: 'GET',
               // })
               //      .then((res) => res.json())
               //      .then((json) => (plant = json));
          }
     };

     return (
          // <View style={styles.container}>
          //      <Text>Price </Text>
          // </View>

          <View style={{ marginTop: '10%' }}>
               <LineChart
                    data={{
                         labels: [
                              'January',
                              'February',
                              'March',
                              'April',
                              'May',
                              'June',
                         ],
                         datasets: [
                              {
                                   data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                   ],
                              },
                         ],
                    }}
                    width={Dimensions.get('window').width} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                         backgroundColor: '#e26a00',
                         backgroundGradientFrom: '#fb8c00',
                         backgroundGradientTo: '#ffa726',
                         decimalPlaces: 2, // optional, defaults to 2dp
                         color: (opacity = 1) =>
                              `rgba(255, 255, 255, ${opacity})`,
                         labelColor: (opacity = 1) =>
                              `rgba(255, 255, 255, ${opacity})`,
                         style: {
                              borderRadius: 16,
                         },
                         propsForDots: {
                              r: '6',
                              strokeWidth: '2',
                              stroke: '#ffa726',
                         },
                    }}
                    bezier
                    style={{
                         marginVertical: 8,
                         borderRadius: 16,
                    }}
               />

               <View style={styles.picker}>
                    <RNPickerSelect
                         placeholder={{ label: 'เลือกสินค้าเกษตร', value: '' }}
                         onValueChange={(plant) => setPlant(plant)}
                         style={{ inputAndroid: { color: 'black' } }}
                         items={[
                              { label: 'กะหล่ำดอก', value: 'P13013' },
                              { label: 'กะหล่ำปลี', value: 'P13011' },
                              { label: 'ขิงอ่อน', value: 'P13045' },
                              { label: 'ขิงแก่', value: 'P13046' },
                              { label: 'ขึ้นฉ่าย', value: 'P13039' },
                              { label: 'คะน้า', value: 'P13001' },
                              { label: 'ต้นหอม', value: 'P13035' },
                              { label: 'ผักกวางตุ้ง', value: 'P13005' },
                              { label: 'ผักกาดขาว', value: 'P13009' },
                              { label: 'ผักชี', value: 'P13033' },
                              { label: 'ผักบุ้งจีน', value: 'P13003' },
                              { label: 'พริก', value: 'P13037' },
                              { label: 'ฟักเขียว', value: 'P13026' },
                              { label: 'มะระจีน', value: 'P13015' },
                              { label: 'มะเขือเทศ', value: 'P13019' },
                              { label: 'แตงกวา', value: 'P13024' },
                         ]}
                    />
               </View>
               <View style={{ paddingTop: '2%' }} />

               <View style={styles.picker}>
                    <RNPickerSelect
                         placeholder={{ label: 'เลือกปี', value: '' }}
                         onValueChange={(year) => setYear(year)}
                         style={{ inputAndroid: { color: 'black' } }}
                         items={[
                              { label: '2564', value: '1' },
                              { label: '2563', value: '2' },
                              { label: '2562', value: '3' },
                         ]}
                    />
               </View>
               <View style={{ paddingTop: '2%' }} />
               <View style={styles.picker}>
                    <RNPickerSelect
                         placeholder={{ label: 'เลือกเดือน', value: '' }}
                         onValueChange={(month) => setMonth(month)}
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
                    />
               </View>

               <View style={styles.button}>
                    <Button
                         title="ตกลง"
                         containerStyle={{
                              marginTop: '50%',
                              width: '20%',
                         }}
                         buttonStyle={{
                              backgroundColor: '#549a00',
                         }}
                         onPress={() => getPrice()}
                    />
               </View>
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: 40,
          alignItems: 'center',
     },
     picker: {
          fontSize: 300,
          width: '80%',
          paddingHorizontal: 10,
          marginLeft: '10%',
          // paddingVertical: 8,
          borderWidth: 3,
          borderColor: 'gold',
          borderRadius: 80,
          color: 'black',
          // paddingRight: 30, // to ensure the text is never behind the icon
     },
     button: {
          paddingTop: '3%',
          width: '50%',
          marginLeft: '25%',
     },
});

export default SingIn;

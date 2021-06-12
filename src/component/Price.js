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
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Rect, Text as TextSVG, Svg } from 'react-native-svg';

export default function SingIn() {
     return <MyTabs />;
}

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

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
     return (
          <Tab.Navigator style={{ marginTop: '5%' }}>
               <Tab.Screen
                    name="Graph"
                    component={priceGraph}
                    options={{ tabBarLabel: 'Graph' }}
               />
               <Tab.Screen
                    name="Table"
                    component={priceTable}
                    options={{ tabBarLabel: 'Table' }}
               />
          </Tab.Navigator>
     );
}

function priceGraph() {
     const [plant, setPlant] = useState('');
     const [year, setYear] = useState(null);
     const [month, setMonth] = useState(null);
     const [price, setPrice] = useState([]);
     var [chartDataX, setChartDataX] = useState([]);
     var [chartDataY, setChartDataY] = useState([]);
     let [tooltipPos, setTooltipPos] = useState({
          x: 0,
          y: 0,
          visible: false,
          value: 0,
     });

     let dataX = [];
     let dataY = [];

     const [data, setData] = useState({
          datasets: [
               {
                    data: [20, 45, 28, 80, 99, 43],
               },
          ],
     });

     var getPrice = async () => {
          if (plant === '') {
               alert('โปรดเลือกสินค้าเกษตร');
          } else {
               if (!year && month) {
                    console.log('asdsadasd');

                    await fetch(
                         `http://192.168.0.106:3032/getPriceWithMonth/${plant}/${month}`,
                         {
                              method: 'GET',
                         },
                    )
                         .then((res) => res.json())
                         .then((res) => {
                              setChartDataX({
                                   chartDataX: res.dataX,
                              });
                              setData({
                                   datasets: [
                                        {
                                             data: res.dataY,
                                        },
                                   ],
                              });
                         })
                         .catch((error) => {});
               }
               if (!month && year) {
                    await fetch(
                         `http://192.168.0.106:3032/getPriceWithYear/${plant}/${year}`,
                         {
                              method: 'GET',
                         },
                    )
                         .then((res) => res.json())
                         .then((res) => {
                              setChartDataX({
                                   chartDataX: res.dataX,
                              });
                              setData({
                                   datasets: [
                                        {
                                             data: res.dataY,
                                        },
                                   ],
                              });
                         })
                         .catch((error) => {});
               }
               if (year && month) {
                    await fetch(
                         `http://192.168.0.106:3032/getPriceAll/${plant}/${year}/${month}`,
                         {
                              method: 'GET',
                         },
                    )
                         .then((res) => res.json())
                         .then((res) => {
                              setChartDataX({
                                   chartDataX: res.dataX,
                              });
                              setData({
                                   datasets: [
                                        {
                                             data: res.dataY,
                                        },
                                   ],
                              });
                         })
                         .catch((error) => {});
               }
               if (plant && !year && !month) {
                    await fetch(`http://192.168.0.106:3032/getPrice/${plant}`, {
                         method: 'GET',
                    })
                         .then((res) => res.json())
                         .then((res) => {
                              setChartDataX({
                                   chartDataX: res.dataX,
                              });
                              setData({
                                   datasets: [
                                        {
                                             data: res.dataY,
                                        },
                                   ],
                              });
                         })
                         .catch((error) => {});
               }
          }
     };

     return (
          <View style={{ marginTop: '1%' }}>
               <LineChart
                    data={{
                         labels: chartDataX.chartDataX,
                         datasets: [
                              {
                                   data: data.datasets[0].data,
                                   // data: [20, 45, 28, 80, 99, 43],
                              },
                         ],
                    }}
                    width={Dimensions.get('window').width} // from react-native
                    height={220}
                    yAxisLabel="฿"
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
                    decorator={() => {
                         return tooltipPos.visible ? (
                              <View>
                                   <Svg>
                                        <Rect
                                             x={tooltipPos.x - 15}
                                             y={tooltipPos.y + 10}
                                             width="48"
                                             height="30"
                                             fill="black"
                                        />
                                        <TextSVG
                                             x={tooltipPos.x + 8}
                                             y={tooltipPos.y + 30}
                                             fill="white"
                                             fontSize="16"
                                             fontWeight="bold"
                                             textAnchor="middle"
                                        >
                                             {tooltipPos.value}
                                        </TextSVG>
                                   </Svg>
                              </View>
                         ) : null;
                    }}
                    onDataPointClick={(data) => {
                         let isSamePoint =
                              tooltipPos.x === data.x &&
                              tooltipPos.y === data.y;

                         isSamePoint
                              ? setTooltipPos((previousState) => {
                                     return {
                                          ...previousState,
                                          value: data.value,
                                          visible: !previousState.visible,
                                     };
                                })
                              : setTooltipPos({
                                     x: data.x,
                                     value: data.value,
                                     y: data.y,
                                     visible: true,
                                });
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
                         placeholder={{ label: 'เลือกปี', value: null }}
                         onValueChange={(year) => setYear(year)}
                         style={{ inputAndroid: { color: 'black' } }}
                         items={[
                              { label: '2564', value: '2021' },
                              { label: '2563', value: '2020' },
                              { label: '2562', value: '2019' },
                              { label: '2561', value: '2018' },
                              { label: '2560', value: '2017' },
                         ]}
                    />
               </View>
               <View style={{ paddingTop: '2%' }} />
               <View style={styles.picker}>
                    <RNPickerSelect
                         placeholder={{ label: 'เลือกเดือน', value: null }}
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
}

function priceTable() {
     return (
          <View
               style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
               }}
          >
               <Text>Settings!</Text>
          </View>
     );
}

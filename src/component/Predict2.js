import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function Predict2({ route }) {
     const navigation = useNavigation();
     const { name } = route.params;
     const { month } = route.params;
     const { harvest } = route.params;
     let [plant, setPlant] = useState([]);

     const getPlant = async () => {
          if (name === '' || month === '' || harvest === '') {
               alert('ไม่พบข้อมูล');
          } else {
               await fetch(
                    `http://192.168.0.106:3032/getPlant/${name}/${month}/${harvest}`,
                    {
                         method: 'GET',
                    },
               )
                    .then((res) => res.json())
                    .then((json) => setPlant(json));
          }
     };

     getPlant();

     return (
          /* <Caption style={{ fontSize: 15 }}>
                    ชื่อสินค้าเกษตร {'                '}ราคาสูงสุด {'    '}
                    ราคาต่ำสุด
               </Caption>
               <Text> </Text>
               <Text style={{ fontSize: 20 }}>
                    
                    {'                   '}
                    {parseFloat(plant[0]?.price_max).toFixed(2) || 'loading'}
                    {'        '}
                    {parseFloat(plant[0]?.price_min).toFixed(2) || 'loading'}
               </Text>
               <Text style={{ fontSize: 20 }}>
                    {plant[1]?.plan_name || 'loading'}
                    {'                   '}
                    {parseFloat(plant[1]?.price_max).toFixed(2) || 'loading'}
                    {'        '}
                    {parseFloat(plant[1]?.price_min).toFixed(2) || 'loading'}
               </Text> */
          <DataTable>
               <DataTable.Header>
                    <DataTable.Title>ชื่อสินค้าเกษตร</DataTable.Title>
                    <DataTable.Title numeric>ราคาเฉลี่ยสูงสุด</DataTable.Title>
                    <DataTable.Title numeric>ราคาเฉลี่ยต่ำสุด</DataTable.Title>
                    <DataTable.Title numeric>คาดคะเน</DataTable.Title>
               </DataTable.Header>

               <DataTable.Row>
                    <DataTable.Cell>
                         {plant[0]?.plan_name || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         {parseFloat(plant[0]?.price_max).toFixed(2) || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         {parseFloat(plant[0]?.price_min).toFixed(2) || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         <View style={{ alignItems: 'center', width: '100%' }}>
                              <Button
                                   title=">"
                                   disabled={!plant[0]}
                                   containerStyle={
                                        {
                                             // marginTop: '100%',
                                             // width: '500%',
                                        }
                                   }
                                   buttonStyle={{
                                        backgroundColor: '#549a00',
                                   }}
                                   onPress={() =>
                                        navigation.navigate('Predict3', {
                                             plant: plant[0],
                                             harvest: harvest,
                                        })
                                   }
                              />
                         </View>
                    </DataTable.Cell>
               </DataTable.Row>

               <DataTable.Row>
                    <DataTable.Cell>
                         {plant[1]?.plan_name || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         {parseFloat(plant[1]?.price_max).toFixed(2) || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         {parseFloat(plant[1]?.price_min).toFixed(2) || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         <View style={{ alignItems: 'center', width: '100%' }}>
                              <Button
                                   title=">"
                                   disabled={!plant[1]}
                                   containerStyle={
                                        {
                                             // marginTop: '100%',
                                             // width: '500%',
                                        }
                                   }
                                   buttonStyle={{
                                        backgroundColor: '#549a00',
                                   }}
                                   onPress={() =>
                                        navigation.navigate('Predict3', {
                                             plant: plant[1],
                                             harvest: harvest,
                                        })
                                   }
                              />
                         </View>
                    </DataTable.Cell>
               </DataTable.Row>

               <DataTable.Row>
                    <DataTable.Cell>
                         {plant[2]?.plan_name || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         {parseFloat(plant[2]?.price_max).toFixed(2) || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         {parseFloat(plant[2]?.price_min).toFixed(2) || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         <View style={{ alignItems: 'center', width: '100%' }}>
                              <Button
                                   title=">"
                                   disabled={!plant[2]}
                                   containerStyle={
                                        {
                                             // marginTop: '100%',
                                             // width: '500%',
                                        }
                                   }
                                   buttonStyle={{
                                        backgroundColor: '#549a00',
                                   }}
                                   onPress={() =>
                                        navigation.navigate('Predict3', {
                                             plant: plant[2],
                                             harvest: harvest,
                                        })
                                   }
                              />
                         </View>
                    </DataTable.Cell>
               </DataTable.Row>

               <DataTable.Row>
                    <DataTable.Cell>
                         {plant[3]?.plan_name || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         {parseFloat(plant[3]?.price_max).toFixed(2) || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         {parseFloat(plant[3]?.price_min).toFixed(2) || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         <View style={{ alignItems: 'center', width: '100%' }}>
                              <Button
                                   title=">"
                                   disabled={!plant[3]}
                                   containerStyle={
                                        {
                                             // marginTop: '100%',
                                             // width: '500%',
                                        }
                                   }
                                   buttonStyle={{
                                        backgroundColor: '#549a00',
                                   }}
                                   onPress={() =>
                                        navigation.navigate('Predict3', {
                                             plant: plant[3],
                                             harvest: harvest,
                                        })
                                   }
                              />
                         </View>
                    </DataTable.Cell>
               </DataTable.Row>

               <DataTable.Row>
                    <DataTable.Cell>
                         {plant[4]?.plan_name || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         {parseFloat(plant[4]?.price_max).toFixed(2) || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         {parseFloat(plant[4]?.price_min).toFixed(2) || '-'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                         <View style={{ alignItems: 'center', width: '100%' }}>
                              <Button
                                   title=">"
                                   disabled={!plant[4]}
                                   containerStyle={
                                        {
                                             // marginTop: '100%',
                                             // width: '500%',
                                        }
                                   }
                                   buttonStyle={{
                                        backgroundColor: '#549a00',
                                   }}
                                   onPress={() =>
                                        navigation.navigate('Predict3', {
                                             plant: plant[4],
                                             harvest: harvest,
                                        })
                                   }
                              />
                         </View>
                    </DataTable.Cell>
               </DataTable.Row>
          </DataTable>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: '20%',
          paddingLeft: '10%',
     },
});

export default Predict2;

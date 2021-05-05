import React, { useState } from 'react';
import { View, Picker, StyleSheet, Button } from 'react-native';

const SingIn = () => {
     const [selectedValue, setSelectedValue] = useState('java');
     return (
          <View style={styles.container}>
               <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) =>
                         setSelectedValue(itemValue)
                    }
               >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
               </Picker>
               <Button
                    onPress={() => navigation.navigate('SingUp')}
                    title="Go back from ProfileScreen"
                    color="#f194ff"
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
});

export default SingIn;

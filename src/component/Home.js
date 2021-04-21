import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

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
                    <Text styles={styles.title}> PPlan </Text>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
     },
     title: {
          marginTop: '30%',
          width: '100%',
     },
     image: {
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          position: 'absolute',
     },
});

export default Home;

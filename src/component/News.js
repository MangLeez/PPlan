import React, { useState } from 'react';
import { View, Picker, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const SingIn = () => {
     const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

     return (
          <View style={styles.container}>
               <ScrollView>
                    <Card>
                         <Card.Cover
                              source={{ uri: 'https://picsum.photos/700' }}
                         />

                         <Card.Content>
                              <Title>Card title</Title>
                              <Paragraph>Card content</Paragraph>
                         </Card.Content>

                         <View style={{ paddingTop: '2%' }} />
                         <Card.Cover
                              source={{ uri: 'https://picsum.photos/701' }}
                         />
                         <Card.Content>
                              <Title>Card title</Title>
                              <Paragraph>Card content</Paragraph>
                         </Card.Content>
                    </Card>
               </ScrollView>
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          paddingTop: '10%',
     },
});

export default SingIn;

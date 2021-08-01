import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { List, Card, Paragraph, Title } from 'react-native-paper';
import { Container, Header, Left, Body, Right } from 'native-base'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Six Sticks Events" component={HomeScreen}/>
    </Stack.Navigator>
  )
}

function HomeScreen() {

  return(
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>
          Upcoming Events
        </Text>

        <Card style={styles.card}>
        <Card.Content>
            <Title>Coldplay Concert</Title>
            <Paragraph>Well loved British bank, Coldplay, is coming to you very soon. Look out for more info.</Paragraph>
          </Card.Content>
          <Card.Cover style={{marginTop: 10, height: 200}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Coldplay_-_Global-Citizen-Festival_Hamburg_14.jpg/300px-Coldplay_-_Global-Citizen-Festival_Hamburg_14.jpg' }} />
        </Card>

        <Card style={styles.card}>
        <Card.Content>
            <Title>House of Wax</Title>
            <Paragraph>Life life wax statues that make you wonder if they are wax or real people immortalised! (GASPS!)</Paragraph>
          </Card.Content>
          <Card.Cover style={{marginTop: 10, height: 200}} source={{ uri: 'https://crypticrock.com/wp-content/uploads/2016/05/house-of-wax-1.jpg' }} />
        </Card>

        <Card style={styles.card}>
        <Card.Content>
            <Title>3D Immersive Experience</Title>
            <Paragraph>Get Ready Player One! Wondered what its like to be a part of the virtual world? Wonder no more!</Paragraph>
          </Card.Content>
          <Card.Cover style={{marginTop: 10, height: 200}} source={{ uri: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80' }} />
        </Card>

        <List.Section title="Frequently Asked Questions">
        <View style={styles.list}>
        {dataArray.map((item) => {
          return (
            <List.Accordion
              title={item.title}>
                  <List.Item title={item.content} />
            </List.Accordion>)
        })}
        </View>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  card: {
    marginTop: 20, 
    marginLeft: 15, 
    marginRight: 15,
  }
})

const dataArray = [
    {
      title: "When are the events held?",
      content: "You can check them out on their respective Events pages",
    },
    {
      title: "How much does it cost?",
      content:
        "Prices vary between events, from Free to $50 per person!",
    },
    {
      title: "Why should I attend?",
      content: "Explore new experiences and broaden your perspective!",
    },
   ];
   


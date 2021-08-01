import * as React from "react";
import {
    Text,
    View,
    Button,
    StyleSheet
}
from "react-native";
import { List, Card, Paragraph, Title } from 'react-native-paper';
import { createStackNavigator } from "@react-navigation/stack";
import { exp } from "react-native-reanimated";
import { marginTop, style } from "styled-system";

function EventsHomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Card style={styles.card}>
            <Card.Content>
                <Title>Coldplay Concert</Title>
                <Paragraph>Well loved British bank, Coldplay, is coming to you very soon. Look out for more info.</Paragraph>
            </Card.Content>
            <Card.Cover style={{marginTop: 10, height: 200}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Coldplay_-_Global-Citizen-Festival_Hamburg_14.jpg/300px-Coldplay_-_Global-Citizen-Festival_Hamburg_14.jpg' }} />
            </Card>
            <Button
                style={style.link}
                onPress={() => navigation.navigate("EventsSecond")}
                title="Next Event"
            ></Button>
        </View>
      );
    }

function EventsSecondScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Card style={styles.card}>
            <Card.Content>
                <Title>House of Wax</Title>
                <Paragraph>Life life wax statues that make you wonder if they are wax or real people immortalised! (GASPS!)</Paragraph>
            </Card.Content>
            <Card.Cover style={{marginTop: 10, height: 200}} source={{ uri: 'https://crypticrock.com/wp-content/uploads/2016/05/house-of-wax-1.jpg' }} />
            </Card>
            <Button
                style={style.link}
                onPress={() => navigation.navigate("EventsThird")}
                title="Next Event"
            ></Button>
        </View>
        );
    }    

function EventsThirdScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Card style={styles.card}>
            <Card.Content>
                <Title>3D Immersive Experience</Title>
                <Paragraph>Get Ready Player One! Wondered what its like to be a part of the virtual world? Wonder no more!</Paragraph>
            </Card.Content>
            <Card.Cover style={{marginTop: 10, height: 200}} source={{ uri: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80' }} />
            </Card>
            <Button
              onPress={() => navigation.popToTop()}
              title="Back to Top"
          ></Button>
        </View>
        );
    }   

const Stack = createStackNavigator();

export default function EventsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EventsHome" component={EventsHomeScreen} />
            <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
            <Stack.Screen name="EventsThird" component={EventsThirdScreen} />
        </Stack.Navigator>
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
      marginBottom: 'auto'
    },
  })
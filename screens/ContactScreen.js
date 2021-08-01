import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { List, Title } from 'react-native-paper'

const contactsData = [
  {
    name: "Jerald Evans",
    title: "CEO",
    company: "Baskets International LLC",
    pic: "https://randomuser.me/portraits/men/52.jpg",
  },
  {
    name: "Timothy Charlemagne",
    title: "Founder",
    company: "Philo-Pillow LLC",
    pic: "https://randomuser.me/portraits/men/46.jpg",
  },
  {
    name: "Ariana Venti",
    title: "Chairman",
    company: "Muse Inc",
    pic: "https://randomuser.me/portraits/women/2.jpg",
  },
  {
    name: "Miley Cyprus",
    title: "CEO",
    company: "Cantaloupe Pte Ltd",
    pic: "https://randomuser.me/portraits/women/20.jpg",
  },
];

export default function ContactScreen() {
  return(
    <View style={styles.container}>
      <Title style={styles.title}> Contacts </Title>
      <View style={styles.list}>
        {contactsData.map((item) => {
          return (
            <List.Item
              title={item.name}
              description={item.company, item.title}
              left={props =>
                <Image {...props} style={styles.icon} source={{ uri: item.pic }} />}
            />)
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50, 
  },
  list: {
    marginTop: 20,
    marginLeft: 10, 
    marginRight: 10
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50
  }
})
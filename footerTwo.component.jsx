import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Footer, FooterTab, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function FooterTabEx () {

  const navigation = useNavigation();

  const pressHandler = () => { navigation.navigate('Account'); }
  const pressFav = () => { navigation.navigate('Favorites'); }
  const pressEvents = () => { navigation.navigate('Events'); }

    return (
        <Footer style={styles.footer}>
          <FooterTab>
      
            <Button>
              <MaterialCommunityIcons 
                name="calendar-month-outline" 
                size={28} 
                color="black"
                onPress={pressEvents} />
            </Button>

            <Button>
              <MaterialCommunityIcons 
                name="heart-multiple-outline" 
                size={28} 
                color="red" 
                onPress={pressFav} />
            </Button>

            <Button>
              <MaterialCommunityIcons 
                name="account-circle" 
                size={28} 
                color="black" 
                onPress={pressHandler} />
            </Button>

          </FooterTab>
        </Footer>
    )
}

const styles = StyleSheet.create({
  footer:{
    width: '100%',
    bottom: 0,
    justifyContent: 'center', 
    alignItems: 'center',
  },
})



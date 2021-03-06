import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Linking, ScrollView, Button, TouchableOpacity } from 'react-native';

import FooterTabEx from '../components/footer/footerTwo.component';


export default function About({navigation}) {
    return (
      <View style={{flex:1}}>
        <ScrollView style={{backgroundColor: '#C4C4C4' }}>

          <View style={{alignItems:'center'}}>
            <Text style={styles.resourceTitle}>ABOUT QUEERSTORY</Text>
            <Text style={styles.resourceText}>Queerstory is an application that can (and should!) be used as an educational resource
              teaching us about important and momentous figures and events in LGBTQ+ history.</Text>
            <Text style={styles.resourceText}>From the Holocaust to Stonewall. From Socrates to RuPaul. LGBTQ history is embedded
              in all areas of history. They were scholars, royals, scientists, samurais, 
              and political & social activists.</Text>
            <Text style={styles.resourceText}>This application exists to teach and remind of the impact LGBTQ people have made to
              advance our world.</Text>
            <Text style={styles.resourceText}>Please use this application as a resource to teach, learn, and grow.</Text>
            <Text style={styles.resourceText}>“It is absolutely imperative that every human being’s freedom and human rights 
            are respected, all over the world.” –Jóhanna Sigurðardóttir</Text>
          </View>

        </ScrollView>
        <FooterTabEx />
      </View>
    );
  }

const styles = StyleSheet.create({
  resourceTitle:{
    color: '#7AD7F0',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    textShadowRadius: 2,
    textShadowOffset:{width: 1, height: 1},
    textShadowColor: 'black',
    marginTop: 22,
    marginBottom: 15,
   },
   resourceText:{
    color: 'black',
    textShadowColor: '#FF69B4',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius: 0.5,
    margin: 10,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
   },
});
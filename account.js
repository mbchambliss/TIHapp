import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FooterTabEx from '../components/footer/footerTwo.component';

function AccountScreen() {
    const navigation = useNavigation();
    const pressFav = () => { navigation.navigate('Favorites'); }
    const pressContact = () => { navigation.navigate('Contact Us'); }


    return (
      <View style={{flex:1}}>
        <ScrollView style={{backgroundColor: '#e5e5e5'}}>

          <View style={{alignItems:'center'}}>
            <Image style={styles.photo} source={require('../assets/marsha-cropped.jpg')}/>
            <Text style={styles.name}> Marsha P. Johnson</Text>
            <TouchableOpacity 
              style={styles.opac}
              onPress={pressFav} >  
              <Text style={styles.buttonText}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opac}>  
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opac}>  
              <Text style={styles.buttonText}>Tell A Friend About Queerstory</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.opac}
              onPress={pressContact} >  
              <Text style={styles.buttonText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opac_last}>  
              <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
        <FooterTabEx/>
      </View>
    );
  }

export default AccountScreen;


const styles = StyleSheet.create({
  photo:{
    height: 180,
    width: 180,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 100,
  },
  name:{
    color: '#FF69B4',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    textShadowRadius: 2,
    textShadowOffset:{width: 1, height: 1},
    textShadowColor: 'black',
   },
   opac: {
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: '#FF69B4',
    borderRadius: 10,
    height: 40,
    width: 225,
    marginTop: 15,
   },
   opac_last: {
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: '#FF69B4',
    borderRadius: 10,
    height: 40,
    width: 225,
    marginVertical: 15,
   },
   buttonText:{
    color: '#FF69B4',
    textShadowRadius: 1,
    textShadowOffset:{width: 0, height: 1},
    textShadowColor: 'black',
    alignSelf:'center',
    paddingTop: '4.5%',
    fontWeight: 'bold',
   },
});


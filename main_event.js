import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'native-base';

import InfoCard from '../components/info-card/card.component';
import FooterTabEx from '../components/footer/footerTwo.component';


export default function Events({navigation}) {
    return (
      <View style={{flex: 1, backgroundColor: '#e5e5e5'}}>
        <ScrollView>
          
          <InfoCard />

        </ScrollView>
        <FooterTabEx />
      </View>
    );
}


const styles = StyleSheet.create({
  footer:{
    width: '100%',
    bottom: 0,
    justifyContent: 'center', 
    alignItems: 'center',
  },
})



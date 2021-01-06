import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'native-base';

import InfoCard from '../components/info-card/card.component';
import FooterTabEx from '../components/footer/footerTwo.component';

export default function FavoritesScreen({navigation}) {
	return(
		<View style={{flex: 1}}>
	        <ScrollView style={{backgroundColor: '#C4C4C4' }}>
	        	<Text style={styles.resourceTitle}>YOUR GAY FAVORITES</Text>
	        	<InfoCard />
	        </ScrollView>
	        <FooterTabEx />
      	</View>
	)
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
    marginBottom: 5,
   },
})
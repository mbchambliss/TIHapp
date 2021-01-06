import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';

import FooterTabEx from '../components/footer/footerTwo.component';

function ContactScreen({navigation}) {
    return (
      <View style={{flex:1}}>
        <ScrollView style={{backgroundColor: '#e5e5e5'}}>
	        <View style={{alignItems:'flex-start'}}>
	        	<Text style={styles.feedback}>CONTACT QUEERSTORY</Text>
	        	<Text style={styles.text}>Name</Text>
	        	<TextInput style={styles.textInput} />
	        	<Text style={styles.text}>E-mail</Text>
	        	<TextInput style={styles.textInput} />
	        	<Text style={styles.text}>Message</Text>
	        	<TextInput style={styles.inputMessage} 
	        		multiline
	        		numberOfLines={6} 
	        	/>

	        	<TouchableOpacity style={styles.button}> 
	        		<Text style={styles.btnText}>Submit</Text>
	        	</TouchableOpacity>
		        
	        </View>
        </ScrollView>
        <FooterTabEx />
      </View>
    );
}


export default ContactScreen;


const styles = StyleSheet.create({
	feedback: {
		alignSelf: 'center',
		fontWeight: 'bold',
		color: '#FF69B4',
		fontSize: 22,
		marginTop: '20%',
		marginBottom: 15,
		textDecorationLine: 'underline',
		textShadowRadius: 1,
    	textShadowOffset:{width: 1, height: 1},
    	textShadowColor: 'black',
	},
	textInput: { 
		width: '75%', 
		height: 30, 
		borderColor: '#1dacd6', 
		borderWidth: 2,
		marginLeft: '10%',
		marginBottom: 15,
	},
	inputMessage: { 
		width: '75%', 
		height: 100, 
		borderColor: '#1dacd6', 
		borderWidth: 2,
		marginLeft: '10%',
		marginBottom: 30,
	},
	text: {
		fontSize: 18,
		marginLeft: '10%',
		marginBottom: '2%',
		color: '#FF69B4',
		fontWeight: 'bold',
		textShadowRadius: 1,
    	textShadowOffset:{width: 1, height: 1},
    	textShadowColor: 'black',
	},
	button: {
		borderWidth: 4,
		borderColor: '#1dacd6',
		alignSelf: 'center',
		backgroundColor: '#1dacd6',
		borderRadius: 50,
	},
	btnText: {
		color: 'white', 
		fontSize: 18,
		marginVertical: 5,
		marginHorizontal: 20,
		fontWeight: 'bold',
		textShadowRadius: 3,
    	textShadowOffset:{width: 1, height: 1},
    	textShadowColor: '#FF69B4',
	},
})
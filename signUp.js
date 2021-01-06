import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';

import FooterTabEx from '../components/footer/footerTwo.component';

function SignUpScreen({navigation}) {

	const signIn = () => { navigation.navigate('Sign In'); }

	const [allValues, setAllValues] = useState({
	   name: "",
	   username: "",
	   password: "",
	   confirmPassword: ""
	});

	const printValues = e => {
	    e.preventDefault();
	    console.log(`This is my name: ${allValues.name}.`);
	  };
	
	const changeHandler = e => {
	   setAllValues({...allValues, [e.target.name]: e.target.value});
	};

    return (
      <View style={{flex:1}}>
        <ScrollView style={{backgroundColor: '#e5e5e5'}}>
	        <View style={{alignItems:'flex-start'}}>
	        	<Text style={styles.feedback}>SIGN UP</Text>
	        	
	        	<Text style={styles.text}>Name</Text>
	        	<TextInput style={styles.textInput}
			        name="name"
			        onChange={changeHandler}
			    />

	        	<Text style={styles.text}>Username</Text>
	        	<TextInput style={styles.textInput} 
	        		name="username"
			        onChange={changeHandler}
	        	/>
	        	<Text style={styles.text}>Password</Text>
	        	<TextInput style={styles.textInput} 
	        		secureTextEntry={true} 
	        		name="password"
			        onChange={changeHandler}
	        	/>
	        	<Text style={styles.text}>Confirm Password</Text>
	        	<TextInput style={styles.textInput} 
	        		secureTextEntry={true} 
	        		name="confirmPassword"
			        onChange={changeHandler}
	        	/>

	        	<TouchableOpacity style={styles.button}>
	        		<Text style={styles.btnText}
	        			onPress={printValues}>
	        			Submit
	        		</Text>
	        	</TouchableOpacity>
	        	
	        	<View style={{ flexDirection:'row' }}>
	        		<Text style={styles.already}>Already a user?</Text>
		        	<Text onPress={signIn} 
	              		style={styles.alreadyBtnText}>
				    	Sign In
				    </Text>
				</View>

	        </View>
        </ScrollView>
        <FooterTabEx />
      </View>
    );
}

export default SignUpScreen;


const styles = StyleSheet.create({
	feedback: {
		alignSelf: 'center',
		fontWeight: 'bold',
		color: '#FF69B4',
		fontSize: 22,
		marginTop: '15%',
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
	already: {
		fontSize: 16,
		marginTop: '9%',
		marginLeft: '24%',
		color: '#FF69B4',
		fontWeight: 'bold',
		textShadowRadius: 1,
    	textShadowOffset:{width: 1, height: 1},
    	textShadowColor: 'black',
    	alignSelf: 'center',
	},
	alreadyBtnText: {
		color: '#1dacd6', 
		fontSize: 16,
		fontWeight: 'bold',
		textShadowRadius: .5,
    	textShadowOffset:{width: .7, height: .7},
    	textShadowColor: 'black',
    	marginLeft: '2%',
    	marginTop: '9%',
    	paddingLeft: 2,
    	textDecorationLine: 'underline',
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
		marginTop: 20,
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
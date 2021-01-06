import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { useNavigation } from '@react-navigation/native';


import FooterTabEx from '../components/footer/footerTwo.component';

class SignInScreen extends Component {

	constructor(props){
		super(props);

		this.state = {
			username: '',
			password: ''
		}
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ username: '', password: ''})
	};

	signInWithGoogleAsync = async () => {
	  try {
	    const result = await Google.logInAsync({
	      //androidClientId: YOUR_CLIENT_ID_HERE,
	      iosClientId: '1079917112725-hc28fpgiml9gri4f3osut1lhpa43u890.apps.googleusercontent.com',
	      scopes: ['profile', 'email'],
	    });

	    if (result.type === 'success') {
	      return result.accessToken;
	    } else {
	      return { cancelled: true };
	    }
	  } catch (e) {
	  	console.log(e);
	    return { error: true };
	  }
	};

	handleChange = (key, value) => {
		this.setState({ [key]: value });
	};

	render(){
		const {navigation} = this.props;
	    return(
	      <View style={{flex:1}}>
	        <ScrollView style={{backgroundColor: '#e5e5e5'}}>
		        <View style={{alignItems:'flex-start'}}>
		        	<Text style={styles.feedback}>SIGN IN</Text>
		        	<Text style={styles.text}>Username</Text>
		        	<TextInput style={styles.textInput} 
		        		name="username"
		        		value={this.state.username}
		        		onChangeText={value => this.handleChange('username', value)}
		        	/>
		        	<Text style={styles.text}>Password</Text>
		        	<TextInput style={styles.textInput} 
		        		secureTextEntry={true} 
		        		name="password"
		        		value={this.state.password}
		        		onChangeText={value => this.handleChange('password', value)}
		        	/>

		        	<TouchableOpacity style={styles.button}> 
		        		<Text style={styles.btnText}
		        			onPress={this.handleSubmit}>
		        		Submit</Text>
		        	</TouchableOpacity>
		        	
		        	<TouchableOpacity style={styles.button}
		        		onPress={signInWithGoogleAsync}
		        	> 
		        		<Text style={styles.btnText}>Google Sign In</Text>
		        	</TouchableOpacity>
		        	
		        	<View style={{ flexDirection:'row' }}>
		        		<Text style={styles.already}>Not a user?</Text>
			        	<Text 
		              		style={styles.alreadyBtnText}
		              		onPress={() => {navigation.navigate('Sign Up')}}>
					    	Sign Up
					    </Text>
					</View>

		        </View>
	        </ScrollView>
	        <FooterTabEx />
	      </View>
	    );
	}
}

export default SignInScreen;


const styles = StyleSheet.create({
	feedback: {
		alignSelf: 'center',
		fontWeight: 'bold',
		color: '#FF69B4',
		fontSize: 22,
		marginTop: '20%',
		marginBottom: '10%',
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
		marginBottom: '8%',
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
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../pages/signUp';
import Header from '../components/header/header.component.jsx';
import { useNavigation } from '@react-navigation/native';


const { Navigator, Screen } = createStackNavigator();

export const SignUpStack = ({navigation}) => (
	<Navigator headerMode="screen">
		<Screen name="Sign Up" component={SignUp} 
			options={({ navigation, route }) => ({ 
				headerTitle: () => <Header navigation={navigation} />,
		})}
		/>
	</Navigator>
);

export default SignUpStack;
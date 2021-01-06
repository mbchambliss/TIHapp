import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../pages/contact_us';
import Header from '../components/header/header.component.jsx';
import { useNavigation } from '@react-navigation/native';

const { Navigator, Screen } = createStackNavigator();

export const ContactStack = ({navigation}) => (
	<Navigator headerMode="screen">
		<Screen name="Contact Us" component={Contact} 
			options={({ navigation, route }) => ({ 
				headerTitle: () => <Header navigation={navigation} />,
		})}
		/>
	</Navigator>
);

export default ContactStack;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../pages/about';
import Header from '../components/header/header.component.jsx';


const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({navigation}) => (
	<Navigator headerMode="screen">
		<Screen name="About" component={About} 
			options={({ navigation, route }) => ({ 
				headerTitle: () => <Header navigation={navigation} />,
			})}
		/>
	</Navigator>
);

export default AboutStack;
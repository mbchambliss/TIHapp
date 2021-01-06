import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Resources from '../pages/resources';
import Header from '../components/header/header.component.jsx';


const { Navigator, Screen } = createStackNavigator();

export const ResourcesStack = ({navigation}) => (
	<Navigator headerMode="screen">
		<Screen name="Resources" component={Resources} 
			options={({ navigation, route }) => ({ 
				headerTitle: () => <Header navigation={navigation} />,
		})}
		/>
	</Navigator>
);

export default ResourcesStack;
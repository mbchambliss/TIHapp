import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../pages/account';
import Header from '../components/header/header.component.jsx';
import { useNavigation } from '@react-navigation/native';


const { Navigator, Screen } = createStackNavigator();

export const AccountStack = ({navigation}) => (
	<Navigator headerMode="screen">
		<Screen name="Account" component={Account} 
			options={({ navigation, route }) => ({ 
				headerTitle: () => <Header navigation={navigation} />,
		})}
		/>

	</Navigator>
);

export default AccountStack;
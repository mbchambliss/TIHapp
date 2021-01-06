import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Events from '../pages/main_event';
import Account from '../pages/account';
import Resources from '../pages/resources';
import Header from '../components/header/header.component.jsx';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({navigation}) => (
	<Navigator headerMode="screen">
		<Screen name="Events" component={Events} 
			options={({ navigation, route }) => ({ 
				headerTitle: () => <Header navigation={navigation} />,
			})}
		/>

	</Navigator>
);

export default HomeStack;
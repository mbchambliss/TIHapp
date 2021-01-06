import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from '../pages/favorites';
import Header from '../components/header/header.component.jsx';
import { useNavigation } from '@react-navigation/native';


const { Navigator, Screen } = createStackNavigator();

export const FavoritesStack = ({navigation}) => (
	<Navigator headerMode="screen">
		<Screen name="Favorites" component={Favorites} 
			options={({ navigation, route }) => ({ 
				headerTitle: () => <Header navigation={navigation} />,
		})}
		/>

	</Navigator>
);

export default FavoritesStack;
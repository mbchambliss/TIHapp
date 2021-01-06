import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from './aboutStack';
import ResourcesStack from './resourcesStack';
import ContactStack from './contactStack';
import AccountStack from './accountStack';
import FavoritesStack from './favoritesStack';
import HomeStack from './homeStack';
import SignUpStack from './signUpStack';
import SignInStack from './signInStack';

import { DrawerContent } from '../components/drawer/drawerContent.js';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (

		<NavigationContainer>
			<Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
				<Drawer.Screen name="Events" component={HomeStack} /> 
				<Drawer.Screen name="About" component={AboutStack} /> 
				<Drawer.Screen name="Resources" component={ResourcesStack} /> 
				<Drawer.Screen name="Contact Us" component={ContactStack} />
				<Drawer.Screen name="Account" component={AccountStack} />
				<Drawer.Screen name="Favorites" component={FavoritesStack} />
				<Drawer.Screen name="Sign Up" component={SignUpStack} />
				<Drawer.Screen name="Sign In" component={SignInStack} />
			</Drawer.Navigator>
		</NavigationContainer>
);

export default DrawerNavigator;


const styles = StyleSheet.create({
	user:{
		fontSize: 16,
		fontWeight: 'bold',
		marginLeft: 15,
		marginTop: 40,
	},
});
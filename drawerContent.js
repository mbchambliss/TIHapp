import React from 'react';
import { View, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {Avatar, Title, Caption, Paragraph, Drawer, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons';


export function DrawerContent(props){
	return(
		<View style={{flex: 1}}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{flexDirection:'row', marginTop: 15}}>
							<Avatar.Image source={require('../../assets/marsha-cropped.jpg')}
							size={60}>
							</Avatar.Image>
							<View style={{marginLeft: 15}}>
								<Title style={styles.title}>Marsha P.</Title>
								<Caption style={styles.caption}>@yagrlMarshaP</Caption>
							</View>
						</View>
					</View>

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({color,size}) => (
								<Icon 
									name='calendar-month-outline'
									color={color} 
									size={size} 
								/>
							)}
							label='Events'
							onPress={()=> {props.navigation.navigate('Events')}}
						/>
						<DrawerItem
							icon={({color,size}) => (
								<Icon 
									name='information-outline'
									color={color} 
									size={size} 
								/>
							)}
							label='About'
							onPress={()=> {props.navigation.navigate('About')}}
						/>
						<DrawerItem
							icon={({color,size}) => (
								<Icon 
									name='bomb'
									color={color} 
									size={size} 
								/>
							)}
							label='Resources'
							onPress={()=> {props.navigation.navigate('Resources')}}
						/>
						<DrawerItem
							icon={({color,size}) => (
								<Icon 
									name='email-edit-outline'
									color={color} 
									size={size} 
								/>
							)}
							label='Contact Us'
							onPress={()=> {props.navigation.navigate('Contact Us')}}
						/>
						<DrawerItem
							icon={({color,size}) => (
								<Icon 
									name='account-circle-outline'
									color={color} 
									size={size} 
								/>
							)}
							label='Account'
							onPress={()=> {props.navigation.navigate('Account')}}
						/>
						<DrawerItem
							icon={({color,size}) => (
								<Icon 
									name='heart-outline'
									color={color} 
									size={size} 
								/>
							)}
							label='Favorites'
							onPress={()=> {props.navigation.navigate('Favorites')}}
						/>
						<DrawerItem
							icon={({color,size}) => (
								<FontAwesome 
									name='sign-in'
									color={color} 
									size={size} 
								/>
							)}
							label='Sign Up'
							onPress={()=> {props.navigation.navigate('Sign Up')}}
						/>
						<DrawerItem
							icon={({color,size}) => (
								<FontAwesome 
									name='sign-in'
									color={color} 
									size={size} 
								/>
							)}
							label='Sign In'
							onPress={()=> {props.navigation.navigate('Sign In')}}
						/>
					</Drawer.Section>

				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					icon={({color,size}) => (
						<Icon 
							name='exit-to-app'
							color={color} 
							size={size} 
						/>
					)}
					label='Sign Out'
					onPress={()=> {}}
				/>
			</Drawer.Section>
		</View>
	);
}

const styles = StyleSheet.create({
	drawerContent:{
		flex: 1,
	},
	userInfoSection:{
		paddingLeft: 20,
	},
	bottomDrawerSection:{
		marginBottom: 15,
		borderTopColor: '#f4f4f4',
		borderTopWidth: 1,
	},
	title:{
		fontSize: 16,
		marginTop: 3,
		fontWeight: 'bold',
	},
	caption:{
		fontSize: 14,
		lineHeight: 14,
	},
	drawerSection:{
		marginTop: 15,
	}
});
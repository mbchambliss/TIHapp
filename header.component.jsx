import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Dimensions } from 'react-native';


export default function Header({navigation}) {
    
    const openMenu = () =>{
      navigation.dispatch(DrawerActions.openDrawer());
    }

    return(
      <View style={styles.header}>

		      <MaterialCommunityIcons name="menu" size={28} style={styles.menu_icon} 
            onPress={openMenu} />
          <View>
            <Text style={styles.text}>QUEERSTORY</Text>
          </View>

      </View>
		)
}



const styles = StyleSheet.create({
  header: {
    backgroundColor: '#151515',
    height: '100%',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FF69B4',
    fontWeight: 'bold',
    fontSize: 19,
    letterSpacing: 1,
  },
  menu_icon:{
    color: '#FF69B4',
    position: 'absolute',
    left: 20,
  },
});
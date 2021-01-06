import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

import ResourceScreen from '../../pages/resources.js';

function Menu() {
    const navigation = useNavigation();

		return(
      <View style={styles.menu}>

        <Button
          icon={
            <Icon
              name="cog"
              size={15}
              color="white"
              onPress={()=> navigation.navigate('contact_us')}
            />
          }
          style={styles.resourceButton}
        />

      </View>
		);
}

const styles = StyleSheet.create({
  menu:{
  },
  resourceButton:{
    marginRight: 5,
    marginTop: 5,
  },
});

export default Menu;
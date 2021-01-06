import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';



class Header extends Component {
	render() {
		return(
			<Text style={styles.red}>
			THIS IS THE HEADER
			</Text>
		)
  	}
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
});

export default Header;
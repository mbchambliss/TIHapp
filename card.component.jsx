import React, {Component} from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import ResourceScreen from '../../pages/resources.js';

import {db} from '../../firebase.js';

class InfoCard extends Component {

  state = {
    title: '',
    short_desc: '',
    link: ''
  };

  getEventDate(){
    let d = new Date();
    let month = (d.getMonth()+1).toString();
    let day = d.getDate().toString();
    let mmdd = month.concat("-", day);
    return mmdd;
  };

  async getEvent() {
    db.collection('events').doc(this.getEventDate()).get()
      .then(documentSnapshot => {
        let title = documentSnapshot.get('title');
        let short_desc = documentSnapshot.get('short description');
        let link = documentSnapshot.get('link');
        this.setState({ title : title, short_desc : short_desc, link : link });
    })
  };

  async getQuery() {
    let date = "12-24"
    db.collection('events').get()
      .then((querySnapshot) => {
        const docSnaps = querySnapshot.docs;
        console.log(docSnaps[0].data());
    });
  };

                  

  render() {
    this.getEvent();

		return(
      <View>
       <View style={styles.card}>
			    <Text style={styles.title}>
            { this.state.title }
			    </Text>
	        
	        <Text style={styles.content}>
			      { this.state.short_desc }
			    </Text>

			    <View style={styles.align}>
				    <Text onPress={() => Linking.openURL(this.state.link)} 
              style={styles.more}>
			    		More Info
			    	</Text>

            <Button
              icon={ <Icon name="heart" size={15} color="white" /> }
              style={styles.resourceButton}
            />
          </View>
        </View>
      </View>
		)
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FF69B4',
    height: 'flex',
    width: '85%',
    						//why error here?
    						//display: 'flex',
    
    alignSelf: 'center',
    //alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 4,
    fontSize: 18,
  },
  content: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  heart:{
  	width: 30, 
  	height: 30,
  },
  more:{
  	color: 'white',
  	paddingLeft: 8,
  	fontSize: 16,
  	fontWeight: 'bold',
  	paddingRight: '62%',
  },
  align: {
  	display: 'flex',
  	flexDirection: 'row',
  },
});

export default InfoCard;
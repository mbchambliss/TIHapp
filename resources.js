import React, { useState } from 'react';
import { StyleSheet, Text, View, Linking, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import FooterTabEx from '../components/footer/footerTwo.component';

function ResourceScreen({navigation}) {
    return (
      <View style={{flex:1}}>
        <ScrollView>

        	<View style={styles.resourceBlock}>
	        	<Text style={styles.resourceTitle}>POLITICAL</Text>
	        	<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('http://www.equalityfederation.org/')}>
				  Equality Federation</Text>
				<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://www.hrc.org/')}>
				  Human Rights Campaign</Text>
				<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://www.thetaskforce.org/')}>
				  National LGBTQ Task Force</Text>
				<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://victoryfund.org/')}>
				  Victory Fund</Text>
	        </View>

	        <View style={styles.resourceBlock}>
	        	<Text style={styles.resourceTitle}>YOUTH</Text>
	        	<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://www.glsen.org/')}>
				  Gay, Lesbian, and Straight Education Network</Text>
				<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://www.accreditedschoolsonline.org/resources/lgbtq-student-support/')}>
				  LGBTQ Student Resources & Support</Text>
				<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://gsanetwork.org/')}>
				  GSA Network</Text>
				<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://pointfoundation.org/')}>
				  Point Foundation</Text>
				<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('http://safeschoolscoalition.org/')}>
				  Safe Schools Coalition</Text>
				<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://www.thetrevorproject.org/')}>
				  The Trevor Project</Text>
	        </View>

			<View style={styles.resourceBlock}>
	        	<Text style={styles.resourceTitle}>BISEXUAL</Text>
        		<Text style={styles.resourceText}
        		onPress={() => Linking.openURL('http://www.biresource.net/')}>
        		Bisexual Resource Center</Text>
        	</View>	        

	        <View style={styles.resourceBlock}>
	        	<Text style={styles.resourceTitle}>TRANSGENDER</Text>
	        	<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://transequality.org/')}>
				  National Center for Transgender Equality (NCTE)</Text>
				  <Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://srlp.org/')}>
				  Sylvia Rivera Law Project</Text>
				  <Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://transgenderlawcenter.org/')}>
				  Transgender Law Center</Text>
				  <Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://www.transgenderlegal.org/')}>
				  Transgender Legal Defense & Education Fund</Text>
	        </View>

	        <View style={styles.resourceBlock}>
		        <Text style={styles.resourceTitle}>LEGAL</Text>
		        <Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://www.aclu.org/issues/lgbt-rights?redirect=lgbt-rights')}>
				  ACLU</Text>
				<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://www.lambdalegal.org/')}>
				  Lambda Legal</Text>
				<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://lgbtbar.org/')}>
				  The LGBT Bar</Text>
				<Text style={styles.resourceText}
				    onPress={() => Linking.openURL('https://www.nclrights.org/')}>
				  National Center for Lesbian Rights (NCLR)</Text>
	        </View>

	        <View style={styles.resourceBlock}>
	        	<Text style={styles.resourceTitle}>PARENTS OF</Text>
	        	<Text style={styles.resourceTitle}>LGBTQ+ CHILDREN</Text>
	        	<Text style={styles.resourceText}
					    onPress={() => Linking.openURL('https://pflag.org/')}>
					  Parents, Families, and Friends of Lesbians & Gays (PFLAG)</Text>
				<Text style={styles.resourceText}
					    onPress={() => Linking.openURL('http://www.straightforequality.org/')}>
					  Straight For Equality</Text>
	        </View>
	    </ScrollView>
        <FooterTabEx />
      </View>
    );
}

export default ResourceScreen;


const styles = StyleSheet.create({
	resourceBlock: {
	    backgroundColor: '#FF69B4',
	    borderBottomLeftRadius: 10,
	    borderBottomRightRadius: 10,
	    borderTopLeftRadius: 10,
	    borderTopRightRadius: 10,
	    margin: 10,
	    padding: 5,
	 },
	 resourceTitle:{
	 	color: '#7AD7F0',
	    fontWeight: 'bold',
	    fontSize: 22,
	    textAlign: 'center',
	    textShadowRadius: 2,
	    textShadowOffset:{width: 1, height: 1},
	    textShadowColor: 'black',
	 },
	 resourceText:{
	 	color: '#f5f5f5',
	 	fontStyle: 'italic',
	 	textDecorationColor: '#7AD7F0',
	 	textDecorationLine: 'underline',
	 	textDecorationStyle: 'solid',
	 	textShadowRadius: 2,
	    margin: 10,
	    fontSize: 17,
	    textAlign: 'center',
	    fontWeight: 'bold',
	 },
})
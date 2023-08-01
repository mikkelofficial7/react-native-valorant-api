import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Color from '../constant/Colors.js'
import Strings from '../constant/Strings.js'

const DefaultButton = ({ title, color, backgroundColor, onPress}) => (
  <TouchableOpacity
      style={[
	      styles.buttonBody, //for customizing button by parameter
	      backgroundColor && { backgroundColor }
	  ]}
      
    onPress={onPress}
    underlayColor={Color.white}>

    <Text style={[
	      styles.buttonText,
	      color && { color }
	  ]}> {title}
    </Text>

	</TouchableOpacity>
);

const styles = StyleSheet.create({  
   buttonBody: {
     marginTop:10,
     paddingTop:10,
     paddingBottom:10,
   },
   buttonText: {
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 20,
   },
});

export default DefaultButton;

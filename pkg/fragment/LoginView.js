import React from 'react'
import { Dimensions } from "react-native"
import { ImageBackground } from "react-native"
import { StyleSheet, Text, View, Alert, Image } from 'react-native'
import Constant from '../constant/Constants.js'
import Color from '../constant/Colors.js'
import Strings from '../constant/Strings.js'

import DefaultButton from '../uiComponent/DefaultButton.js'

var width = Dimensions.get('window').width; // match parent
var height = Dimensions.get('window').height; // match parent

class LoginView extends React.Component {  
  render() {  
    return (  
      <ImageBackground source={Constant.posterUrl} style={styles.backgroundImage}>

        <View style={styles.containerCenter}> 

          <Image
              style={styles.posterLogo}
              source={Constant.iconMain}/> 

          <Text style={styles.title}>
               { Strings.app_name }
          </Text> 

        </View> 

        <View style={styles.containerFooter}>
          <DefaultButton 
             title={Strings.login_text} 
             color={Color.white}
             backgroundColor={Color.green}
             onPress={() => this.props.navigation.navigate('Main')}/>
        </View>

      </ImageBackground>
    );  
  }  
}

const styles = StyleSheet.create({  
   backgroundImage: {
      flex: 1,
      maxWidth: '100%',
      resizeMode: 'cover'
   },
   containerCenter: {
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      justifyContent: 'center', 
      alignItems: 'center'
   },
   title: {  
     textAlign: 'center',
     fontSize: 30,  
     color: Color.white
   },  
   posterLogo: {
      width: 100,
      height: 100,
      borderRadius: 100,
      resizeMode: 'center'
   },
   containerFooter: {
      flex: 1,
      justifyContent: 'flex-end',
   },
});  

export default LoginView;
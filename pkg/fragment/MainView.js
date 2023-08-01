import React, { useEffect, useState} from 'react';
import { Dimensions, StatusBar, ImageBackground} from "react-native"
import { StyleSheet, Text, View, Alert, Image, ActivityIndicator } from 'react-native'
import { Header } from '@rneui/base';

import Constant from '../constant/Constants.js'
import Color from '../constant/Colors.js'
import Strings from '../constant/Strings.js'
import Url from '../constant/Url.js' //this is const declaration

import onGetAllCharacter from '../network/NetworkApi.js'

import ListViewAllValorantCharacter from '../uiComponent/ListViewAllValorantCharacter.js' //this is component declaration

var width = Dimensions.get('window').width; // match parent
var height = Dimensions.get('window').height; // match parent

class MainView extends React.Component { 
  state = { response: [], isLoading: true }

  componentDidMount = () => {
      onGetAllCharacter({ onStateSet: newState => this.setState(newState) });
  }

  render() { 
    if(this.state.isLoading) {
      return(<ActivityIndicator size='large' style={styles.loadingView}/>)

    } else {
      return(
        <View>
            <ListViewAllValorantCharacter dataList={this.state.response.data} />
        </View>
      );
      
    }
  }  
}

const styles = StyleSheet.create({
  loadingView: {
      marginTop: 10,
  },
});


export default MainView;
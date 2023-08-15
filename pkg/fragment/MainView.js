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

const MainView = () => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Data starting to load");
    
    onGetAllCharacter({ onStateSet: newState => {
      setResponse(newState.response);
      setIsLoading(false);
    }});
  }, []);

  if(isLoading) {
    return(<ActivityIndicator size='large' style={styles.loadingView}/>)

  } else {
    return(
      <View>
          <ListViewAllValorantCharacter dataList={response.data} onItemClick={(itemId) => showModal(itemId)} />
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  loadingView: {
      marginTop: 10,
  },
});


export default MainView;
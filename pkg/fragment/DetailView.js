import React, { useEffect, useState} from 'react';
import { Dimensions, StatusBar, ImageBackground} from "react-native"
import { StyleSheet, Text, View, Alert, Image, ActivityIndicator } from 'react-native'

const DetailView = ({ route, navigation }) => {
  const { heroId } = route.params;

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
          <ListViewAllValorantCharacter dataList={response.data} onItemClick={(itemId) => navigation.navigate('Detail', { heroId: itemId })} />
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  loadingView: {
      marginTop: 10,
  },
});


export default DetailView;
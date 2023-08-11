import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, } from 'react-native'
import Color from '../constant/Colors.js'

const ItemViewAllValorantCharacter = ({ dataItem, onItemClick }) => (
  <TouchableWithoutFeedback onPress={() => onItemClick(dataItem.uuid) }>
    <View style={styles.itemView}>
      <Image style={styles.itemImage} source={{ uri: dataItem.displayIcon }} />
      <Text style={styles.itemName}>{dataItem.displayName}</Text>
      <Text style={styles.itemDeveloper}>Developed By: {dataItem.developerName}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  itemView: {
      flex: 1,
      flexDirection: 'column',
      margin: 1,
  },
  itemName: {
      color: Color.black,
      textAlign: 'center',
      fontWeight: 'bold'
  },
  itemImage: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
  },
  itemDeveloper: {
      color: Color.black,
      fontSize: 10,
      textAlign: 'center',
  },
});

export default ItemViewAllValorantCharacter;

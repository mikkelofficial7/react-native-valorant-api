import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import Color from '../constant/Colors.js'
import Strings from '../constant/Strings.js'
import showModal from '../util/Modal.js'

import ItemViewAllValorantCharacter from './ItemViewAllValorantCharacter.js'

const ListViewAllValorantCharacter = ({ dataList }) => (
  <FlatList
    data={dataList}
    numColumns={3}
    keyExtractor={({id}) => id}
    renderItem={({item}) => (
      <ItemViewAllValorantCharacter dataItem={item} onItemClick={(itemId) => showModal(itemId)} />
    )}
  />
);

export default ListViewAllValorantCharacter;

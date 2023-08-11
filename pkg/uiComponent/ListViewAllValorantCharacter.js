import React from 'react'
import { FlatList } from 'react-native'
import showModal from '../util/Modal.js'

import ItemViewAllValorantCharacter from './ItemViewAllValorantCharacter.js'

const ListViewAllValorantCharacter = ({ dataList }) => (
  <FlatList
    data={dataList}
    numColumns={3}
    keyExtractor={item => item.uuid}
    renderItem={({item}) => (
      <ItemViewAllValorantCharacter key={item.uuid} dataItem={item} onItemClick={(itemId) => showModal(itemId)} />
    )}
  />
);

export default ListViewAllValorantCharacter;

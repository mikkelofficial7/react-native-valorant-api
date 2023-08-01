import React from 'react';
import Url from '../constant/Url.js'

const onGetAllCharacter = ({ onStateSet }) => {
  fetch(Url.getAllCharacter, {
       method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {       
       onStateSet({response: responseJson, isLoading: false});
    })
    .catch((error) => {
       onStateSet({response: [], isLoading: false});
    });
};

export default onGetAllCharacter
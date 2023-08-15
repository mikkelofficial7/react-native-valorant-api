import axios from 'axios';
import Url from '../constant/Url.js'

const onGetAllCharacter = ({ onStateSet }) => {
  console.log("Data is coming from url: "+Url.getAllCharacter);

  axios({
   method: 'GET',
   url: Url.getAllCharacter,
   headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
   },
 }).then(function (response) {
      console.log("Data load successfully..");
      console.log(response.data);
      
      onStateSet({response: response.data, isLoading: false});
   })
   .catch(function (error) {
      console.log("Data load failed: "+error);

      onStateSet({response: [], isLoading: false});
   });
};

export default onGetAllCharacter
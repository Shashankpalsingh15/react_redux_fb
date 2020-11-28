import axios from "axios";
import { DETAIL } from "../Type";

// const pokUrl= process.env.REACT_APP_POKEMON_URL;

export const onDetails = () => async(dispatch) => {
    try{
      const result = await axios.get(`https://api.jsonbin.io/b/5fc10662045eb86f1f87e17c`)
      dispatch({ type: DETAIL, payload: result.data.photos });  
      console.log('Cart Data',result.data.photos)
    }catch(error){
      console.log("Error", error);
    }
  }
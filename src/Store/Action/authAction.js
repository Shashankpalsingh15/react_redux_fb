import axios from "axios";
import { LOGIN, SIGNUP } from "../Type";

const baseUrl = process.env.REACT_APP_API_URL;

export const onLogin = (values) => async (dispatch) => {
  try {
    const result = await axios.post(`${baseUrl}login`, values);
    dispatch({ type: LOGIN, payload: result.data });
  } catch (error) {
    console.log("Error", error);
  }
};

export const onSignup = (values) => async(dispatch) =>{
    try{
      const result = await axios.post(`${baseUrl}register`, values);
      dispatch({ type: SIGNUP, payload: result.data });  
    }catch(error){
      console.log("Error", error);
    }
}

import axios from "axios";
import { LOGIN, SIGNUP,DETAIL } from "../Type";


const baseUrl = process.env.REACT_APP_API_URL;


export const onLogin = (values, history) => async (dispatch) => {

  try {
    const result = await axios.post(`${baseUrl}login`, values);
    dispatch({ type: LOGIN, payload: result.data });
    console.log("Login Result",result.data.token);
    if(result.data.token !== ""){
        history.push("/dashboard");
    }else{
      alert("Token Not Found.")
    }
  } catch (error) {
    console.log("Error", error);
  }
};

export const onSignup = (values, history) => async(dispatch) =>{
    try{
      const result = await axios.post(`${baseUrl}register`, values);
      dispatch({ type: SIGNUP, payload: result.data });  
      console.log("Signup Result",result.data.token);
      if(result.data.token !== ""){
        history.push("/");
    }else{
      alert("Token Not Found.")
    }
    }catch(error){
      console.log("Error", error);
    }
}



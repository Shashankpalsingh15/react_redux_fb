import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onLogin } from "../Store/Action/authAction";
import { LOGIN } from "../Store/Type";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  console.log("Dispatch", dispatch);
  console.log("state", state);

  const handleLogin = () => {
    dispatch(
      onLogin({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
    );
  };

  return (
    <div>
    <form>

    <label>
      User Name:
      <input type="Email" />        
    </label>
    <br />
    <label>
      Password:
      <input type="Password" />        
    </label>
    <br />
  </form>
  <button
  onClick={() => {
    handleLogin();
  }}
>
  Login
</button>
    </div>
  );
};

export default Login;

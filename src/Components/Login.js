import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { onLogin } from "../Store/Action/authAction";
import { LOGIN } from "../Store/Type";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(
      onLogin({
        email, //eve.holt@reqres.in
        password, //cityslicka
      }, history)
    );
  };

  return (
    <div>
      <form>
        <label>
          User Name:
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
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

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onSignup } from "../Store/Action/authAction";
import { SIGNUP } from "../Store/Type";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log("Dispatch", dispatch);
  // console.log("state", state);

  const handleSignup = () => {
    dispatch(
      onSignup(
        {
          email, //"eve.holt@reqres.in",
          password, //"pistol"
        },
        history
      )
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
          handleSignup();
        }}
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;

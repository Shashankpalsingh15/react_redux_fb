import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { onSignup } from "../Store/Action/authAction";
import { SIGNUP } from '../Store/Type';

const Signup = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  console.log("Dispatch", dispatch);
  console.log("state", state);

  const handleSignup = () => {
    dispatch(
        onSignup({
                "email": "eve.holt@reqres.in",
                "password": "pistol"
      })
    );
  };

    return (
        <div>
        <button
        onClick={() => {
            handleSignup();
        }}
      >
        Signup
      </button>
        </div>
    )
}

export default Signup
import { LOGIN, SIGNUP } from "../Type";

const initialState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
      case SIGNUP:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return { state };
  }
};

import { DETAIL } from "../Type";

const initialState = {
  isLoading: false,
  data: [],
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

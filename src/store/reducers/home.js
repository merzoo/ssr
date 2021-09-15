import * as types from "../action-types";
let initialState = { list: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_HOME_LIST:
      return {
        list: action.payload,
      };
    default:
      return state;
  }
}

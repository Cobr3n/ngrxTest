import {ActionTypes, Union} from "./base.actions";
import { HttpClient } from '@angular/common/http';

export const initialState = <any>{
  test: 1
};

export function baseReducer (state = initialState, action: Union) {
  switch (action.type) {
    case ActionTypes.GetBase:
      state = {
        ...state,
        test : action.payload
      };
      return state;
    case ActionTypes.RequestBase:
      state = {
        ...state,
        items: action.payload
      }
      return state;

    default:
      return state;
  }
}

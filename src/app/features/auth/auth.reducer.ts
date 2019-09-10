import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  user: string;
}

export const initialState: AuthState = {
  user: null
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case (AuthActionTypes.UserLogin): {
      return { ...state, user: action.payload };
    }
    case (AuthActionTypes.UserLogout): {
      return { ...state, user: null };
    }
    default:
      return state;
  }
}

import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  UserLogin = '[Auth] User Login',
  UserLogout = '[Auth] User Logout'
}

export class UserLogin implements Action {
  readonly type = AuthActionTypes.UserLogin;
  constructor(public payload: string) { }
}

export class UserLogout implements Action {
  readonly type = AuthActionTypes.UserLogout;

}


export type AuthActions = UserLogin | UserLogout;

import { AuthState } from './auth.reducer';
import { State } from './../../reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getAuthState = createFeatureSelector('auth');

export const getUserName = createSelector(getAuthState,
    (authSate: AuthState) => authSate.user);

export const getIsAuth = createSelector(getUserName, (user: string) => {
    return user ? true : false;
});

// export const someSelector = createSelector(getUserName, getIsAuth,
//     (user: string, isAuth: boolean)=> )

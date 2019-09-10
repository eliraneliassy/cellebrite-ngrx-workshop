import { AuthState, reducer } from './../features/auth/auth.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  auth: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

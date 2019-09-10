import { FeedState, feedReducer } from './../features/feed/feed.reducer';
import { AuthState, authReducer } from './../features/auth/auth.reducer';
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
  feed: FeedState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  feed: feedReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

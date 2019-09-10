import { Action } from '@ngrx/store';
import { FeedActions, FeedActionTypes } from './feed.actions';


export const feedFeatureKey = 'feed';

export interface FeedState {

  items: any[];
  loading: boolean;
  page: number;

}

export const initialState: FeedState = {
  items: [],
  loading: false,
  page: 0

};

export function feedReducer(state = initialState, action: FeedActions): FeedState {
  switch (action.type) {
    case (FeedActionTypes.FetchFeed): {
      return { ...state, loading: true };
    }
    case (FeedActionTypes.FetchFeedSuccess): {
      return {
        ...state, loading: false,
        items: action.payload, page: state.page + 1
      };
    }
    default:
      return state;
  }
}

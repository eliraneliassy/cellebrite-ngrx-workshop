import { Action } from '@ngrx/store';

export enum FeedActionTypes {
  FetchFeed = '[Feed] Fetch Feed',
  FetchFeedSuccess = '[Feed] Fetch Feed Success'

}

export class FetchFeed implements Action {
  readonly type = FeedActionTypes.FetchFeed;
}

export class FetchFeedSuccess implements Action {
  readonly type = FeedActionTypes.FetchFeedSuccess;
  constructor(public payload: any[]) { }
}


export type FeedActions = FetchFeed | FetchFeedSuccess;

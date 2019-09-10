import { FeedState } from './feed.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const getFeedState = createFeatureSelector('feed');

export const getIsLoading = createSelector(getFeedState,
    (feed: FeedState) => feed.loading);

export const getItems = createSelector(getFeedState,
    (feed: FeedState) => feed.items);

export const getCurrentPage = createSelector(getFeedState,
    (feed: FeedState) => feed.page);
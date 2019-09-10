import { State } from './../../reducers/index';
import { FeedService } from './../../services/feed.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FeedActionTypes, FetchFeedSuccess } from './feed.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getCurrentPage } from './feed.selectors';



@Injectable()
export class FeedEffects {
  constructor(
    private actions$: Actions,
    private feedService: FeedService,
    private store: Store<State>
  ) { }

  @Effect()
  fetchFeed$ = this.actions$.pipe(
    ofType(FeedActionTypes.FetchFeed),
    withLatestFrom(this.store.select(getCurrentPage)),
    switchMap((action, page) => this.feedService.getFeed(page)),
    map((items: any[]) => new FetchFeedSuccess(items))
  );

}

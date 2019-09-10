import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed/feed.component';
import { StoreModule } from '@ngrx/store';
import * as fromFeed from './feed.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FeedEffects } from './feed.effects';


@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    StoreModule.forFeature(fromFeed.feedFeatureKey, fromFeed.feedReducer),
    EffectsModule.forFeature([FeedEffects])
  ]
})
export class FeedModule { }

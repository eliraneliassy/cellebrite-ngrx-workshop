import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed/feed.component';
import { StoreModule } from '@ngrx/store';
import * as fromFeed from './feed.reducer';


@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    StoreModule.forFeature(fromFeed.feedFeatureKey, fromFeed.reducer)
  ]
})
export class FeedModule { }

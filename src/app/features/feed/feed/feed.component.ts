import { getItems } from './../feed.selectors';
import { FetchFeed } from './../feed.actions';
import { FeedService } from '../../../services/feed.service';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  items$: Observable<any[]>;

  constructor(
    private authService: AuthService,
    private feedService: FeedService,
    private store: Store<State>) { }

  ngOnInit() {
    // this.feedService.getFeed(0).subscribe((items: any[]) => {
    //   this.items = items;
    // })

    this.store.dispatch(new FetchFeed());

    this.items$ = this.store.select(getItems);


  }

}


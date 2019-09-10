import { FeedService } from './../../../../../services/feed.service';
import { AuthService } from './../../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  userName = 'Eliran';
  items: any[];

  constructor(
    private authService: AuthService,
    private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getFeed(0).subscribe((items: any[]) => {
      this.items = items;
    })
  }

}


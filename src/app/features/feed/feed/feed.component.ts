import { AuthService } from './../../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  userName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserName().subscribe(user => this.userName = user);
  }

}

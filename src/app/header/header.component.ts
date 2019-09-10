import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserName().subscribe(user => {
      this.userName = user;
    });
  }

}

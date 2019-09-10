import { AuthService } from '../services/auth.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  userName$: Observable<string>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userName$ = this.authService.getUserName();
  }

}

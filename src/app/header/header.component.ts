import { getUserName, getIsAuth } from './../features/auth/auth.selectors';
import { State } from './../reducers/index';
import { AuthService } from '../services/auth.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserLogout } from '../features/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  userName$: Observable<string>;
  isAuth$: Observable<boolean>;
  // userName: string;

  constructor(
    private authService: AuthService,
    private store: Store<State>) { }

  ngOnInit() {
    // this.userName$ = this.authService.getUserName();
    // this.store.subscribe((state: State) => {
    //   this.userName = state.auth.user;
    // });
    this.userName$ = this.store.select(getUserName);
    this.isAuth$ = this.store.select(getIsAuth);
  }

  logout(){
    this.store.dispatch(new UserLogout());
  }

}

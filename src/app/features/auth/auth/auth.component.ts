import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserLogin } from '../auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private store: Store<any>) { }

  ngOnInit() {
    this.form = new FormGroup({
      userName: new FormControl(null, Validators.required)
    });
  }

  login() {
    // this.authService.login(this.form.value.userName);
    this.store.dispatch(new UserLogin(this.form.value.userName));
  }

}

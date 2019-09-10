import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userName: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private router: Router) { }

  getUserName(): Observable<string> {
    return this._userName.asObservable();
  }

  private setUserName(user: string) {
    this._userName.next(user);
  }

  login(userName: string) {
    this.setUserName(userName);
    this.router.navigateByUrl('/feed');
  }

  logout() {
    this.setUserName(null);
    this.router.navigateByUrl('/');
  }
}

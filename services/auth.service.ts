import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: string;

  constructor(private router: Router) { }

  login(userName: string) {
    this.userName = userName;
    this.router.navigateByUrl('/feed');
  }

  logout() {
    this.userName = null;
    this.router.navigateByUrl('/');
  }
}

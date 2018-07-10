import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(email: string, pass: string): void {
    localStorage.email = email;
    localStorage.pass = pass;
  }

  getUserLogin() {
    return localStorage.email;
  }

  logout(): void {
    delete localStorage.email;
    delete localStorage.pass;
  }

  isLogged(): boolean {
    return localStorage.email && localStorage.pass;
  }
}

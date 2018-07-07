import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(private loginService: LoginService) {
   }

  ngOnInit() {
  }

  login(email: string, pass: string) {
     this.loginService.login(email, pass);
  }
}

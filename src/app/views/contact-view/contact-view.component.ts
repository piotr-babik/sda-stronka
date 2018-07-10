import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  formData;

  constructor(loginService: LoginService) { 
    this.formData = {
      email: loginService.getUserLogin(),
      interests: [
        "angular",
        "kawa"
      ]
    };
  }

  ngOnInit() {
  }

  submitContactForm() {
    console.log(this.formData);
  }
}

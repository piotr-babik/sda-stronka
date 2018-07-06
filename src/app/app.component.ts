import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentViewName = 'home';
  selectView(name: string) {
    this.currentViewName = name;
  }
}


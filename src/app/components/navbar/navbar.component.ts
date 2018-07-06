import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() navi: EventEmitter<string> = new EventEmitter();

  navigate(name: string) {
    this.navi.emit(name);
  }
}

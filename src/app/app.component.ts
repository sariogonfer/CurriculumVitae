import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isPowerOn : Boolean = false;

  toggle(): Boolean {
    this.isPowerOn = ! this.isPowerOn;
    return this.isPowerOn;
  }
}

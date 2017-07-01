import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isPowerOn : Boolean = false;
  scale: number = 1;

  constructor() {
    window.onresize = () => {
      this.calculateScale();
    };
  }

  ngOnInit() {
    this.calculateScale();
  }

  calculateScale() {
    let hScale = window.innerHeight / 920;
    let wScale = window.innerWidth / 1000;

    this.scale = Math.min(hScale, wScale);
    console.log("Scale ", this.scale);
  }

  toggle(): Boolean {
    this.isPowerOn = ! this.isPowerOn;
    return this.isPowerOn;
  }
}

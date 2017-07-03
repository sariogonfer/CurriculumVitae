import { Component, OnInit } from '@angular/core';
import { StudiesService } from './studies.service';
import { Study } from './studies.interfaces';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  private _studies: Array<Study> = [];
  private _selected: number = 0;

  constructor(private studiesService: StudiesService) {
    studiesService.getData().subscribe( (studies) => this._studies = studies );
  }

  ngOnInit() {
  }

  get studies(): Array<Study> {
    return this._studies;
  }

  get selected(): number {
    return this._selected;
  }

  onMouseEnterIn(id: number) {
    console.log("MOUSE ENTER IN " + id)
    this._selected = id;
  }

  onMouseLeaveFrom(id: number) {
    console.log("MOUSE LEAVE FROM " + id)
    // this._selected = null;
  }
}

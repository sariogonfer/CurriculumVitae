import { Component, OnInit } from '@angular/core';
import { PapersService } from './papers.service';
import { Paper } from './papers.interfaces';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent implements OnInit {
  private _papers: Array<Paper> = [];
  private _selected: number = 0;

  constructor(private papersService: PapersService) {
    papersService.getData().subscribe( (papers) => this._papers = papers );
  }

  ngOnInit() {
  }

  get papers(): Array<Paper> {
    return this._papers;
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

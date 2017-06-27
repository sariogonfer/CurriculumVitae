import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Experience } from './experience.interfaces';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  private _experiences: Array<Experience> = [];
  private _selected: number = null;

  constructor(private experienceService: ExperienceService) {
    experienceService.getData().subscribe( (studies) => this._experiences = studies );
  }

  ngOnInit() {
  }

  get experiences(): Array<Experience> {
    return this._experiences;
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

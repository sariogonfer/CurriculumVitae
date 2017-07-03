import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { Skill } from './skills.interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private _skills: Array<Skill> = [];
  private _selected: number = 0;

  constructor(private skillsService: SkillsService) {
    skillsService.getData().subscribe( (skills) => this._skills = skills );
  }

  ngOnInit() {
  }

  get skills(): Array<Skill> {
    return this._skills;
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

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Skill } from './skills.interfaces';
import { Http } from '@angular/http';

@Injectable()
export class SkillsService {

  constructor(private http: Http ) {
  }

  getData(): Observable<Skill[]> {
    return this.http
      .get('../../assets/data/skills.json')
      .map(x => x.json() )
      .map( (data) => <Skill[]>data)
  }
}

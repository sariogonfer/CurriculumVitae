import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Experience } from './experience.interfaces';
import { Http } from '@angular/http';

@Injectable()
export class ExperienceService {

  constructor(private http: Http ) {
  }

  getData(): Observable<Array<Experience>> {
    return this.http
      .get('./assets/data/experience.json')
      .map( data => data.json() as Array<Experience> )
      .do(data => console.log(data))
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Study } from './studies.interfaces';
import { Http } from '@angular/http';

@Injectable()
export class StudiesService {

  constructor(private http: Http ) {
  }

  getData(): Observable<Array<Study>> {
    return this.http
      .get('./assets/data/studies.json')
      .map( data => data.json() as Array<Study> )
      .do(data => console.log(data))
  }
}
